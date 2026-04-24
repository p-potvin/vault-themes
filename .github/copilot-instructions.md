# VaultWares — GitHub Copilot Instructions

You are working inside a VaultWares project. VaultWares builds privacy-first
security and productivity tools. Apply the rules below to every suggestion.

---

## Identity & Voice

- VaultWares is calm, precise, and human — not alarming, corporate, or "hacker-coded."
- Write "Vault secured" not "Encrypted!". Write "Continue" not "Proceed".
- Never write UI copy that uses fear, jargon, or hacker clichés.
- All user-facing strings must have an English AND French entry in
  `Brand/brand.i18n.ts`. French strings run 15–20% longer — accommodate in layouts.

## Design Tokens — Non-Negotiable

Never hardcode a color, font, or spacing value. Always use a named token.

Full token source: `Brand/tokens.ts` | Tailwind config: `Brand/tailwind.config.ts`

| Token class | Hex | Use |
|---|---|---|
| `vault-base` | `#002B36` | Dark background |
| `vault-paper` / `vault-light` | `#FDF6E3` | Light background |
| `vault-gold` | `#CC9B21` | Primary brand accent |
| `vault-cyan` | `#21B8CC` | Interactive / links |
| `vault-green` | `#4ECC21` | Success / secured |
| `vault-burgundy` | `#A63D40` | Error / destructive |
| `vault-slate` | `#4A5459` | Secondary text |
| `vault-muted` | `#586E75` | Captions / tertiary |

## Typography

- Font: `Segoe UI Semilight` (Windows) → `Inter` weight 300 (web fallback)
- Install for web: `npm install @fontsource/inter` + import weights 300/400
- Scale: Display 56/64 · Heading 32/40 · Body 16/26 · Label 13/20
- Line length: 60–75ch. Generous whitespace. Never cramped.

## Coding Standards

- TypeScript strict mode. No `any`. Use Zod for all external data validation.
- Component exports: named, PascalCase (e.g., `export const VaultBadge = ...`)
- Hooks: camelCase prefixed with `use` (e.g., `useVaultAuth`)
- Utilities: kebab-case (e.g., `format-currency.ts`)
- Indentation: 4 spaces. Space around operators (`x = 5` not `x=5`).
- Empty lines between logical blocks (imports, hooks, return, etc.).
- Correlation IDs in all logs: 7-char alphanumeric starting with `c` (e.g., `c1a2b3c`).

## Architecture

- Prefer Server Components for data fetching; Client Components only when
  interactivity is required.
- State: TanStack Query for server state, Zustand for local state.
- UI primitives: Radix UI / shadcn/ui / VaultWares Glass UI — check
  `components/ui` before creating anything new.
- Spacing: 8px base scale. Scale: `4, 8, 12, 16, 24, 32, 40, 48, 64`.

## Visual Rules (absolute)

- No black backgrounds + neon green. No Matrix aesthetics. No terminal fonts in UI.
- No raw hex in code. No raw pixel values. No hardcoded strings.
- Glass/blur: 16–20px blur, 60% opacity max — overlays only, not full pages.
- Motion: 120–240ms, `ease-out` entry / `ease-in-out` state. No infinite loops.

## Security

- Post-quantum cryptography with **ML-KEM** for all key establishment flows.
- Server must never access, persist, or reconstruct client private keys or
  shared decryption keys. Server handles public keys, routing metadata, and
  encapsulated key exchange artifacts only.
- All DB queries must respect Row Level Security (RLS).
- Validate all inputs with Zod. Never commit env variables.

## Accessibility

- Body text contrast: WCAG AA ≥ 4.5:1 — required.
- Large text / UI: WCAG AA large ≥ 3.0:1 — required.
- Never rely on color alone to communicate state.
- Focus states must be visible in both light and dark modes.

## Before Completing Any Task

- [ ] All colors use `vault-*` tokens — no raw hex
- [ ] All strings in `brand.i18n.ts` — both EN and FR
- [ ] WCAG AA contrast verified
- [ ] No hardcoded pixels — 8px scale used throughout
- [ ] No hacker/terminal aesthetics
- [ ] TypeScript strict — no `any`

---

Full rules: `AGENTS.md` | Full brand context: `CONTEXT.md` | Full style guide: `.github/STYLE.md`
