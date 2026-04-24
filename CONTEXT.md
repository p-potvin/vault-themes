# VaultWares — Agent Context Brief

> **How to use this file:**
> This is the single paste-ready document for injecting VaultWares brand and
> engineering context into any AI agent, system prompt, Claude Project, or MCP
> server config. It is a distilled summary — full detail lives in the files
> listed under "Source of Truth" below.
>
> Paste the section(s) relevant to your use case. For a general-purpose coding
> agent, paste everything. For a copywriting agent, paste Brand + Voice only.

---

## Source of Truth (read these for full detail)

| What you need | File |
|---|---|
| Brand philosophy, vision, positioning | `Brand/BRAND_PHILOSOPHY.md` |
| All design tokens (colors, type, spacing) | `Brand/tokens.ts` |
| Tailwind token mapping | `Brand/tailwind.config.ts` |
| All bilingual UI strings (EN / FR) | `Brand/brand.i18n.ts` |
| Agent rules and quality gates | `AGENTS.md` |
| Asset inventory and logo rules | `branding/README.md` |
| Product roadmap | `ROADMAP.md` |

---

## 1. Who VaultWares Is

VaultWares builds privacy-first productivity and security tools. The core
conviction: privacy and usability are not trade-offs — they are prerequisites.

**Three principles, in order:**
1. **Privacy** — local-first, data minimization, no tracking, no telemetry
2. **Security** — open-source, auditable, post-quantum cryptography (ML-KEM),
   never theatrical
3. **Functionality** — clear, fast, bilingual EN/FR, accessible to everyone

**Target users:** Knowledge workers handling sensitive data (legal, finance,
health, journalism), organizations in regulated industries, privacy-conscious
developers and individuals. Primary markets: Canada, France, European Union.

---

## 2. Brand Voice

**We are:** Calm · Clear · Confident · Human · Precise · Bilingual by default

**We are not:** Alarming · Corporate · Jargon-heavy · Preachy · "Hacker"-coded

**Voice examples:**

| ❌ Never write | ✅ Write instead |
|---|---|
| "Encrypted with military-grade AES-256!" | "Vault secured" |
| "CRITICAL SECURITY WARNING" | "Something went wrong. Try again." |
| "Proceed to authentication" | "Continue" |
| "Hacker-proof your life" | "Your data. Your device. Your rules." |

**Bilingual rule:** Every user-facing string must exist in both English and
French in `Brand/brand.i18n.ts`. Design for FR strings running 15–20% longer
than EN. No idioms. Neutral register. Use system locale, allow manual override.

---

## 3. Design Token Reference

All values come from `Brand/tokens.ts`. Never use raw hex values.

### Colors

| Tailwind class | Hex | Use |
|---|---|---|
| `vault.base` | `#002B36` | Dark background |
| `vault.paper` / `vault.light` | `#FDF6E3` | Light background |
| `vault.gold` | `#CC9B21` | **Primary brand accent** — the V-mark, CTAs |
| `vault.cyan` | `#21B8CC` | Interactive elements, links |
| `vault.green` | `#4ECC21` | Success, secured state |
| `vault.burgundy` | `#A63D40` | Error, destructive actions |
| `vault.slate` | `#4A5459` | Secondary surfaces, muted text |
| `vault.muted` | `#586E75` | Captions, tertiary text |
| `gold.muted` | `#B78C1E` | Subdued gold |
| `gold.light` | `#E5C06A` | Gold highlight / hover |

**Never introduce a color not in this table without first adding it to `tokens.ts`.**

### Typography

- **Font:** `Segoe UI Semilight` (Windows) → `Inter` weight 300 (web/macOS/Linux)
- **Weights:** 300 (light), 400 (regular), 500 (medium)
- **Scale:** Display 56/64 · Heading 32/40 · Body 16/26 · Label 13/20
- **Tracking:** `-0.01em` headings · `0.05em` uppercase labels
- **Measure:** 60–75ch line length
- **Install for web:** `npm install @fontsource/inter` then import weights 300 and 400

### Spacing & Layout

- Base unit: **8px**
- Section padding: 96px desktop / 48px mobile
- Glass/blur: `18px blur`, `60% max opacity` — use sparingly, overlays only
- Border radius: `sm 0.5rem` · `md 1rem` · `lg 1.5rem` · `xl 2rem`

---

## 4. Visual Don'ts (absolute)

- **No black backgrounds + neon green.** Not a hacker movie.
- **No Matrix rain, terminal fonts, or padlock-with-lightning icons.**
- **No continuous animations** — subtle motion only, no distraction.
- **No gradients, glows, or rotation** on the logo.
- **No raw hex values in UI code** — always use a named `vault.*` token.
- **No stretching, recoloring, or adding effects** to logos.

---

## 5. Logo Rules

| Variant | File | Use on |
|---|---|---|
| Default (light) | `Brand/vaultwares-logo.svg` | `#FDF6E3` backgrounds |
| Dark | `Brand/vaultwares-logo-dark.svg` | `#002B36` backgrounds |
| Monochrome | `Brand/vaultwares-logo-mono.svg` | Single-color print, embossing |

- Minimum size: **32px height** digital · **10mm** print
- Clear space: **½ the logo height** on all four sides
- The gold `#CC9B21` in the V-mark is never replaced in standard usage

---

## 6. Security & Cryptography Requirements

- Encrypted communication and authentication flows must use **post-quantum
  cryptography with ML-KEM** as the key-encapsulation mechanism.
- **Never** design a flow where the server can read, persist, derive, or
  reconstruct private keys or shared decryption keys between two clients.
  The server handles public key material, routing metadata, and encapsulated
  key exchange artifacts only.
- Privacy-first posture must be preserved in all authentication UX.

---

## 7. Quality Checklist (run before every task completion)

- [ ] All colors use `vault.*` tokens — no raw hex anywhere
- [ ] All user-facing strings are in `brand.i18n.ts` in both EN and FR
- [ ] WCAG AA contrast ≥ 4.5:1 body, ≥ 3.0:1 large text — verified
- [ ] Spacing uses 8px base scale — no arbitrary pixel nudging
- [ ] No neon green, black terminals, Matrix aesthetics, or hacker clichés
- [ ] FR string length accommodated in layout (15–20% longer than EN)
- [ ] Logo usage follows variant + clear-space rules
- [ ] Any new token added to `tokens.ts` AND `tailwind.config.ts`

---

## 8. Platform-Specific Setup

### Cursor
`AGENTS.md` is read automatically. No additional setup required.

### GitHub Copilot
Rules are in `.github/copilot-instructions.md`. Enabled automatically for
repos with that file.

### Claude (claude.ai Projects)
Paste the full contents of this file into **Project Instructions**. Claude
will apply it to every conversation in the project.

### Claude (API / custom agents)
Include this file's content in the `system` parameter of your API call.

### Figma MCP
Add to your MCP server config under `resources`:
```json
"resources": [
  { "uri": "file://./AGENTS.md" },
  { "uri": "file://./Brand/tokens.ts" },
  { "uri": "file://./CONTEXT.md" }
]
```

---

*© 2025 VaultWares — vault-themes · Always prefer `AGENTS.md` for full rules.*
