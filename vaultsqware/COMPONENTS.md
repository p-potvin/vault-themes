# vaultsqware: Components & Layout

Primitives shipped in `vaultsqware.css`. Everything else is the consuming app's
own component layer.

## 1. Region shells

Unlike a light/dark system, both shells are present on screen at the same time.

- **`.vwsq-console-shell`** — root class for the operational area (~85%).
  Radial iris glow at 22% / -4% fading into a vertical surface→bg gradient.

- **`.vwsq-warm-rail`** — root class for the rail (~15%).
  Radial coral glow at 50% / 0% over the bone base.

```html
<body class="vwsq-console-shell">
  <nav class="vwsq-warm-rail">…</nav>
  <main>…</main>
</body>
```

## 2. Surfaces

Opaque and matte, like hardware panels or physical paper. No glassmorphism.

| Class | Background | Radius |
|---|---|---|
| `.vwsq-card` | `--vwsq-console-raised` | `28px` |
| `.vwsq-panel` | `--vwsq-console-raised` | `16px` |
| `.vwsq-warm-card` | `--vwsq-warm-raised` | `16px` |

Elevation is communicated through borders and background steps, not drop shadows.

## 3. LEDs

`.vwsq-led` is a 7px dot defaulting to `--vwsq-signal-idle`. Add
`.vwsq-led--live` for the 4s `vwsqLedPulse` breathing animation. Set the colour
from the signal palette to express state:

```html
<span class="vwsq-led vwsq-led--live" style="background: var(--vwsq-signal-sync)"></span>
```

Keep the animation slow. It is ambient hardware presence, not an attention grab.

## 4. Entrance

`vwsqFadeInScale` — 400ms, `cubic-bezier(.16,1,.3,1)`, from `scale(.985)` and 3px
down. Stagger list items by index, but cap the cumulative delay (~200ms) so long
lists never feel laggy.

## 5. Scrollbars

Scoped per region, because the two have opposite luminance:

- Inside `.vwsq-console-shell` — sunken track, `--vwsq-console-active` thumb,
  iris on hover. Reads as a terminal track.
- Inside `.vwsq-warm-rail` — transparent track, `--vwsq-warm-muted` thumb.
  Nearly invisible until used.

## 6. Accessibility floor

- `:focus-visible` → `2px solid` coral, `2px` offset, on every interactive element.
- WCAG AA (4.5:1) minimum for body text in both regions.
- `prefers-reduced-motion` collapses all animation and transition durations.
