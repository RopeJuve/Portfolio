# Design spec — Robert Shterjov portfolio

Achromatic editorial system. No hues, no gradients, no shadows, no icons. Structure comes from hairline rules, generous negative space, and a hard contrast between huge light display type and small uppercase micro-type.

Target stack: **Tailwind CSS + shadcn/ui**.

---

## 1. Color

Only greys. Never introduce a brand hue, accent color, or gradient.

| Token | Hex | Use |
|---|---|---|
| `bone` | `#f0f0f0` | Page background, card background |
| `ink` | `#2a2a2a` | All text, all hairlines, dark button/monogram fill |
| `paper` | `#fafafa` | Text on ink, light chip fill |
| `mute` | `#8f8f88` | Secondary/meta text only (never body copy) |
| `stone` | `#e6e4e0` | Image placeholder behind photos |
| `black` | `#000000` | Link hover only |

`tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      bone:  '#f0f0f0',
      ink:   '#2a2a2a',
      paper: '#fafafa',
      mute:  '#8f8f88',
      stone: '#e6e4e0',
    },
  },
}
```

shadcn `globals.css` — map the CSS variables so components inherit the system rather than fighting it:

```css
:root {
  --background: 0 0% 94.1%;      /* bone   */
  --foreground: 0 0% 16.5%;      /* ink    */
  --card: 0 0% 94.1%;
  --card-foreground: 0 0% 16.5%;
  --primary: 0 0% 16.5%;         /* ink    */
  --primary-foreground: 0 0% 98%;/* paper  */
  --muted: 0 0% 90%;
  --muted-foreground: 0 0% 56%;  /* mute   */
  --border: 0 0% 16.5%;          /* hairlines are ink, not a tint */
  --input: 0 0% 16.5%;
  --ring: 0 0% 16.5%;
  --radius: 0.25rem;
}
```

Dark mode is not part of this system. Do not add a toggle.

---

## 2. Typography

Two families only.

- **Display / UI** — `Archivo` (stand-in for Founders Grotesk). Weights **300** and **400** only. Never 500+.
- **Editorial accent** — `Source Serif 4` (stand-in for Editorial Neue). Weight 400. Used *only* for lead paragraphs — one per section maximum.

```ts
fontFamily: {
  sans:  ['Archivo', 'Helvetica Neue', 'Arial', 'sans-serif'],
  serif: ['"Source Serif 4"', 'Georgia', 'serif'],
}
```

### Type scale

Add these as Tailwind utilities and use them by name — do not hand-tune sizes per component.

| Name | Size | Weight | Line height | Tracking | Case | Use |
|---|---|---|---|---|---|---|
| `text-display` | `clamp(56px,7vw,101px)` | 300 | 0.8 | `-0.06em` | UPPER | h1 only |
| `text-section` | `clamp(40px,5vw,70px)` | 300 | 0.88 | `-0.03em` | UPPER | h2, footer wordmark |
| `text-card` | 22px | 400 | 1.17 | `-0.02em` | UPPER | h3 |
| `text-lead` | 17px | 400 serif | 1.2 | `-0.018em` | sentence | Lead paragraph |
| `text-body` | 14px | 400 | 1.2 | `-0.018em` | sentence | Body copy |
| `text-micro` | 12px | 400 | 1.2 | `0.06em` | UPPER | Nav, buttons, chips |
| `text-meta` | 12px | 400 | 1.2 | `0.08em` | UPPER | Eyebrows, labels, captions |

```ts
fontSize: {
  display: ['clamp(56px,7vw,101px)', { lineHeight: '0.8',  letterSpacing: '-0.06em'  }],
  section: ['clamp(40px,5vw,70px)',  { lineHeight: '0.88', letterSpacing: '-0.03em'  }],
  card:    ['22px', { lineHeight: '1.17', letterSpacing: '-0.02em'  }],
  lead:    ['17px', { lineHeight: '1.2',  letterSpacing: '-0.018em' }],
  body:    ['14px', { lineHeight: '1.2',  letterSpacing: '-0.018em' }],
  micro:   ['12px', { lineHeight: '1.2',  letterSpacing: '0.06em'   }],
  meta:    ['12px', { lineHeight: '1.2',  letterSpacing: '0.08em'   }],
}
```

