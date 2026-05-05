# AGENTS.md — vault-themes

This repository is the **source of truth** for VaultWares visual rules, brand
tokens, and theme primitives. Every agent working on this repo or any consuming
VaultWares project must read and follow this file in full.

---

## Required Reading — Read These Files First

Before writing any code, generating any UI, or modifying any brand asset, read:

1. `Brand/BRAND_PHILOSOPHY.md` — Vision, mission, voice, positioning, and the
   rationale behind every visual and verbal decision. This is the "why."
2. `Brand/tokens.ts` — All color, typography, spacing, glass, and radius tokens.
   This is the only permitted source of design values.
3. `Brand/tailwind.config.ts` — Tailwind token mapping. Use `vault.*` classes.
4. `Brand/brand.i18n.ts` — All user-facing strings in EN and FR. Never write
   a UI string that isn't in this file.

If you are working in a consuming project (not this repo), these files are
available as a submodule or package. Always resolve token references back to
this source.

---

## Scope

Apply these rules to any work touching `theme_manager.py`, `qt_exporter.py`,
style guides, token exports, Figma-to-code implementation, UI components, or
brand assets.

Prefer consistency and accessibility over novelty.

---

## Brand Identity Rules

VaultWares is calm, precise, and human. These rules are non-negotiable:

- **No black backgrounds + neon green.** We are not a hacker movie. The aesthetic
  is closer to a premium notebook than a threat-intelligence dashboard.
- **No fear-mongering copy.** Write "Vault secured" not "Encrypted!". Write
  "Something went wrong. Try again." not "CRITICAL ERROR."
- **No jargon or acronyms** in user-facing copy unless defined inline.
- **No "hacker" clichés** — no Matrix rain, no terminal fonts in UI, no padlocks
  surrounded by lightning bolts.
- **Always bilingual.** Every string you write must have both an `en` and `fr`
  entry in `Brand/brand.i18n.ts`. FR strings run 15–20% longer than EN —
  account for this in layout.

---

## Theme System Rules

- **Never hardcode a color, spacing value, or font.** Always use a named token
  from `Brand/tokens.ts` or the `VaultTheme` dataclass attributes.
- Theme mode must be explicit: `light` or `dark`. Never infer it.
- Every theme must define **all** semantic color tokens listed below via the
  `VaultTheme` dataclass in `theme_manager.py`.
- Keep theme definitions centralized in `theme_manager.py`. Do not duplicate
  theme catalogs across files.
- Theme names are Title Case (user-facing). Theme IDs are kebab-case (machine).

### VaultTheme — Full Semantic Token Reference

| Token         | Type   | Role                                                      |
|---------------|--------|-----------------------------------------------------------|
| `name`        | str    | User-facing name (Title Case)                             |
| `mode`        | str    | `"light"` or `"dark"`                                     |
| `primary`     | hex    | Main window / root background                             |
| `surface`     | hex    | Panel / card background (slightly offset from primary)    |
| `surface_alt` | hex    | Nested element background (deepest layer)                 |
| `accent`      | hex    | Brand accent — primary interactive / highlight color      |
| `accent_muted`| hex    | Desaturated or hover variant of accent                    |
| `text`        | hex    | Primary body text                                         |
| `text_muted`  | hex    | Secondary / caption / placeholder text                    |
| `text_inverse`| hex    | Text rendered on accent-colored surfaces                  |
| `border`      | rgba   | Subtle border for panels, inputs, separators              |
| `error`       | hex    | Semantic error / destructive state                        |
| `error_bg`    | rgba   | Translucent background for error banners                  |
| `warning`     | hex    | Semantic warning / caution state                          |
| `warning_bg`  | rgba   | Translucent background for warning banners                |
| `success`     | hex    | Semantic success / positive state                         |
| `success_bg`  | rgba   | Translucent background for success banners                |
| `info`        | hex    | Semantic informational state                              |
| `info_bg`     | rgba   | Translucent background for info banners                   |
| `muted`       | hex    | Muted / disabled UI elements, placeholder text            |

### Color harmony rules when adding a new theme

When choosing semantic colors for a new theme, derive them from color theory
relative to the theme's `accent`:

- **`error`**: Use a warm red / crimson that is *analogous* (adjacent hue) to the
  accent on warm themes, or *complementary* (opposite hue) on cool themes.
  Never use pure `#FF0000` — it looks undesigned.
- **`warning`**: Use amber / orange. It should sit between `accent` and `error`
  on the hue wheel if possible.
- **`success`**: Use a mid-saturation green or teal — the *complementary* of a
  red or warm accent, or an *analogous* neighbor of a cool/cyan accent.
- **`info`**: Use a calm blue or violet that does not conflict with the accent.
- **`muted`**: Desaturate and darken (dark themes) or desaturate and lighten
  (light themes) by 30–40%.
- **`*_bg` backgrounds**: Set alpha to 12–15% of the corresponding semantic color.
  This ensures readability while still conveying state.

### Base color token reference (from `Brand/tokens.ts`)

| Token                | Hex       | Role                          |
|----------------------|-----------|-------------------------------|
| `vault.base`         | `#002B36` | Dark background               |
| `vault.paper`        | `#FDF6E3` | Light background              |
| `vault.gold`         | `#CC9B21` | Primary brand accent          |
| `vault.gold.muted`   | `#B78C1E` | Hover / pressed accent        |
| `vault.gold.light`   | `#E5C06A` | Lighter accent tint           |
| `vault.cyan`         | `#21B8CC` | Interactive / primary action  |
| `vault.green`        | `#4ECC21` | Success / secured state       |
| `vault.burgundy`     | `#A63D40` | Error / destructive           |
| `vault.slate`        | `#4A5459` | Secondary text / surfaces     |
| `vault.muted`        | `#586E75` | Captions / tertiary text      |

