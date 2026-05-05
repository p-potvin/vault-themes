# vault-themes

`vault-themes` is the shared VaultWares source of truth for brand direction,
design tokens, reusable UI references, theme exports, and agent/IDE guidance.

The repo is intentionally small at the root. Start here:

| File / folder | Purpose |
| --- | --- |
| `AGENTS.md` | Canonical rules for agents, IDE assistants, style, tokens, and repo maintenance. |
| `CONTEXT.md` | Paste-ready short brief for agents and humans who need the brand context quickly. |
| `brand/` | Brand philosophy, maintainable brand guide source, bilingual strings, and tokens. |
| `assets/` | Logos, favicons, icons, and source design assets. |
| `theme-manager/` | Python tools, sync tooling, Qt/PySide exports, and generated platform exports. |
| `components/` | Reusable component references and lightweight UI examples. |
| `examples/brand-guide/` | Optional local React/Tailwind brand-guide demo. |
| `docs/` | Consumer setup, maintenance notes, migration notes, and future work. |

## Quick Checks

```powershell
python -m py_compile (Get-ChildItem -Recurse theme-manager -Filter *.py).FullName
python theme-manager\tools\sync_submodule_rules.py ..\vaultwares-website --check --targets all
cd examples\brand-guide
npm install
npm run build
```

## Brand Guide

The maintainable source is `brand/brand-guide.md`. The optional visual demo lives
in `examples/brand-guide/` and uses local assets only. The previous exported
HTML bundle was generated and has been replaced by editable source files.

## Consumer Repos

This cleanup only updates consumer repo instruction/pointer compatibility where
needed. A full style/token migration across consumers is intentionally left as
future work. See `docs/consumer-update-roadmap.md` for the repo list and next
steps.

## Rules In Short

- Privacy first, security second, functionality third.
- Do not use fear, hacker clichés, Matrix aesthetics, neon green on black, or
  jargon-heavy copy.
- Use named tokens from `brand/tokens/`; do not hardcode colors, spacing, fonts,
  radii, motion values, or glass parameters in reusable code.
- Keep English and French/Quebec French content at parity.
- Use glass UI sparingly for elevated overlays, not full pages.
