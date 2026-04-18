// /lib/brand/tokens.ts
// VaultWares design tokens — Gold Edition
// Follows STYLE.md: Segoe UI Semilight, Solarized-inspired, no Matrix style

export const colors = {
  slate: '#4A5459',
  gold: {
    DEFAULT: '#CC9B21',
    muted: '#B78C1E',
    light: '#E5C06A',
  },
  paper: '#FDFCF7',
  ink: '#002B36',
  cyan: '#21B8CC',
  green: '#4ECC21',
} as const;

export const typography = {
  fontFamily: {
    sans: ['"Segoe UI Semilight"', 'Inter', 'system-ui', 'sans-serif'],
    mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
  },
  fontWeight: {
    light: 300,
    normal: 400,
  },
} as const;

export const vaultCore = {
  modes: {
    server: 'Self-hosted VaultWares (no third-party cloud)',
    local: 'On-device inference',
  },
} as const;