Rules:
- Negative tracking scales with size. Big type is tighter, never looser.
- Positive tracking belongs only to uppercase 12px type.
- `text-wrap: balance` on `h1`, `text-wrap: pretty` on body copy.
- Cap measure: body `max-w-[52ch]`, lead `max-w-[46ch]`, hero copy `max-w-[34ch]`.

---

## 3. Layout

- Container: `max-w-[1440px] mx-auto px-[29px]`.
- **29px is the grid unit.** Gutters, column gaps, and header nav gaps all use it (`gap-[29px]`).
- Section rhythm: `pt-[115px]` between major sections. Sub-blocks inside a section step down to `pt-14` / `pt-10`.
- Full-bleed elements escape the container with `-mx-[29px]`, then re-pad their own content `px-[29px]`.
- Grids are `repeat(auto-fit, minmax(Xpx, 1fr))` so they collapse without breakpoint soup:
  - Work: `minmax(420px, 1fr)`, `gap-y-20 gap-x-[29px]`
  - Services: `minmax(240px, 1fr)`
  - About / Contact: `minmax(360px, 1fr)`, `gap-[29px]`

---

## 4. Hairlines

The only structural device. Always `1px solid ink` — never a grey tint, never 2px, never a shadow.

- Section headers: rule *below* the h2 row (`border-b border-ink pb-4`).
- Section openers: rule *above* the block (`border-t border-ink pt-10`).
- List tables: `border-t` on every row, `border-b` on the final row only.
- **Grid cards: draw borders on the children, not gaps on the parent.** Parent gets `border-t border-l`, each card gets `border-r border-b`. This keeps partial rows bone-colored instead of leaking the container fill.

```tsx
<div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] border-t border-l border-ink bg-bone">
  {items.map((s) => (
    <article key={s.n} className="flex flex-col gap-4 border-r border-b border-ink bg-bone px-7 pt-8 pb-9">
      …
    </article>
  ))}
</div>
```

---

## 5. Components

### Buttons — pill, two variants only

Radius is `rounded-full` for buttons and chips. Everything else is `rounded-none`, except inputs (`rounded`, 4px).

```tsx
// primary
<Button className="rounded-full bg-ink px-4 py-1.5 text-micro uppercase text-paper hover:bg-black">
// secondary
<Button variant="outline" className="rounded-full border-ink px-4 py-1.5 text-micro uppercase text-ink hover:bg-ink hover:text-paper">
```

No `size` variants, no icon buttons, no loading spinners.

### Inputs — ring, not border

**shadcn inputs in this system use `ring`, not `border`.** Kill the default border and express the field edge as a ring so focus is a ring-width change rather than a color change — no offset, no glow, no color shift.

```tsx
// components/ui/input.tsx — base class
"h-auto w-full rounded border-0 bg-transparent px-3 py-2.5 text-base text-ink " +
"ring-1 ring-inset ring-ink " +
"placeholder:text-mute " +
"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ink " +
"disabled:opacity-50"
```

Apply the identical ring recipe to `Textarea` (`resize-y`), `Select` trigger, and any combobox trigger. Never mix a bordered field and a ringed field on the same form.

Field label: `text-meta` uppercase, stacked above with `gap-2`. Never a floating or inline label.

```tsx
<div className="flex flex-col gap-2">
  <Label className="text-meta uppercase text-ink">Email</Label>
  <Input type="email" />
</div>
```

### Cards

Do **not** use shadcn `Card` — it ships a border, radius, and shadow that all conflict. Use a plain `<article>` with the hairline recipe from §4. If you must use it: `className="rounded-none border-0 shadow-none bg-bone"`.

### Chips / badges

```tsx
<span className="rounded-full border border-ink px-3.5 py-1 text-micro uppercase">Available</span>
```

Dark fill (`bg-ink text-paper`) marks the single primary action in view. One per screen region.

