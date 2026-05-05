# AGENTS.md - vault-themes

This repository is the canonical VaultWares source of truth for brand, visual
style, theme tokens, shared UI references, and cross-agent guidance.

## Required Reading

Before changing UI, branding, design tokens, theme exports, agent instructions,
auth UX, encrypted communication UX, or consumer propagation rules, read:

- `brand/brand-guide.md`
- `brand/philosophy.md`
- `brand/tokens/tokens.ts`
- `brand/tokens/tailwind.config.ts`
- `brand/i18n/brand.i18n.ts`
- `CONTEXT.md`

## Brand Direction

Priority order:

1. Privacy for individuals
2. Security in service of privacy
3. Functionality
4. Performance
5. Scalability
6. Developer experience

VaultWares should feel calm, precise, human, premium, and practical. Do not use
fear-based security copy, hacker stereotypes, Matrix visuals, pure black/neon
green palettes, vague "military-grade" claims, or jargon when plain language
works.

All visible brand language should support English and French/Quebec French. Make
layouts tolerant of French strings being 15-20% longer than English.

## Token Rules

- Never hardcode reusable colors, spacing, fonts, radii, motion, or glass values.
- Use named tokens from `brand/tokens/tokens.ts`.
- Keep Tailwind mapping in `brand/tokens/tailwind.config.ts`.
- Add platform exports under `theme-manager/` when another framework needs the
  same values.
- Every theme must define at least: `background`, `surface`,
  `surfaceElevated`, `textPrimary`, `textSecondary`, `accent`, `accentHover`,
  `borderSubtle`, `focusRing`, `success`, `warning`, and `danger`.

## Visual Rules

- Dark mode uses deep teal/slate, not pure black.
- Light mode uses warm paper/off-white, not stark white-only surfaces.
- Gold is the primary brand accent; cyan is the interactive accent.
- Use glass UI sparingly for elevated overlays, cards, tool panels, and command
  surfaces. Do not turn entire pages into blurred glass.
- Motion should be subtle: 120-240ms, no infinite decorative loops by default.
- Body text contrast must meet WCAG AA, 4.5:1 or better.
- Do not rely on color alone for state.

## Repo Layout

- Root: only durable entrypoints such as `AGENTS.md`, `CONTEXT.md`,
  `README.md`, `LICENSE`, `.gitignore`, and repo config.
- `brand/`: maintainable brand guide, philosophy, tokens, bilingual strings,
  and legacy notes worth preserving.
- `assets/`: logos, icons, favicons, source design assets.
- `theme-manager/`: Python managers, sync tools, validation, and platform
  exports.
- `components/`: reusable component references.
- `examples/brand-guide/`: optional lightweight demo.
- `docs/`: maintenance notes and consumer update plans.

## Agent And IDE Guidance

This file is the single canonical instruction source. Tool-specific files such
as `.github/copilot-instructions.md`, `CLAUDE.md`, Cursor rules, Windsurf rules,
Continue context, or VS Code guidance should contain only a short pointer back
to this file and `CONTEXT.md` unless the tool requires a specific wrapper.

Use `theme-manager/tools/sync_submodule_rules.py` to propagate managed guidance
blocks into consumer repositories that include `vault-themes`.

## Consumer Repo Policy

Submodule-local instructions do not automatically govern parent repos. Consumer
repos need their own managed pointers that tell agents and IDEs to read this
repo before UI, branding, token, theme, auth UX, encrypted communication UX, or
Figma-derived implementation work.

This cleanup only updates compatibility pointers. A full consumer repo
style/token migration is future work and is tracked in
`docs/consumer-update-roadmap.md`.

## Python And Tooling

Python files belong under `theme-manager/`. Keep them dependency-light and
cross-platform. When moving tools, keep import paths working and run:

```powershell
python -m py_compile (Get-ChildItem -Recurse theme-manager -Filter *.py).FullName
```

## Brand Guide Demo

The editable guide source is `brand/brand-guide.md`. The optional visual demo is
under `examples/brand-guide/`. The demo must:

- Use local assets only.
- Avoid external network requests.
- Stay isolated from consumer runtime dependencies.
- Build successfully before completion when touched.

## Completion Checklist

- Updated paths in `README.md`, `CONTEXT.md`, and relevant docs.
- No duplicate canonical instruction files.
- No generated caches or build bundles committed unless intentionally needed.
- Python tools compile.
- Brand guide demo builds when touched.
- Consumer pointers still resolve.
- Agent ledger entry recorded before final response when available.
