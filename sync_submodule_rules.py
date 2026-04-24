from __future__ import annotations

import argparse
from pathlib import Path

START_MARKER = "<!-- VAULT-THEMES-SUBMODULE:START -->"
END_MARKER = "<!-- VAULT-THEMES-SUBMODULE:END -->"

CODEX_BLOCK = """<!-- VAULT-THEMES-SUBMODULE:START -->
## Vault Themes Submodule Rules

If this repository includes the `vault-themes` submodule, you MUST read the following files before making changes related to UI, branding, design systems, token usage, shared components, authentication UX, encrypted client-to-client communication, or Figma-derived implementation:

- `vault-themes/AGENTS.md`
- `vault-themes/.github/STYLE.md`
- `vault-themes/.github/INSTRUCTIONS.md`

When theme token roles, contrast helpers, or executable theme governance matter, also inspect:

- `vault-themes/theme_manager.py`

Treat these files as the shared VaultWares source of truth. Re-check them whenever the submodule changes or when a task touches cross-repo product rules.
<!-- VAULT-THEMES-SUBMODULE:END -->
"""

CURSOR_BLOCK = """---
description: Require VaultWares submodule guidance from vault-themes before UI, branding, design-system, auth UX, encrypted client-to-client communication, or Figma-derived work.
globs: "**/*"
alwaysApply: false
---

<!-- VAULT-THEMES-SUBMODULE:START -->
If this repository includes the `vault-themes` submodule, you MUST read the following files before making changes related to UI, branding, design systems, token usage, shared components, authentication UX, encrypted client-to-client communication, or Figma-derived implementation:

- `vault-themes/AGENTS.md`
- `vault-themes/.github/STYLE.md`
- `vault-themes/.github/INSTRUCTIONS.md`

When theme token roles, contrast helpers, or executable theme governance matter, also inspect:

- `vault-themes/theme_manager.py`

Treat these files as the shared VaultWares source of truth. Re-check them whenever the submodule changes or when a task touches cross-repo product rules.
<!-- VAULT-THEMES-SUBMODULE:END -->
"""


def replace_or_append(existing: str, block: str) -> str:
    if START_MARKER in existing and END_MARKER in existing:
        start = existing.index(START_MARKER)
        end = existing.index(END_MARKER) + len(END_MARKER)
        updated = existing[:start] + block + existing[end:]
        return updated.rstrip() + "\n"

    if not existing.strip():
        return block.rstrip() + "\n"

    return existing.rstrip() + "\n\n" + block.rstrip() + "\n"


def write_text(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def sync_file(path: Path, block: str) -> None:
    existing = path.read_text(encoding="utf-8") if path.exists() else ""
    write_text(path, replace_or_append(existing, block))


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Sync vault-themes submodule guidance into a consumer repository's agent rule files."
    )
    parser.add_argument("consumer_root", help="Absolute or relative path to the consumer repository root.")
    parser.add_argument(
        "--targets",
        nargs="+",
        choices=["codex", "claude", "cursor"],
        default=["codex", "claude", "cursor"],
        help="Which agent rule surfaces to sync.",
    )
    args = parser.parse_args()

    consumer_root = Path(args.consumer_root).resolve()
    if not consumer_root.exists():
        raise SystemExit(f"Consumer root does not exist: {consumer_root}")

    submodule_path = consumer_root / "vault-themes"
    if not submodule_path.exists():
        raise SystemExit(f"Consumer repo does not appear to contain a vault-themes submodule: {submodule_path}")

    if "codex" in args.targets:
        sync_file(consumer_root / "AGENTS.md", CODEX_BLOCK)
        print(f"Updated {consumer_root / 'AGENTS.md'}")

    if "claude" in args.targets:
        sync_file(consumer_root / "CLAUDE.md", CODEX_BLOCK)
        print(f"Updated {consumer_root / 'CLAUDE.md'}")

    if "cursor" in args.targets:
        sync_file(consumer_root / ".cursor" / "rules" / "vault-themes-submodule.mdc", CURSOR_BLOCK)
        print(f"Updated {consumer_root / '.cursor' / 'rules' / 'vault-themes-submodule.mdc'}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
