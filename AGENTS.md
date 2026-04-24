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

Apply these rules to any work touching `theme_manager.py`, style guides, token
exports, Figma-to-code implementation, UI components, or brand assets.

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
  from `Brand/tokens.ts` or the corresponding `vault.*` Tailwind class.
- Theme mode must be explicit: `light` or `dark`. Never infer it.
- Every theme must define at least `background` and `accent` role colors via
  the manager API in `theme_manager.py`.
- Keep theme definitions centralized in `theme_manager.py`. Do not duplicate
  theme catalogs across files.
- Theme names are Title Case (user-facing). Theme IDs are kebab-case (machine).

### Color token reference (from `Brand/tokens.ts`)

| Token | Hex | Role |
|---|---|---|
| `vault.base` | `#002B36` | Dark background |
| `vault.paper` / `vault.light` | `#FDF6E3` | Light background |
| `vault.gold` | `#CC9B21` | Primary brand accent |
| `vault.cyan` | `#21B8CC` | Interactive / primary action |
| `vault.green` | `#4ECC21` | Success / secured state |
| `vault.burgundy` | `#A63D40` | Error / destructive |
| `vault.slate` | `#4A5459` | Secondary text / surfaces |
| `vault.muted` | `#586E75` | Captions / tertiary text |

---

## Accessibility Requirements

- Body text contrast: **WCAG AA ≥ 4.5:1** — required on every component.
- Large text / UI elements: **WCAG AA large ≥ 3.0:1** — required.
- New or changed themes must pass a contrast check against white and black
  foreground references before merging.
- Bilingual strings must be tested at the same layout breakpoints — FR is longer.

---

## Security & Cryptography Rules

These are product requirements, not suggestions:

- Authentication and encrypted client-to-client communication flows must be
  designed around **post-quantum cryptography with ML-KEM** as the
  key-encapsulation mechanism.
- **Never** design a flow where the server can read, persist, derive, or
  reconstruct private keys or shared decryption keys used between two clients.
  The server may only coordinate: public key material, routing metadata, and
  encapsulated key exchange artifacts.
- Security-related UI must preserve the VaultWares privacy-first posture.
  Authentication UX must never weaken end-to-end key control for clients.

---

## Figma MCP Integration Rules

### Required flow (do not skip steps)

1. Run `get_design_context` on the exact node(s) to implement.
2. Run `get_screenshot` for visual parity checks.
3. Map all Figma color values to `vault.*` token references before writing code.
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

## Asset Handling

- If Figma MCP provides localhost asset URLs, use them directly during
  implementation.
- Do not introduce new icon packs unless explicitly requested.
- Store static assets under the consuming app's standard asset path (e.g.
  `public/assets/`).
- Logo variants are in `Brand/`:
  - `vaultwares-logo.svg` — light backgrounds (default)
  - `vaultwares-logo-dark.svg` — dark backgrounds
  - `vaultwares-logo-mono.svg` — monochrome (embossing, watermarks)
- Production-ready exported assets belong in `branding/`. See `branding/README.md`.

---

## Quality Gates

Before marking any task complete:

- [ ] All colors use `vault.*` tokens — no raw hex
- [ ] All strings exist in `Brand/brand.i18n.ts` in both EN and FR
- [ ] WCAG AA contrast passes for all text and interactive elements
- [ ] No hardcoded pixel values — spacing uses the 8px scale
- [ ] No neon green, black terminal backgrounds, or "hacker" visual clichés
- [ ] If a new theme was added: contrast check against white and black passes
- [ ] Any fallback behavior is deterministic and documented

If a rule here conflicts with a host application's stricter style or
accessibility policy, **the stricter policy wins.**
