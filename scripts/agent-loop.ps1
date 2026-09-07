<#
.SYNOPSIS
  Repeatedly scans .scratch/*/issues/*.md for Status: ready-for-agent tickets and
  runs a fresh headless `claude` session to implement each one, one at a time.

.DESCRIPTION
  Each ticket gets its own `claude -p` invocation, which means each run starts
  with a clean context window (no carryover from the previous ticket). The
  script re-scans for ready-for-agent tickets after every run, so it keeps
  going until none remain (or a run fails to move the ticket out of
  ready-for-agent, in which case it stops rather than looping forever).

.USAGE
  powershell -File scripts/agent-loop.ps1
  powershell -File scripts/agent-loop.ps1 -MaxIssues 3   # override the 100-iteration default cap
#>

param(
  [int]$MaxIssues = 100,        # safety cap on iterations; 0 = no limit
  [int]$TimeoutMinutes = 30     # per-issue wall-clock cap
)

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $PSScriptRoot
$logDir = Join-Path $repoRoot '.scratch\.agent-loop-logs'
New-Item -ItemType Directory -Force -Path $logDir | Out-Null

function Get-ReadyIssue {
  Get-ChildItem -Path (Join-Path $repoRoot '.scratch') -Recurse -Filter '*.md' -File |
    Where-Object { $_.FullName -match '\\issues\\' } |
    Where-Object { (Get-Content $_.FullName -Raw) -match '(?m)^\*\*Status:\*\*\s*ready-for-agent\s*$' } |
    Sort-Object DirectoryName, Name |
    Select-Object -First 1
}

$done = 0
while ($true) {
  if ($MaxIssues -gt 0 -and $done -ge $MaxIssues) {
    Write-Host "Reached MaxIssues limit ($MaxIssues). Stopping."
    break
  }

  $issue = Get-ReadyIssue
  if (-not $issue) {
    Write-Host "No more ready-for-agent issues found. Done."
    break
  }

  $relPath = $issue.FullName.Substring($repoRoot.Length + 1)
  Write-Host "==> Implementing $relPath"

  $prompt = @"
Implement the ticket at $relPath.

- Read the ticket file fully and follow the repo's conventions in CLAUDE.md and docs/agents/issue-tracker.md.
- Use the /implement skill's workflow: implement the work, run typechecking and tests, then run /code-review on the diff.
- Check off each completed item in the ticket's checklist.
- When the ticket is fully implemented and verified, change its `Status:` line from `ready-for-agent` to `done`.
- Commit the implementation and the ticket-status update to the current branch with a descriptive commit message. Do not push.
- If you cannot complete the ticket, leave its Status as-is and explain why in your final message instead of marking it done.
"@

  $logFile = Join-Path $logDir ("{0}-{1}.log" -f (Get-Date -Format 'yyyyMMdd-HHmmss'), $issue.BaseName)

  $psi = Start-Process -FilePath 'claude' `
    -ArgumentList @('-p', $prompt, '--permission-mode', 'acceptEdits') `
    -WorkingDirectory $repoRoot `
    -NoNewWindow -PassThru `
    -RedirectStandardOutput $logFile `
    -RedirectStandardError "$logFile.err"

  $exited = $psi.WaitForExit($TimeoutMinutes * 60 * 1000)
  if (-not $exited) {
    Write-Warning "Timed out after $TimeoutMinutes minutes on $relPath. Killing process and stopping loop."
    Stop-Process -Id $psi.Id -Force -ErrorAction SilentlyContinue
    break
  }

  $stillReady = (Get-Content $issue.FullName -Raw) -match '(?m)^\*\*Status:\*\*\s*ready-for-agent\s*$'
  if ($stillReady) {
    Write-Warning "$relPath is still marked ready-for-agent after the run. See $logFile. Stopping loop to avoid looping on a failure."
    break
  }

  Write-Host "==> Finished $relPath (log: $logFile)"
  $done++
}

Write-Host "Processed $done issue(s) this run."
