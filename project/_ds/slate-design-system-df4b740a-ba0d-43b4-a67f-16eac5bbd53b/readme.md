# Slate Design System

**Slate (슬레이트)** is a minimal lifestyle select shop curating apparel, objects and home goods. It sells across four surfaces:

- **Web store** — desktop/mobile web e-commerce
- **Mobile app** — browse, bag, pop-up reservations, in-store receipts
- **Pop-up stores** — temporary physical spaces (e.g. Seongsu)
- **Kiosks** — portrait self-checkout / stock lookup in pop-ups and the flagship

Brand brief (from the user): charcoal + ice blue base, **sharp corners**, **generous whitespace**; voice is concise, cool, and strips away anything unnecessary from the shopping experience.

## Sources
No codebase, Figma, logo, font files or imagery were provided. Everything here was authored from the written brief above. Treat values as a v1 proposal to be replaced by real brand assets when they exist.

---

## CONTENT FUNDAMENTALS
- **Language:** Korean first. English only for short uppercase labels and editorial headlines (NEW IN, APPAREL, "Less, but considered.").
- **Register:** polite but clipped 합니다/습니다 form for system messages ("장바구니에 담았습니다."), noun phrases for UI labels ("재고 있음", "배송 및 반품"). Never cutesy (~요! / ㅠㅠ).
- **Person:** avoid "I/we". Address the shopper implicitly; "you" (당신) is almost never written. Member name with 님 in account only.
- **Length:** one line. If a sentence needs a comma, consider cutting it. Buttons are 2–4 characters / 1–2 words: 담기, 결제하기, 방문 예약, Shop all.
- **Punctuation:** periods on full sentences, none on labels. **No exclamation marks.** No emoji. No superlatives ("최고의", "완벽한"). Em dash for product variants ("스톤웨어 머그 — 애쉬"), middle dot · as separator ("11.20 — 12.08 · 연무장길 42").
- **Casing:** English labels UPPERCASE with tracking; English headlines in sentence case.
- **Numbers:** prices as ₩128,000 in mono; dates as 11.20; counts as plain numerals.
- **Examples:** "지금 필요한 만큼만." · "오늘 들어온 것" · "겨울의 물건들. 3주 동안만." · "장바구니가 비어 있습니다." · "카드를 단말기에 꽂아주세요" · "화면을 터치해 시작하세요".

## VISUAL FOUNDATIONS
- **Color:** charcoal ramp (#1F2224 ink → #F7F7F7) does 90% of the work; white page. Ice blue (#CFE4EF band, #659FBE focus, #386782 text) is the only accent — used for editorial bands, count chips, sale %, focus rings, toast actions. Status colors are desaturated. Never gradients.
- **Type:** Archivo (wide, 500) for display + uppercase labels; IBM Plex Sans KR for all Korean / body; IBM Plex Mono for prices, SKUs, counts. Display is tight (−0.02em, lh 1.0); labels tracked +0.14em at 11px; body 15px lh 1.6–1.7.
- **Spacing:** 4px base, but layouts live at the top of the scale: 128px between sections, 48px heading→grid, 16px grid gap, 64px desktop gutters, 20px mobile. When in doubt, add space, not lines.
- **Corners:** radius 0, everywhere — buttons, inputs, images, dialogs, switches, even radio indicators (square). No pills, no circles.
- **Borders:** 1px hairlines (#E1E3E5) to divide; 1px charcoal for outlined buttons and selected state; 1.5px charcoal for the active tab underline. No cards with borders — the image well is the card.
- **Shadows:** none on resting UI. `--shadow-float` for toasts/tooltips/menus, `--shadow-overlay` for dialogs/drawers. No inner shadows.
- **Backgrounds:** flat white; #F7F7F7 image wells; full-width ice-blue band for one editorial moment per page; charcoal for footer, announcement bar, kiosk attract. No patterns, textures or illustrations.
- **Imagery:** cool, desaturated daylight photography — objects on concrete, linen, white walls; no warm filters, no grain. Product 4:5 on #F7F7F7, lifestyle 3:2 / 16:7 full-bleed. Hero text sits directly on dark imagery (no protection gradient; choose images with calm negative space).
- **Transparency & blur:** only the sticky header and the hover "Quick add" bar use white 82% + 16px backdrop blur. Dialog scrim is charcoal 48%.
- **Motion:** 120ms color/underline, 200ms toggles, 400ms drawers, 700ms image fade-in. Ease cubic-bezier(.2,0,0,1). Fades and short slides only — no bounce, no scale, no parallax.
- **Hover:** fills step one shade (charcoal-900 → 700; transparent → #F7F7F7); product names underline; links shift to ice-700.
- **Press:** one shade darker (charcoal-950). No shrink.
- **Focus:** 1.5px ice-500 outline, 2px offset; inputs switch border to charcoal.
- **Layout:** sticky 64px glass header + 32px charcoal announcement bar; 4-col desktop grid, 2-col mobile, 3-col kiosk; PDP image column 1.4fr with sticky info column. Mobile: fixed bottom tab bar + sticky bottom CTA bar.
- **Kiosk:** 80px minimum touch targets, ≥24px text, 64px side padding, single primary CTA pinned bottom.

## ICONOGRAPHY
- **Set:** [Lucide](https://lucide.dev) outline icons, loaded from CDN (`lucide-static@0.460.0`) via the `Icon` component (CSS mask, inherits currentColor). **Substitution** — no brand icon set was supplied; Lucide's thin, geometric outlines fit the minimal brief.
- **Sizes:** 16 dense, 20 default, 24–28 kiosk. Always monochrome (charcoal or white); ice-300 only inside toasts.
- **Usage:** icons accompany actions (search, bag, heart, user, scan-line, map-pin, arrow-right); never decorative. Icon-only buttons need a label/Tooltip.
- **No emoji, ever.** Unicode used only for typographic glyphs: → in editorial links, · separator, — variant dash, ₩, +/− in accordions.
- **Logo:** none provided. `Wordmark` sets "SLATE" in Archivo wide, +0.32em tracking as a stand-in. Do not draw a logo.

---

## Index
- `styles.css` — entry; imports `tokens/` (fonts, colors, typography, spacing, effects, base)
- `guidelines/` — 17 foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives, each with `.jsx`, `.d.ts`, `.prompt.md` and one card per folder
- `ui_kits/website/` — desktop web store (home, listing, PDP, cart drawer)
- `ui_kits/app/` — mobile app (home, shop, product, bag, pop-up, my)
- `ui_kits/kiosk/` — 1080×1920 pop-up kiosk (attract → done)
- `ui_kits/shared/data.js` — sample catalog
- `thumbnail.html`, `SKILL.md`

## Components
- **core/** — Button, IconButton, Badge, Tag, Icon, Wordmark, Media
- **forms/** — Input, Select, Checkbox, Radio, Switch, QuantityStepper
- **navigation/** — Tabs
- **feedback/** — Dialog, Toast, Tooltip
- **commerce/** — ProductCard, Price

### Intentional additions
No source component inventory existed, so a standard set was authored. Beyond it:
- **Icon** — wrapper for the Lucide CDN glyphs.
- **Wordmark** — typeset brand name in lieu of a logo.
- **Media** — aspect-locked image well with placeholder tint (every image in the system sits in one).
- **QuantityStepper, Price, ProductCard** — commerce essentials used on every surface.

## Fonts
Google Fonts (substitutes, loaded via `tokens/fonts.css` @import): **Archivo**, **IBM Plex Sans KR**, **IBM Plex Mono**. No brand font files were supplied — replace when available.
