# 06 — About: repositioned copy + visual migration

**What to build:** Rewrite About's copy to match the full-stack/business-outcome positioning and migrate its visuals to the new design system.

**Blocked by:** 01 — Design-system foundation

**Status:** done

- [x] About copy rewritten to reflect the full-stack, business-outcome positioning (replacing the current frontend-only framing in `data.ts`'s `aboutMe`)
- [x] About section visually migrated to the new design-system tokens

## Comments

Rewrote `aboutMe` in `data.ts` to open with "full-stack web developer"
and echo the Positioning Statement, dropping the old tech-list framing.
`About.tsx` now uses the same flat bordered-card pattern as
`ServiceCard` (`border border-border rounded-flat bg-linen`) instead of
the old `bg-frame bg-texture` background. Code review (Standards +
Spec) found no hard violations; only minor judgement calls (prose-test
brittleness, one pre-existing `id="about me"` space left untouched as
out of scope).
