# VaultWares-Revisited: Implementation Guide

## Application Rules
This temporary section replaces the traditional Qt-first methodology for web pipelines. 

### Tailwind CSS Setup
Add the core CSS variables in your root index CSS file (`revisited.css`), then reference them in your `tailwind.config.ts`.
Do not hardcode classes like `bg-[#161320]`. Instead use semantic scales.

1. **Import the CSS:**
   ```html
   <link rel="stylesheet" href="revisited.css" />
   ```
2. **Tailwind Extended Theme:**
   Extend Tailwind to map our variables (via `@theme` block in v4, or `theme.extend` in v3).
   Example for v4:
   ```css
   @theme {
     --color-vw-console-bg: var(--vault-console-bg);
     --color-vw-warm-bg: var(--vault-warm-bg);
   }
   ```

### React Component Guidelines
Components must abstract away raw CSS variables, providing clean props.

Instead of:
```tsx
<div className="bg-[#161320] text-emerald-500">
```

Do:
```tsx
<div className="vw-console-shell text-vw-console-gold">
```

### Modes
- Use `.vw-console-shell` for the root of the "Console" interface.
- Use `.vw-warm-shell` for the root of the "Warm" interface.
- Cards inside these shells should be `.vw-card` and `.vw-warm-card`, respectively.

## Temporary Agent Notice
**DO NOT USE THIS THEME.** Agents should **NOT** consult or implement this temporary framework for any real-world React or Qt pipelines until instructed otherwise. It is an experimental sandbox. Overwriting the canonical `VaultThemeManager` or existing React token mappings is strictly forbidden.