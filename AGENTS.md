# AGENTS.md - vault-themes

This repository is the source of truth for VaultWares visual rules and theme primitives.

## Scope

- Apply these rules to any work touching `theme_manager.py`, style guides, token exports, or Figma-to-code implementation.
- Prefer consistency and accessibility over novelty.

## Theme System Rules

- IMPORTANT: Never hardcode ad-hoc colors in UI implementations; always use a named theme token.
- Theme mode must be explicit: `light` or `dark`.
- Every theme must define at least `background` and `accent` role colors through the manager API.
- Every theme update must preserve legibility targets:
- Body text contrast target: WCAG AA (>= 4.5:1).
- Large text/UI contrast target: WCAG AA large (>= 3.0:1).

## Naming and Organization

- Theme names are user-facing strings in Title Case.
- Machine-facing theme IDs are kebab-case and generated from names.
- Keep theme definitions centralized in `theme_manager.py`; do not duplicate theme catalogs in multiple files.

## Figma MCP Integration Rules

These rules define how Figma inputs are translated for VaultWares projects.

### Required Flow (do not skip)

1. Run `get_design_context` for the exact node(s) to implement.
2. Run `get_screenshot` for visual parity checks.
3. Map Figma colors to vault theme tokens before writing UI code.
4. Reuse existing project components first; only create new components when reuse is not possible.
5. Validate final UI for both visual parity and contrast compliance before completion.

### Implementation Rules

- Treat Figma-generated code as a structural draft, not final style output.
- Replace raw values with theme token references from the theme manager output.
- Preserve spacing rhythm with an 8px base scale unless the host project defines a stricter scale.
- Prefer subtle motion and avoid continuous animations that can distract or degrade low-end hardware performance.

## Asset Handling

- If Figma MCP provides localhost asset URLs, use them directly during implementation.
- Do not introduce new icon packs unless explicitly requested.
- Store static assets under each consuming app's standard asset path (for example `public/assets/`).

## Quality Gates

- New or changed themes must pass a contrast check against white and black foreground references.
- Any fallback behavior must be deterministic and documented.
- If a rule conflicts with a host application's stricter style or accessibility policy, the stricter policy wins.

