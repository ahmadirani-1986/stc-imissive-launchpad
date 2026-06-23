## Scope
Visual direction, layout, colors, typography, and content stay exactly as approved. Only the logo placements on Slide 1 and Slide 9, plus the Slide 9 contact line, are changing. Slides 2–8 are untouched.

## 1. Upload the new official logos as CDN assets
Upload three files from `/mnt/user-uploads/` via `lovable-assets`:
- `STC_Group.png` → `src/assets/stc-group-logo.png.asset.json` (white wordmark, for dark backgrounds)
- `STC.png` → `src/assets/stc-logo.png.asset.json` (white "stc" mark, for dark backgrounds)
- `Rassco_Group.png` → `src/assets/rassco-group-logo.png.asset.json` (full color, for white backgrounds)

The existing `imissive-logo.png` asset is already in the project and is reused as-is.

## 2. Extend `src/presentation/Brand.tsx`
Add three real image components that import the new asset JSONs:
- `StcGroupLogo({ height })` — renders the white STC Group PNG (used directly on dark)
- `StcMarkLogo({ height })` — renders the white "stc" PNG (used directly on dark)
- `RasscoGroupLogo({ height })` — renders the new RASSCO Group PNG (always placed inside a white card)

Keep the existing `IMissiveLogo`, `RasscoLogo`, and `StcLogo` exports so other slides that still reference them keep working. Only Slides 1 and 9 switch to the new components.

## 3. Slide 1 — Cover (`CoverSlide` in `src/presentation/slides/Slides.tsx`)
- **Top-right corner**: replace the current white-plate `StcLogo` text mark with `<StcGroupLogo height={48} />` directly on the dark background (the PNG is white). Keep the "In conversation with" eyebrow label and the same right-anchored position and spacing.
- **Center title (`iMissive × stc`)**: replace the typed words with the official logos.
  - Layout: a single horizontal row, vertically centered: `[iMissive logo on white plate]   [glowing yellow ×]   [stc logo on white plate]`.
  - iMissive plate: white rounded card, ~24 px padding, logo at ~150 px height (using the existing color `IMissiveLogo`, not inverted, so the official purple+yellow brand shows).
  - stc plate: white rounded card, ~24 px padding, official stc purple wordmark at ~150 px height. Use `<StcLogo size={150} color={STC_PURPLE_TRUE} />` (the official text mark we already render in stc purple) so the cover stays on-brand for stc even when the supplied STC PNG is pure white. This preserves the partnership balance and avoids any white-on-white risk inside the plate.
  - Yellow `×` between the two plates kept at ~180 px, same neon glow as today.
  - Keep `Strategic Partnership Discussion · {meta.date}` kicker above, and keep `Growing Enterprise Messaging Together` subtitle below, unchanged.
- **Bottom-right "Part of" block**: keep the "PART OF" eyebrow label, and replace the inner logo with `<RasscoGroupLogo height={56} />` inside a white rounded card (~14 px padding) so the teal/charcoal logo reads cleanly. Make sure it does not visually compete with the title block.
- Presenter strip and footer remain unchanged.

## 4. Slide 9 — Closing (`ClosingSlide`)
- **Logo lockup** (bottom-right column): replace the existing `iMissive · WITH · stc · PART OF · RASSCO` row with a tighter lockup: `[iMissive logo, inverted/white] [small "WITH" tag] [stc logo on white plate]`.
  - Use `<IMissiveLogo height={40} invert />` then a `WITH` mono label, then a white card containing `<StcLogo size={40} color={STC_PURPLE_TRUE} />` (consistent with the Cover treatment).
  - Remove the "· PART OF" separator and the RASSCO logo entirely from this slide.
- **Contact block** (right under the lockup): keep company name, legal entity, and location. Replace the third line with just `www.imissive.com` (in the same yellow mono style). Remove the sales email and phone number entirely.
- Left column (headline + closing paragraph + "09 / 09 · END OF DECK") and the "Suggested Next Steps" list stay exactly as approved.

## 5. Quality + publish
- Verify Slide 1 logos do not stretch (use `objectFit: contain`, fixed height + auto width on every `<img>`), do not overlap the corner ticks, and stay within the 1920×1080 frame.
- Verify Slide 9 logo row + contact lines clear the page footer and do not touch the bottom corner ticks.
- `/print` already strips the floating Deck controls (no nav chrome rendered in that route); confirm by re-reading `src/routes/print.tsx` after edits — no changes expected.
- Publish via `preview_ui--publish` to `https://stc-imissive-launchpad.lovable.app` after edits are in. Website meta (title, description, OG, Twitter) is already in place from prior turn, so the publish preflight is `already_relevant`.

## Out of scope (explicit non-goals)
- No changes to Slides 2–8.
- No customer logos, no competitor mentions, no pricing changes.
- No redesign of color palette, typography, grid background, corner ticks, or executive tone.
- No new contact details beyond `www.imissive.com`.
