import type { Config } from 'tailwindcss';
export default {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: { extend: { colors: { slate: '#4A5459', gold: { DEFAULT: '#CC9B21' }, paper: '#FDFCF7', ink: '#002B36' }, fontFamily: { sans: ['"Segoe UI Semilight"', 'Inter'] } } },
} satisfies Config;