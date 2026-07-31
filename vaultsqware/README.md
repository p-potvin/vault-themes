# vaultsqware (vaultwares²): Design System

## Overview

vaultsqware is a sibling palette to [vaultwares-revisited](../vaultwares-revisited/README.md),
created so internal tooling stops oversaturating the aubergine + gold brand
surface. It is structurally identical to the Redesign and differs only in hue.

Snapshot taken: Fri, 31 Jul 2026 19:47

## The one thing that carries over unchanged

Console and warm are **simultaneous regions**, not day/night modes.

| Region | Role | Share |
|---|---|---|
| **console** (obsidian) | The operational surface. Where commands run, output streams, work happens. | ~85% |
| **warm** (bone) | The rail, nav, railings. Where you choose rather than act. | ~15% |

An app using this palette shows both at once. There is no theme toggle.

## What changed from revisited

| | vaultwares-revisited | vaultsqware |
|---|---|---|
| Console base | `#0b0813` deep aubergine | `#0A0C11` blue-slate obsidian |
| Warm base | `#F5F1E8` parchment | `#EDECE8` bone |
| Primary accent | `#D6A441` gold | `#6E7BF2` iris |
| Secondary accent | `#B07CFF` violet | `#FF8A6B` coral |
| Reads as | institutional, brand-forward | instrument panel, tooling-forward |

Signals keep their meanings but shift slightly cooler. Geometry, spacing rhythm,
motion and typography are inherited from the Redesign unmodified.

## Files

- [TOKENS.md](./TOKENS.md) — every variable, with usage
- [COMPONENTS.md](./COMPONENTS.md) — shells, cards, LEDs, scrollbars
- [vaultsqware.css](./vaultsqware.css) — the consolidated token file

## Status

**Reference snapshot.** First consumer is
[vw-gui](https://github.com/p-potvin/vw-gui), which currently carries its own
copy at `css/vaultwares-square.css` while the design is being explored. This
folder is the safe original to return to.

## Usage

```html
<link rel="stylesheet" href="vaultsqware/vaultsqware.css" />
```

```html
<body class="vwsq-console-shell">
  <nav class="vwsq-warm-rail">…</nav>
  <main>…</main>
</body>
```

Never use a raw hex outside `vaultsqware.css`. Reference `--vwsq-*` tokens.
