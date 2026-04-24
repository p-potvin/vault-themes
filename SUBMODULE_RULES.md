# Vault Themes Submodule Consumer Rules

Use this file to propagate VaultWares shared design, branding, and security requirements into parent repositories that include `vault-themes` as a submodule.

## Codex / AGENTS.md snippet

```md
<!-- VAULT-THEMES-SUBMODULE:START -->
## Vault Themes Submodule Rules

If this repository includes the `vault-themes` submodule, you MUST read the following files before making changes related to UI, branding, design systems, token usage, shared components, authentication UX, encrypted client-to-client communication, or Figma-derived implementation:

- `vault-themes/AGENTS.md`
- `vault-themes/.github/STYLE.md`
- `vault-themes/.github/INSTRUCTIONS.md`

When theme token roles, contrast helpers, or executable theme governance matter, also inspect:

- `vault-themes/theme_manager.py`

Treat these files as the shared VaultWares source of truth. Re-check them whenever the submodule changes or when a task touches cross-repo product rules.
<!-- VAULT-THEMES-SUBMODULE:END -->
```

## Claude / CLAUDE.md snippet

Use the same managed block content as the AGENTS snippet above.

## Cursor rule file

For Cursor, generate a dedicated file such as `.cursor/rules/vault-themes-submodule.mdc` with a managed block that tells the agent to read the same `vault-themes` guidance files before touching any covered surfaces.

## Why this exists

Submodule-local rules do not automatically govern the parent repository. The parent repo must contain its own agent-readable instruction that explicitly points to the `vault-themes` submodule guidance.
