# VaultWares Revisited: Glyphs & Icons

## Overview
Icons and glyphs in VaultWares Revisited are stark, utilitarian, and clean. They borrow heavily from technical schematics and HUD (Heads-Up Display) elements. 

## Primary Icon Library
A dedicated set of React components or raw SVGs exported via `vaultwares-icons.tsx`. 
- **Stroke Width:** Generally bounded at `1.5` to `2` to ensure crispness on high-density displays.
- **Coloring:** Never hardcoded. Icons must inherit `currentColor` or be specifically bound to `text-emerald-500` / `var(--vault-console-gold)` depending on state.

## Rules for Usage
1. **Action Icons:** 
   Should highlight only on interaction (hover/focus), shifting from `--vault-console-text-secondary` to `--vault-console-gold`.
2. **Status Icons:**
   Use the Signal Palette (`--vault-signal-online`, `--vault-signal-warning`, etc.) to denote status. Accompany with `.vw-led` animation if the status represents an active, ongoing connection.
3. **Sizing:**
   Use standard tailwind sizes (`w-5 h-5`, `w-6 h-6`, etc.) or standard rem scaling (`1.25rem`, `1.5rem`). Avoid arbitrary sub-pixel scaling.