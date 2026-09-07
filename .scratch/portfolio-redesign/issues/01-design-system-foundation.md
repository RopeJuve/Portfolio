# 01 — Design-system foundation (colors, typography, shape) on site chrome

**What to build:** Define the new reference-driven design system — the 8-token monochrome palette, Archivo typography at the reference's type scale, and a flat-card/pill-button shape language — and apply it to `NavBar` and `Footer` so it's visible and verifiable on every page before inner sections migrate. Also wire up Vitest as the project's test runner, since none currently exists, so later tickets have somewhere to put data tests.

**Blocked by:** None — can start immediately.

**Status:** done

- [x] `globals.css` defines the 8-token monochrome palette (Carbon Black, Bone, Ink, Linen, Ash, Parchment, Stone, Clay) replacing the current beige/olive tokens and background texture image
- [x] `tailwind.config.js` exposes Archivo as the site's typeface (weights 300 and 400) replacing Roboto Condensed/Noto Sans, with the reference's type scale (12/14/17/22/40/70/101px) and matching line-heights/letter-spacing
- [x] Shape tokens support 0px radius (cards/images) and full pill/999px radius (buttons/tags) as distinct, addressable values — not one shared `--radius`
- [x] `NavBar` and `Footer` are migrated to the new tokens and visibly reflect the new palette/typography/shape on every page
- [x] Vitest is added as the project's test runner with a `test` script in `package.json` (a trivial smoke test is acceptable; no real assertions required yet)

## Comments

Implemented in commit 64e313f. Palette tokens live as CSS custom
properties in `globals.css` (`--color-carbon` etc.), referenced by
`tailwind.config.js`'s named colors and legacy aliases alike. Shape
language exposed as explicit `rounded-flat`/`rounded-pill` utilities.
Code review (Standards + Spec) caught and fixed: palette location,
missing explicit shape tokens, and a line-height override bug where
stale `leading-*` classes were silently beating the new type scale's
line-heights. Also fixed a pre-existing `next/head` usage in the App
Router layout that was breaking `next build`.
