import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Qleen Demo 02 exact colour palette — forest/sage green
        brand: {
          50:  '#f0f7f1',
          100: '#d9ecdb',
          200: '#b3d9b8',
          300: '#82be8a',
          400: '#509e5a',
          500: '#3a7d44',  // Primary — Qleen main green
          600: '#2d6235',  // Dark variant
          700: '#245029',
          800: '#1d3f21',
          900: '#152f18',
        },
        // Qleen off-white/cream background
        cream: {
          50:  '#fafaf8',
          100: '#f5f5f0',
          200: '#ededе4',
        },
      },
      fontFamily: {
        // Qleen uses DM Sans + Hanken Grotesk
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        display: ['var(--font-hanken)', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 2px 16px 0 rgba(0,0,0,0.07)',
        'card-hover': '0 8px 32px 0 rgba(58,125,68,0.14)',
        'widget': '0 8px 40px 0 rgba(0,0,0,0.10)',
      },
    },
  },
  plugins: [],
}

export default config
