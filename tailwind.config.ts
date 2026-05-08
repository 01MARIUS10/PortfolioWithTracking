import type { Config } from 'tailwindcss'

// Design tokens du projet — correspondent aux variables CSS du design original
export default {
  content: ['./app/**/*.{vue,ts,js}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0a0d14',
          alt: '#0f1320',
        },
        card: {
          DEFAULT: '#151929',
          border: '#1e2540',
        },
      },
    },
  },
} satisfies Config
