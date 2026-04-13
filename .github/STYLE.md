# VaultWares Design System Style Guide

This file defines VaultWares visual rules for themes, tokens, layout rhythm, and motion.

## Core Direction

- Avoid the generic "hacker terminal" look.
- Support both `light` and `dark` modes in every product.
- Favor calm, high-legibility palettes with vivid but controlled accents.
- Prioritize clarity, accessibility, and consistency over visual noise.

## Color System

### Principles

- Base surfaces should be neutral and slightly warm/cool, not pure black.
- Accent colors should be energetic but used sparingly for hierarchy.
- Brand accents should not reduce text readability.
- Never hardcode ad-hoc hex values in app code. Use named tokens.

### Baseline Palette Guidance

- Dark foundations: charcoal or blue-gray (`#222222` to `#4A5459` family).
- Light foundations: off-white or pale neutral (`#F5F5DC` to `#FDFDFD` family).
- Accent examples: gold, cyan, burgundy, deep blue, violet, or tangerine.

### Required Token Roles

Each theme should provide these roles at minimum:

- `background`
- `surface`
- `surface_elevated`
- `text_primary`
- `text_secondary`
- `accent`
- `accent_hover`
- `border_subtle`
- `focus_ring`
- `success`
- `warning`
- `danger`

## Typography

- Primary UI typeface: `Segoe UI` with light/regular/semibold weights as needed.
- Reserve heavy weights for headings and key actions only.
- Maintain readable line-height:
- Body text: `1.4` to `1.6`.
- Headings: `1.15` to `1.3`.

## Spacing and Layout Rhythm

- Use an 8px spacing base for layout and component spacing.
- Recommended scale: `4, 8, 12, 16, 24, 32, 40, 48, 64`.
- Keep sections visually breathable and avoid dense card stacks.

## Motion and Effects

- Favor subtle entrance and state transitions (`120ms` to `240ms`).
- Use easing that feels natural (`ease-out` for entry, `ease-in-out` for state).
- Avoid infinite decorative animation loops by default.
- `glass-ui` is allowed in small doses for elevated surfaces and overlays.

## Accessibility Requirements

- Body text contrast target: WCAG AA (>= 4.5:1).
- Large text and UI component contrast target: >= 3.0:1.
- Focus states must be clearly visible in both modes.
- Do not rely on color alone to communicate state.

## Custom Skin Catalog

Format: `mode | primary | accent`

1. `light | #F5F5DC | #800020` (Vintage Velvet)
2. `dark | #073642 | #CB4B16` (Cyberpunk Cinder)
3. `dark | #4A5459 | #D4AF37` (Golden Slate)
4. `light | #FAF9F6 | #333333` (Modern Monolith)
5. `dark | #8B0000 | #FFC0CB` (Crimson Bloom)
6. `light | #D3D3D3 | #006994` (Ocean Mist)
7. `dark | #222222 | #00FFFF` (Neon Void)
8. `dark | #4B0082 | #F28500` (Royal Tangerine)
9. `light | #FDFDFD | #800080` (Amethyst Frost)

## Figma-to-Code Expectations

- Map Figma color values to Vault theme tokens before implementing components.
- Keep spacing aligned to the 8px scale unless host app constraints require otherwise.
- Validate final screens in both light and dark modes.
- Verify contrast and focus visibility before sign-off.
