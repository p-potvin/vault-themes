// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
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
      },
      fontFamily: {
        sans: ['"Segoe UI Semilight"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