### Numbered items

Services and similar lists are numbered `01`–`04` in `text-meta text-mute`, sitting above the h3. Ordinals, not icons.

---

## 6. Imagery

Every photograph gets the same grade so photos read as one set:

```css
filter: grayscale(1) contrast(1.08) brightness(1.04);
```

- Placeholder fill while loading: `bg-stone`.
- Aspect ratios: hero full-bleed (`min-h-[620px]`), project `aspect-[4/3]`, portrait `aspect-[3/4]`.
- Portraits get a hairline border plus a caption row: rule above, name left in `text-meta`, `Fig. 01` right in `text-meta text-mute`.
- **Hero scrim.** Full-bleed photo with the subject on the right; readability comes from a left-to-right bone gradient, and hero text is capped at `max-w-[34ch]` so it never crosses onto the photo:

```css
background: linear-gradient(100deg,
  #f0f0f0 0%, #f0f0f0 26%,
  rgba(240,240,240,.86) 44%,
  rgba(240,240,240,.22) 66%,
  rgba(240,240,240,0) 82%);
```

Photo `object-position: 92% 30%`. Text block is `justify-start` (pinned top) so it clears the header.

No illustrations, no SVG spot art, no stock iconography, no emoji.

---

## 7. Logo

Three marks, all typographic, `ink` or `paper` only — never a hue, never on a photo.

1. **Wordmark** (primary) — `SHTERJOV®`, weight 400, tracking `-0.023em`, uppercase. The ® is 9–14px, `vertical-align: super`. Header at 14px, footer at `text-section`. Files: `Wordmark.svg`.
2. **Lockup** — `ROBERT / SHTERJOV` stacked, weight 300, tracking `-0.03em`, over a full-width hairline, with `FULL-STACK DEVELOPER` in `text-meta` beneath. CVs, email signature, profiles. Files: `Lockup.svg`.
3. **Monogram** — `RS`, weight 300, tracking `-0.06em`, in a **square with 0 radius**, optically dropped to the bottom-left corner. Below 24px switch to weight 400, centered. Favicon, avatar, app tile. Files: `Monogram.svg`.

Clear space: one cap-height on all four sides. Minimum size: wordmark 12px, monogram 16px. Never add a tagline to the wordmark, never rotate, never outline.

---

## 8. Motion — GSAP + ScrollTrigger

Motion is **typographic and architectural**, never decorative. Type arrives from behind a mask, hairlines draw themselves, images uncover. Nothing bounces, spins, lifts, or changes color on scroll.

```bash
npm i gsap
```

```ts
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

Always inside `useGSAP` / `gsap.context()` scoped to the section so React unmounts cleanly. **Initial hidden states are set in JS, never in CSS** — with JS disabled the page must render fully visible.

### The five primitives

**1. Masked line reveal** — every `h1`/`h2` and the footer wordmark. Split to lines, wrap each in `overflow-hidden`, translate up from `yPercent: 110`.

```ts
gsap.fromTo(lines, { yPercent: 110 }, {
  yPercent: 0, duration: 1.1, ease: 'power3.out', stagger: 0.08,
  scrollTrigger: { trigger: heading, start: 'top 88%' },
});
```

Masks need `pb-[0.14em] -mb-[0.14em]` so descenders aren't clipped. Use GSAP `SplitText` (`type: 'lines'`, `mask: 'lines'`) — free as of GSAP 3.13. Re-split on resize, then `ScrollTrigger.refresh()`.

**2. Hairline draw** — a bone-colored 1px strip is laid over the existing border and wiped away `scaleX: 1 → 0` from the left. The rule is never animated via `width` or a pseudo-element.

```ts
gsap.to(cover, { scaleX: 0, duration: 1.1, ease: 'power2.inOut',
  scrollTrigger: { trigger: rule, start: 'top 92%' } });
