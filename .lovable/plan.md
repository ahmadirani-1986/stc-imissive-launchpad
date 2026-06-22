
# iMissive × stc — Executive Presentation Build Plan

A real 16:9 presentation app (not a website). Exactly 9 slides, fixed 1920×1080 with scale-to-fit, fullscreen, keyboard/swipe nav, grid overview, presenter notes, print-to-PDF. All copy/notes come from one central data file. Brand palette per brief; Manrope (headings) + Inter (body); max 8px radius.

## 1. Brand assets

Upload official logos as Lovable Assets (kept off-repo, served via CDN):
- iMissive horizontal logo (purple/yellow) from `25cm_300dpi-01.png`
- RASSCO Group logo from `rassco-logo.png`
- stc logo: extract official wordmark from `brand-booklet_digital_EN.pdf` if present; otherwise render the stc wordmark from `iMissive Logo & Colors 1.pdf`. If neither contains an official stc logo, use a clean text wordmark "stc" set in the brand purple `#4F00A0` (never recolored/distorted). Confirm during build by parsing the PDFs.

CSS tokens in `src/styles.css`:
- iMissive: `--im-purple #492E51`, `--im-yellow #FDBF30`, `--im-teal #61C5BA`, `--im-orange #F68C20`
- stc: `--stc-purple #4F00A0`, `--stc-coral #FF375E`
- Neutrals: white, near-black `#0E0B12`, paper `#F7F5F2`
- Fonts loaded via `<link>` in `__root.tsx` (Manrope 400/600/800, Inter 400/500).

## 2. App architecture

- `src/data/deck.ts` — single source of truth: array of 9 slide objects `{ id, title, kicker?, component, notes }` plus shared metadata (date, presenters, contact). All headline copy, stats, bullets, presenter notes live here.
- `src/presentation/`
  - `ScaledSlide.tsx` — fixed 1920×1080, `transform: scale(min(sx,sy))`, centered.
  - `SlideLayout.tsx` — shared chrome wrapper (optional footer bar with discreet slide counter & iMissive mark).
  - `Deck.tsx` — owns current slide index (URL `?slide=N`), keyboard (← → space esc f g n), swipe (pointer/touch), inactivity-hide controls (3s), fullscreen API, transitions (160ms fade/slide, restrained).
  - `Controls.tsx` — prev/next, counter "3 / 9", fullscreen toggle, grid icon, notes icon. Auto-hide.
  - `GridOverview.tsx` — 3×3 thumbnails using `ScaledSlide` at small scale, click to jump.
  - `NotesPanel.tsx` — slide-over from bottom, shows `notes` for current slide, hidden by default, never printed.
  - `PrintView.tsx` — `?print` route renders all 9 slides stacked, `@page { size: 1920px 1080px landscape; margin: 0 }`, `page-break-after: always`. Controls and notes hidden via `@media print`.
- Routes: `/` (deck), `/print` (print view). Both client-only, no loaders.

## 3. Slides (one component each in `src/presentation/slides/`)

Each slide is a static composition reading from `deck.ts`. No nested cards, no glassmorphism, no gradients on purple, max radius 8px.

1. **Cover** — Split composition: left 60% solid iMissive purple field with large Manrope title "iMissive × stc", yellow rule, headline, subtitle, date/location. Right 40% near-white with stc purple accent bar, presenter block, and small "Part of RASSCO Group" + RASSCO logo bottom-right. Subtle connectivity geometry: thin yellow/coral lines linking two anchor dots (iMissive + stc) — pure SVG, no blobs.
2. **iMissive at a Glance** — Editorial 12-col grid. Left: title + core statement + 4 supporting bullets. Right: 5 stat tiles in asymmetric arrangement; iMissive stats (29+, 5M) marked with yellow rule, RASSCO stats (9, 2,500+, 65+) marked with teal rule and small "RASSCO Group" label to clearly separate.
3. **Engineered for Scale** — Top: title + headline. Center: horizontal technical flow diagram (5 nodes connected by thin lines with directional arrowheads): Enterprise Customers → API/SMPP Gateway → iMissive Platform → Intelligent Routing → stc On-Net. Bottom: 4 capability stats (300 TPS, 100 TPS, Up to 10, 24/7) in a single row + supporting bullets in small caps.
4. **Communication Ecosystem** — Central large hexagon/circle "Enterprise SMS" in iMissive purple filling ~45% of canvas. 8 smaller satellite nodes connected by thin lines, sized smaller, labeled. Right column: supporting statement.
5. **Existing stc Ecosystem** — Use stc purple as dominant color band on left edge. Three vertical pillars (Enterprise Messaging / Cloud Infrastructure / Operational Alignment) each with title + 2-3 bullets. Core statement below in larger type. stc coral as accent rule.
6. **12-Month Vision** — Hero data viz: large "5M → 35M" with "7×" callout in yellow. Secondary row: 60M → 420M annualized. Clear "12-Month Ambition" label on all forward figures. Four pillar chips along the bottom. Restrained bar/arrow SVG, meaningful (proportional bar lengths).
7. **Why iMissive** — 2×2 editorial grid of four themes (Industry Experience, Technical Readiness, Local Execution, Enterprise Governance). Each cell: large numeral (01–04), theme name, single line. Supporting statement spans full width below. No card borders — separator rules only.
8. **Partnership Model** — stc purple as title bar background. Four collaboration areas in a 2×2 layout, diplomatic copy verbatim from brief. Coral and iMissive yellow used as accent rules to balance brands.
9. **Closing** — Large two-line statement in iMissive purple field. Suggested next steps as a numbered vertical list, refined. Closing line below. Footer row: iMissive logo (left), stc wordmark (right), discreet "Part of RASSCO Group" centered. Contact block bottom-right in small type.

## 4. Interactions detail

- Keyboard: `←/→` prev/next, `Space` next, `Esc` exit fullscreen/close grid, `F` fullscreen, `G` grid, `N` notes, `Home/End` jump.
- Touch: pointer swipe with 60px threshold.
- URL: `?slide=N` (1-indexed), `replaceState` so back returns to host page.
- Inactivity: controls fade after 2.5s of no pointer/keyboard activity; reappear on movement.
- Transitions: 160ms opacity + 8px translate. Respect `prefers-reduced-motion`.
- Print: navigating to `/print` (or `Cmd+P` triggers print stylesheet on `/`) renders 9 stacked slides at exact 1920×1080 with no chrome.

## 5. Presenter notes

Concise, executive-tone, ~50–80s each (total 8–9 min). Stored alongside each slide in `deck.ts`. Never rendered in print or default view — only in `NotesPanel`.

## 6. QA before finishing

- Visit each of 9 slides in fullscreen at 1920×1080 via Playwright; screenshot; verify no clipping/overlap.
- Verify `?print` produces 9 pages, no chrome, backgrounds intact.
- Verify exact capitalization (iMissive, stc, RASSCO Group) across all copy.
- Verify all logos render at correct aspect ratio (object-contain, no recolor).
- Verify nav, grid, notes, fullscreen, swipe, keyboard.

## Technical notes

- TanStack Start file routes: `src/routes/index.tsx` (deck), `src/routes/print.tsx`. Client components only; no server functions, no Cloud needed.
- Single CSS file additions in `src/styles.css` for brand tokens, semantic slide typography classes (`.slide-title`, `.slide-body`, `.slide-kicker`, `.slide-chrome`), print rules.
- Charts/diagrams hand-built in SVG — no chart libraries (avoid decorative charts).
- No external images beyond the three uploaded logos.
