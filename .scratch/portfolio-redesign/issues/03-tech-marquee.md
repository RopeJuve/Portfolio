# 03 — Tech Marquee (replaces Skills section)

**What to build:** Replace the static Skills icon grid with a self-scrolling horizontal Tech Marquee, expanded to reflect the full-stack tech list, migrated to the new design system, and placed directly under Hero.

**Blocked by:** 01 — Design-system foundation

**Status:** done

- [x] Skills section is replaced by a self-scrolling horizontal marquee of technology icons
- [x] Tech list expanded to include Node.js, Express, MongoDB, Google Cloud, and Firebase alongside the existing frontend stack (React, Next.js, JS, HTML, Sass, Git)
- [x] Marquee is visually migrated to the new design-system tokens and sits directly under Hero as a thin, secondary strip
- [x] A data-shape test (Vitest) asserts the tech list includes all the full-stack entries

## Comments

Implemented in commit b12d663. FontAwesome's free brand set has no
icons for Express, MongoDB, Google Cloud, or Firebase, so the whole
tech list (old and new entries alike) moved to `simple-icons` SVG path
data via a small new `SimpleIcon` wrapper, rendered through a new
`components/TechMarquee/TechMarquee.tsx` (`data.techStack`, renamed
from `skills`). The old `components/Skills/` and `components/NextIcon/`
were deleted as fully superseded. Looping is pure CSS (Tailwind
`animate-marquee` keyframes translating a duplicated, `aria-hidden`
second copy by -50%), with `motion-reduce:animate-none` and a
hover-pause. Verified live in-browser: renders correctly, animates,
and pauses on hover.

Code review (Standards + Spec) caught and fixed: a duplicate-child
accessible-name issue (`aria-label` + a redundant `sr-only` span
announcing the title twice), a test that only covered the 5 new
entries without guarding the original 6 against regression, and dead
code in `components/Skill/Skill.tsx` — its `"skills"` variant became
unreachable once `Skills.tsx` (its only caller) was deleted, so it was
removed; `ProjectCard.tsx`'s four call sites (its only remaining
consumer) were simplified to match. Visually re-verified the Projects
section's "MADE WITH" badges still render identically after that
cleanup.
