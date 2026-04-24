# vault-themes

Shared UI theme assets, brand tokens, and reusable components for VaultWares projects.

---

## Structure

```
vault-themes/
├── Brand/                         # Source of truth for all brand assets
│   ├── BRAND_PHILOSOPHY.md        # Vision, mission, positioning, investor reference
│   ├── tokens.ts                  # Design token definitions (colors, type, spacing)
│   ├── tailwind.config.ts         # Tailwind config — synced with tokens.ts
│   ├── brand.i18n.ts              # Bilingual brand strings (EN / FR)
│   ├── vaultcore.ts               # VaultCore schema (Zod)
│   ├── vaultcore.validation.ts    # Extended validation rules
│   ├── vaultwares-logo.svg        # Wordmark — light backgrounds (default)
│   ├── vaultwares-logo-dark.svg   # Wordmark — dark backgrounds
│   ├── vaultwares-logo-mono.svg   # Wordmark — monochrome (embossing / print)
│   ├── vaultwares_logo_gold.jpg   # Raster reference
│   └── VaultWares — Brand Guide.htm  # Full visual brand guide (HTML)
├── branding/                      # Production-ready exported assets (see branding/README.md)
├── components/
│   └── glass/
│       └── LiquidGlass.tsx        # 3-D liquid glass panel (React Three Fiber)
├── BRAND_PHILOSOPHY.md            # → see Brand/BRAND_PHILOSOPHY.md
├── ROADMAP.md                     # Product & design roadmap
├── TODO.md                        # Actionable task list
├── AGENTS.md                      # AI agent rules and constraints
├── agent_manifest.md              # Registered agents and permissions
└── theme_manager.py               # Python theme token manager
```

---

## Quick Start

### 1. Install tokens in a consuming project

```bash
# Copy or symlink Brand/tailwind.config.ts into your project
# Install Inter as the web fallback for Segoe UI Semilight:
npm install @fontsource/inter
```

In your app entry point:

```ts
import '@fontsource/inter/300.css';   // weight 300 — matches Segoe UI Semilight
import '@fontsource/inter/400.css';   // weight 400 — body text
```

### 2. Import design tokens

```ts
import { colors, typography, spacing, glass } from './Brand/tokens';
```

### 3. Use bilingual brand strings

```ts
import { brandStrings } from './Brand/brand.i18n';

const locale = 'fr'; // or 'en'
const t = brandStrings[locale];

console.log(t.tagline);          // "La confidentialité d'abord…"
console.log(t.actions.continue); // "Continuer"
console.log(t.status.secured);   // "Coffre sécurisé"
```

### 4. Use the LiquidGlass component

```bash
npm install @react-three/fiber @react-three/drei three
```

```tsx
import { LiquidGlassEffect } from './components/glass/LiquidGlass'

<LiquidGlassEffect />
```

---

## Brand Principles (summary)

VaultWares is built on three principles:

1. **Privacy** — data minimization, local-first, no tracking, no telemetry
2. **Security** — open-source, auditable, correct cryptography — not theatre
3. **Functionality** — clear, fast, bilingual (EN / FR), accessible to everyone

> Full brand philosophy, competitive positioning, and visual identity rationale:
> [`Brand/BRAND_PHILOSOPHY.md`](./Brand/BRAND_PHILOSOPHY.md)

---

## Color Tokens (quick reference)

| Token | Hex | Usage |
|---|---|---|
| `vault.base` | `#002B36` | Dark theme background |
| `vault.paper` / `vault.light` | `#FDF6E3` | Light theme background |
| `vault.gold` | `#CC9B21` | Primary brand accent (V-mark) |
| `vault.cyan` | `#21B8CC` | Interactive / primary action |
| `vault.green` | `#4ECC21` | Success / secured state |
| `vault.burgundy` | `#A63D40` | Error / destructive |
| `vault.slate` | `#4A5459` | Secondary text / surfaces |
| `vault.muted` | `#586E75` | Captions / tertiary text |

---

## Logo Usage Rules

- Use `vaultwares-logo.svg` on light (`#FDF6E3`) backgrounds
- Use `vaultwares-logo-dark.svg` on dark (`#002B36`) backgrounds
- Use `vaultwares-logo-mono.svg` for single-color applications (embossing, watermarks)
- Minimum size: **32px height** (digital), **10mm** (print)
- Clear space: **½ logo height** on all sides
- Never stretch, recolor, rotate, or apply effects to the logo

---

## Contributing

- All colors must use named `vault.*` tokens — no raw hex in UI code
- All user-facing strings must have both `en` and `fr` entries in `brand.i18n.ts`
- All new/changed themes must pass WCAG AA contrast (body ≥ 4.5:1, large text ≥ 3:1)
- See `AGENTS.md` for AI agent rules

---

*© 2025 VaultWares — Built under VaultWares Enterprise Guidelines*
