# VaultWares — Branding Assets

This folder is the distribution point for production-ready brand assets.
Source files (editable SVG, Figma, PSD) live in `../Brand/`.

---

## Asset Inventory

### Logos

| File | Format | Use case | Status |
|---|---|---|---|
| `logo-wordmark-light.svg` | SVG | Light backgrounds (`#FDF6E3`) — default | ⏳ Pending |
| `logo-wordmark-dark.svg` | SVG | Dark backgrounds (`#002B36`) | ⏳ Pending |
| `logo-wordmark-mono.svg` | SVG | Single-color — embossing, watermarks | ⏳ Pending |
| `logo-icon-32.svg` | SVG | 32px icon — browser extension, favicons | ⏳ Pending |
| `logo-icon-512.png` | PNG | App store / desktop icon | ⏳ Pending |

> Source SVG: `../Brand/vaultwares-logo.svg`
> Gold JPG reference: `../Brand/vaultwares_logo_gold.jpg`

### Social & Marketing

| File | Dimensions | Use case | Status |
|---|---|---|---|
| `og-image.png` | 1200×630 | Open Graph / link preview | ⏳ Pending |
| `twitter-card.png` | 800×418 | Twitter/X summary card | ⏳ Pending |
| `linkedin-banner.png` | 1584×396 | LinkedIn company page | ⏳ Pending |

### Print

| File | Format | Use case | Status |
|---|---|---|---|
| `letterhead.pdf` | PDF | Official correspondence | ⏳ Pending |
| `business-card.pdf` | PDF | Print-ready, 3.5×2in / 90×55mm | ⏳ Pending |

---

## Usage Rules

1. **Never** use logos on backgrounds other than `#FDF6E3` (light) or `#002B36` (dark) unless using the mono variant.
2. **Clear space** = ½ the logo height on all sides. Do not crowd the mark.
3. **Minimum size** = 32px height for digital; 10mm for print.
4. **Do not** stretch, recolor, rotate, add gradients, glows, or apply terminal/matrix aesthetics.
5. The gold (`#CC9B21`) in the V-mark must never be replaced with any other color in standard usage.

---

## Adding Assets

When a new asset is production-ready:

1. Export to this folder in the required format.
2. Update the inventory table above with status ✅.
3. Verify the file passes the usage rules checklist.
4. Commit with message: `feat(branding): add <asset-name>`

---

## Color Quick Reference

| Token | Hex | Tailwind class |
|---|---|---|
| Base (dark bg) | `#002B36` | `bg-vault-base` |
| Paper (light bg) | `#FDF6E3` | `bg-vault-paper` |
| Gold accent | `#CC9B21` | `text-vault-gold` / `bg-vault-gold` |
| Cyan interactive | `#21B8CC` | `text-vault-cyan` |
| Slate secondary | `#4A5459` | `text-vault-slate` |

Full token reference: `../Brand/tokens.ts`
Full Tailwind config: `../Brand/tailwind.config.ts`
