# Vault Themes Submodule Consumer Rules

Use `theme-manager/tools/sync_submodule_rules.py` to place managed instruction
blocks in parent repositories that include `vaultwares-themes`.

Submodule-local `AGENTS.md` files do not automatically govern the parent repo.
Every consumer needs its own pointer telling agents and IDEs to read:

- `vaultwares-themes/AGENTS.md`
- `vaultwares-themes/CONTEXT.md`
- `vaultwares-themes/brand/brand-guide.md`
- `vaultwares-themes/brand/tokens/tokens.ts`

The sync tool supports Codex, Claude, GitHub Copilot, Cursor, Windsurf,
Continue, VS Code, and generic CLI/TUI surfaces.