```

**3. Image uncover** — wrapper `clip-path: inset(0 0 100% 0) → inset(0 0 0 0)` while the inner `<img>` relaxes `scale: 1.22 → 1`. Two tweens, `power3.inOut` on the clip, `power3.out` on the scale. The clip runs slightly faster than the scale so the image is still settling as it lands.

**4. Parallax** — `yPercent: -4 → 4`, `ease: 'none'`, `scrub: true`. Only ever ±4%, and only on images that have headroom from primitive 3. Hero photo sits at `scale: 1.04` after intro so ±3% never exposes an edge. No parallax on text, ever.

**5. Stagger rise** — `opacity: 0, y: 20 → 0`, `stagger: 0.07–0.09`, `power2/3.out`. Card text, service cards, stack rows, form fields. Distance shrinks with element size: cards 34px, text 18–20px, table rows 12px.

### Studio signatures

Three devices from the reference studio work (dashdigital.studio), all typographic:

**Roll-over labels** — every nav link, pill button, and text link. The label sits in a `1.25em` overflow mask above an identical duplicate; hover rolls the pair up `yPercent: -50`, leave resets to `+50` and rolls back to `0` so it always enters from the same side.

```ts
const to = (y: number) => gsap.to(inner, { yPercent: y, duration: 0.42, ease: 'power3.inOut', overwrite: true });
el.addEventListener('mouseenter', () => to(-50));
el.addEventListener('mouseleave', () => { gsap.set(inner, { yPercent: 50 }); to(0); });
```

**Ticker band** — one full-bleed `ink` band of 44px/300 uppercase capability words separated by `—` in `mute`. The run is cloned 4× and translated with a `modifiers` wrap for a seamless loop (20s). Scroll velocity scrubs `timeScale` within `[-4, 4]` — scrolling down speeds it up, scrolling up reverses it, and it eases back to `1` after 180ms of stillness. The band itself enters with a centre-out clip (`inset(50% 0 50% 0) → inset(0)`).

**Thumbnail push-in** — work images scale `1 → 1.06` over 0.9s `power3.out` on card hover. This is the only hover transform in the system; everything else is `color` only.

### Loading screen

A bone overlay at `z-50` that is **present in the markup, not injected** — it must paint on the first frame, before fonts or images resolve.

Layout: meta row pinned top (role left, `GERMANY · CET` right) under a hairline; the wordmark bottom-left at display scale with a 3-digit counter `000 → 100` bottom-right; a 1px `stone` track beneath, filled by an `ink` bar `scaleX: 0 → 1`.

Sequence (≈2.9s total):

| Time | Beat |
|---|---|
| 0.00 | Meta row fades up, `stagger: 0.06` |
| 0.05 | Wordmark rises from mask `yPercent: 110 → 0`, `power3.out` |
| 0.10 | Counter + bar run together, 1.5s, `power1.inOut` |
| ~1.7 | Wordmark and counter exit upward `yPercent: -110`; track and meta fade |
| ~2.0 | Overlay clips away upward: `inset(0 0 0 0) → inset(100% 0 0 0)`, 0.95s `power3.inOut` |
| on complete | Overlay removed, scroll unlocked, hero timeline plays |

Rules:
- The counter is animated from a proxy object, never tied to real asset progress — fake honesty beats a stalling number.
- Lock scroll with `documentElement.style.overflow = 'hidden'` for the overlay's life; always restore in cleanup.
- Ship a **failsafe timeout** (5s) that removes the overlay even if GSAP never loads, and hide it immediately when `motion: 'Off'` or reduced motion is set.
- The hero timeline is built `paused: true` and played by the overlay's `onComplete`, so the reveal reads as one continuous move.
- No spinner, no percentage ring, no logo animation, no "Loading…" copy.

### Scroll progress

One fixed 1px `ink` bar at `top-0`, `transform-origin: left`, `scaleX` scrubbed against document scroll (`scrub: 0.4`). No percentage counter, no color, no thickness change.

### Timing

| | Value |
|---|---|
| Type reveal | 1.1s |
| Image reveal | 1.25s clip / 1.6s scale |
| Stagger rise | 0.7–0.9s |
| Hero intro image | 1.8s |
| Micro-interactions | 150ms |
| Easing | `power3.out` (entrances), `power2.inOut` (wipes), `none` (scrub) |
| Trigger start | `top 88%` (`top 92%` for rows/rules) |

### Non-negotiables

- Honour `prefers-reduced-motion: reduce` — bail out of the whole build, don't just shorten it.
- **Never `clearProps: 'all'` in an inline-styled design.** It deletes the element's whole inline `style` attribute — the authored type scale, the hero image's absolute positioning, everything. Snapshot `el.getAttribute('style')` before the first tween touches the element and write that exact string back on teardown.
- **Assume the host re-renders and re-mounts.** A React re-render detaches trigger elements, and ScrollTrigger silently drops every trigger that points at a detached node — leaving content stranded at its "from" state with nothing left to reveal it. Track the triggers you created, poll (~900ms) for whether any are still live, and rebuild against the fresh DOM when they aren't. Cap the heals (4) and fall back to restoring authored styles, so a pathological loop can never leave the page blank.
- **Teardown must return the DOM to its authored state.** Killing triggers is not enough: `fromTo` start states persist as inline styles, and any node the animation appended (hairline covers, line masks) survives `context.revert()`. On unmount and at the top of every rebuild: kill all triggers, remove appended nodes, restore split headings from their saved markup, and `gsap.set(targets, { clearProps: 'all' })`. Guard appended nodes against duplication, and `ScrollTrigger.refresh()` after splitting so triggers measure post-split geometry.
- One reveal per element. Never chain a fade onto an already-masked heading.
- No scroll-jacking, no smooth-scroll hijack, no pinned sections, no horizontal scroll, no counters, no cursor followers, no magnetic buttons, no text scramble.
- Hover is limited to three things: `color` (150ms), the roll-over label mask, and the 1.06 thumbnail push-in. No lift, no shadow, no border change.
- The ticker is the only continuously-running animation on the page.
- Everything above the fold resolves within 1.4s of load.

Expose motion as props so it can be tuned or killed: `motion: 'Full' | 'Subtle' | 'Off'` (Subtle = 0.6× durations, no parallax) and `imageReveal: 'Wipe up' | 'Fade scale' | 'None'`.

---

## 9. Sections in order

0. **Loader** (§8) — bone overlay in the markup, wordmark + counter + fill bar, clips away upward into the hero. Above it for the page's whole life: the 1px scroll-progress bar, fixed at `top-0`.
1. **Header** — **sticky** at `top-0`, `z-50`, full-bleed `bone` background so nothing shows through the full-bleed hero beneath it, `py-5`, `border-b border-ink`. Wordmark left; nav right (`Work · Services · Stack · About · Contact` in `text-micro`) with `CV` as a dark pill.
2. **Hero** — full-bleed graded photo, scrim, eyebrow → `text-display` h1 → serif lead → two pills. Copy pinned top-left.
3. **Work** — h2 + `06 PROJECTS · 2023–2024` over a rule; 2-up grid. Each: tech eyebrow, h3, `aspect-[4/3]` image, body, Live/GitHub pills.
4. **Services** — h2 + availability chip over a rule; 4-up hairline grid, numbered `01`–`04`, each with body, tech line, optional rate; quote CTA plus serif note below.
5. **Stack** — h2, then hairline rows: label left, technologies right in `text-micro`.
6. **About** — captioned portrait left, h2 + serif lead + two body paragraphs + outline social pills right.
7. **Contact** — rule above; h2 (`LET'S / WORK`) + body + locale meta left, ringed form right.
8. **Footer** — rule above, `text-section` wordmark left, role and copyright right-aligned in `text-meta`.

---

## 10. Don't

- No hue, gradient wash, or shadow anywhere.
- No weight above 400 in Archivo.
- No `rounded-lg` cards; radius is pill (buttons/chips), 4px (inputs), or zero.
- No bordered shadcn inputs — rings only (§5).
- No icons, illustrations, or emoji.
- No serif outside single lead paragraphs.
- No parent `gap` + colored parent to fake grid hairlines (§4).
- No dark mode.