---

## Brand Asset Inventory

### Logo Variants (`Brand/`)

| File                                            | Usage                                       |
|-------------------------------------------------|---------------------------------------------|
| `Brand/vaultwares-logo.svg`                     | Light backgrounds (default SVG)             |
| `Brand/vaultwares-logo-dark.svg`                | Dark backgrounds (SVG)                      |
| `Brand/vaultwares-logo-mono.svg`                | Monochrome — embossing, watermarks (SVG)    |

### Minimal Icons (`Brand/minimal-logos/`)

These are **PNG exports** of the compact VaultWares mark (no wordmark), intended
for use as window icons, taskbar icons, tab favicons, and small UI spots where
the full wordmark doesn't fit.

| File                                                       | Usage                                             |
|------------------------------------------------------------|---------------------------------------------------|
| `Brand/minimal-logos/vaultwares-minimal-gold-filled.png`   | Primary icon — dark backgrounds, window titlebar  |
| `Brand/minimal-logos/vaultwares-minimal-ink-filled.png`    | Light mode icon — light backgrounds               |
| `Brand/minimal-logos/vaultwares-minimal-mono-filled.png`   | Monochrome icon — single-color contexts           |
| `Brand/minimal-logos/vaultwares-minimal-mono-v2.png`       | Alternate mono — outlined/stroke variant          |
| `Brand/minimal-logos/vaultwares-minimal-mono.png`          | Legacy mono — use `v2` for new work               |

**Usage rules:**
- Desktop apps (`vault_gui.py`): use `vaultwares-minimal-gold-filled.png` for
  `setWindowIcon()` on dark themes; switch to `vaultwares-minimal-ink-filled.png`
  on light themes when possible.
- Do not scale minimal icons below 16×16px — below this size they become
  illegible. Use the full SVG wordmark at small rendered sizes instead.
- Do not apply CSS filters or colorize the PNG assets. Use the appropriate
  variant for the context.

### Production Assets (`branding/`)

Ready-to-ship assets for web, print, and packaging live in `branding/`. See
`branding/README.md` for the full inventory.

---

## Qt / PySide6 Stylesheet Rules (`qt_exporter.py`)

When generating QSS for a consuming application:

1. **All color values must come from `VaultTheme` attributes** — no inline hex
   or raw color strings inside `generate_qss()`.
2. Use the three-tier surface hierarchy:
   - `primary` → window root background
   - `surface` → panels, cards, inputs
   - `surface_alt` → nested inputs, dropdown popups, pressed states
3. Expose semantic frame `objectName` IDs for status banners:
   - `ErrorBanner`, `WarningBanner`, `SuccessBanner`, `InfoBanner`
4. Color-code log/monitor text inline using `theme.<semantic_token>` values —
   never hardcode error/warning/success colors in application logic.
5. For the `QProgressBar`, always set `setTextVisible(True)` and connect
   `setValue()` to the worker's `progress_percent` signal.
6. Scrollbars must be styled to use `border` and `accent_muted` so they remain
   consistent across all themes.

---

## Accessibility Requirements

- Body text contrast: **WCAG AA ≥ 4.5:1** — required on every component.
- Large text / UI elements: **WCAG AA large ≥ 3.0:1** — required.
- New or changed themes must pass a contrast check against the `text` /
  `text_inverse` foreground values before merging.
- Bilingual strings must be tested at the same layout breakpoints — FR is longer.

---

## Security & Cryptography Rules

These are product requirements, not suggestions:

- Authentication and encrypted client-to-client communication flows must be
  designed around **post-quantum cryptography with ML-KEM** as the
  key-encapsulation mechanism.
- **Never** design a flow where the server can read, persist, derive, or
  reconstruct private keys or shared decryption keys used between two clients.
- Security-related UI must preserve the VaultWares privacy-first posture.

---

## Figma MCP Integration Rules

### Required flow (do not skip steps)

1. Run `get_design_context` on the exact node(s) to implement.
2. Run `get_screenshot` for visual parity checks.
3. Map all Figma color values to `VaultTheme` token references before writing code.
4. Reuse existing components from `components/` first; only create new ones when
   reuse is not possible.
5. Validate final UI for both visual parity and WCAG AA contrast compliance.

### Implementation rules

- Treat Figma-generated code as a structural draft — never final style output.
- Replace all raw hex / pixel values with token references.
- Use an 8px spacing base scale unless the host project enforces a stricter scale.
- Prefer subtle motion. Avoid continuous animations — they distract and degrade
  performance on low-end hardware.

---

## Quality Gates

Before marking any task complete:

- [ ] All colors reference `VaultTheme.<token>` — no raw hex strings
- [ ] All strings exist in `Brand/brand.i18n.ts` in both EN and FR
- [ ] All 19 `VaultTheme` tokens are defined for any new theme added
- [ ] Semantic `*_bg` backgrounds use 12–15% alpha rgba values
- [ ] WCAG AA contrast passes for all text and interactive elements
- [ ] Logo/icon used matches the theme mode (gold-filled → dark; ink-filled → light)
- [ ] No neon green on black, no "hacker" visual clichés
- [ ] If a new theme was added: contrast check against white and black passes
- [ ] Any fallback behavior is deterministic and documented

If a rule here conflicts with a host application's stricter style or
accessibility policy, **the stricter policy wins.**
