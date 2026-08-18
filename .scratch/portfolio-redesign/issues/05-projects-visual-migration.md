# 05 — Projects: case-study visual migration

**What to build:** Restyle the Projects section to the flat/pill design system — no content changes.

**Blocked by:** 01 — Design-system foundation

**Status:** done

- [x] `ProjectsCards`/`ProjectCard` migrated to 0px-radius, full-bleed project imagery and pill-shaped tech tags per the new design system
- [x] No changes to project content/data — visual migration only

## Comments

Implemented in commit 883f09b. Card: `rounded-[2.5rem]` + shadow +
texture → flat hairline-bordered card (`rounded-flat`, `border-border`,
`bg-linen`); image moved out of the padded area so it's genuinely
full-bleed against the card edge. Tech badges dropped their icons for
plain pill tags (matching Services), via a new shared
`components/ui/pill.tsx` — avoids re-duplicating the exact class-string
smell ticket 04's own review had just flagged. `data.ts`'s `projects`
array is untouched; only rendering changed. Deleted `Skill`, `ApiIcon`,
`ReduxIcon`, `TailwindCSS` as fully dead code (verified no other
callers repo-wide).

One visual note, not a bug: the laptop/device-mockup screenshot assets
(e.g. `Laptop.png`) have generous whitespace baked into the PNG itself
around the mockup graphic, so they don't read as edge-to-edge product
photography the way the reference intends even though the `&lt;img&gt;`
element itself is genuinely full-bleed (verified: other project images
like the IP Tracker screenshot fill their full-bleed container edge to
edge correctly). Re-cropping those assets would be a content change,
which this ticket explicitly excludes.

Code review (Standards + Spec) found no bugs — confirmed the Pill
extraction eliminates rather than introduces duplication, confirmed no
dangling references to the deleted components, and confirmed
`data.ts` is genuinely untouched.
