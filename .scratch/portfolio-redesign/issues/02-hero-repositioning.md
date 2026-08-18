# 02 — Hero: repositioned copy + visual migration

**What to build:** Rewrite the Hero section's copy to the new positioning statement and full-stack framing, and migrate its visuals to the new design system.

**Blocked by:** 01 — Design-system foundation

**Status:** done

- [x] Hero headline/subtitle replaced with the new positioning statement ("I design and develop modern websites, landing pages, and custom web applications for businesses and startups") and full-stack framing, removing "Frontend Web Developer"
- [x] Hero visually migrated to the new color/typography/shape tokens from ticket 01
- [x] Profile photo restyled to fit the flatter, restrained aesthetic (e.g. 0px-radius flat crop, hairline border) rather than its current treatment
- [x] Hero remains the first section on the page

## Comments

Implemented in commit 419bff1. Headline/subtitle text and `profileImg`
moved to `data.ts` (unchanged pattern from before). Switched the source
photo from `profile1.png` (circular crop with an old-palette matte baked
in) to `profile.png` (plain rectangular cutout), since the flat/hairline
treatment can't work cleanly over a pre-baked circular vignette. h1/h2
typography comes for free from ticket 01's global base styles — no
Hero-specific type changes needed. Code review (Standards + Spec) caught
and fixed a weak test assertion (only checked absence of "frontend", not
presence of "full-stack") and a redundant duplicate `rounded-flat` class.
