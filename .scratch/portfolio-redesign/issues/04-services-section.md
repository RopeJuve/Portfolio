# 04 — Services section (new)

**What to build:** A new Services section presenting the 4 services with business-outcome copy, capability sub-lists, and tier framing, placed after the Tech Marquee, with a NavBar link.

**Blocked by:** 01 — Design-system foundation

**Status:** done

- [x] New Services section renders 4 services in order: Website Design & Development, Website Redesign, Custom Web Applications, Website Maintenance & Support
- [x] Custom Web Applications is visually/textually framed as the "advanced" tier; the other three read as the primary offering
- [x] Each service shows a business-outcome-focused title, one-line description, and its capability sub-list, using business-results language (not a tech-stack pitch)
- [x] The positioning statement appears in or near the Services section
- [x] Services section is placed directly after the Tech Marquee
- [x] NavBar gains a "Services" link/anchor
- [x] A data-shape test (Vitest) asserts the service count, order, and tier assignment

## Comments

Implemented in commit 5e45133 (plus a separate commit for CONTEXT.md,
a818c75). New `components/Services/Services.tsx` +
`components/Services/ServiceCard/ServiceCard.tsx`, mirroring the
existing ProjectsCards/ProjectCard section+card pattern. Advanced tier
gets a pill badge (`rounded-pill`); primary tier is unbadged per the
grilling session's decision that order + labeling carry the hierarchy,
not size. Positioning statement is the same string as the Hero
subtitle (`data.subtitle`), not duplicated. Verified live in-browser:
correct order, badge only on Custom Web Applications, NavBar link
wired to `#services`.

Code review (Standards + Spec) caught and fixed: duplicated pill
class-strings between the badge and capability tags (extracted a
shared `pillClass`), and "AI features" using the word CONTEXT.md's own
Capability definition says to avoid — changed to "AI integrations".
Also flagged the rest of Custom Web Applications' capability copy
(SaaS applications, MVP development, API integrations) as reading like
a tech pitch — deliberately kept as-is: that's the user's own dictated
content, and for the tier explicitly aimed at startups/technical
buyers, those are the correct customer-facing terms, not
implementation-detail jargon.
