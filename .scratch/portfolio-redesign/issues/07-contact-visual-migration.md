# 07 — Contact: visual migration only

**What to build:** Restyle the Contact form to the new flat/pill design system — no logic changes.

**Blocked by:** 01 — Design-system foundation

**Status:** done

- [x] Contact form inputs/layout restyled to the new flat/pill tokens (colors, typography, radius)
- [x] Existing react-hook-form + zod validation behavior is unchanged

## Comments

Replaced the old `bg-frame border-primary rounded-3xl shadow-[...]`
brutalist field styling with the established flat-card pattern
(`border border-border rounded-flat bg-linen`), and gave labels the
site's caption typography (`font-header text-caption uppercase`).
react-hook-form/zod wiring (`register`, `handleSubmit`, `errors`,
`contactSchema`) is untouched. Code review (Standards + Spec) found no
real violations — one Standards finding citing a nonexistent
`.label` CSS class was verified as a false positive. Left the
red/green validation-status text colors as-is since the 8-token
monochrome palette has no semantic error/success equivalents.
