/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffb366',
          DEFAULT: '#ff9f43',
          dark: '#e0832a',
        },
        secondary: {
          light: '#2d3748',
          DEFAULT: '#1a202c',
          dark: '#0f1219',
        },
        accent: {
          light: '#ff8585',
          DEFAULT: '#ff5c5c',
          dark: '#e03e3e',
        },
        brand: {
          textPrimary: '#1d1e20',
          textSecondary: '#ffffff',
          surfaceBase: '#000000',
          textInverse: '#26201e',
        }
      },
      fontFamily: {
        sans: ['var(--font-dmsans)', 'sans-serif'],
        display: ['var(--font-dmsans)', 'sans-serif'],
      },
      fontSize: {
        'xs': '13.33px',
        'sm': '14px',
        'md': '16px',
        'base': '16px',
        'lg': '18px',
        'xl': '24px',
        '2xl': '48px',
        '3xl': '68px',
        '4xl': '90px',
      },
      spacing: {
        'space-1': '16px',
        'space-2': '56px',
        'space-3': '173px',
      },
      borderRadius: {
        'radius-xs': '50px',
      },
      boxShadow: {
        'shadow-1': '0px 0px 0px 0px rgba(0, 0, 0, 0)',
      },
      transitionDuration: {
        'instant': '150ms',
        'fast': '200ms',
      }
    },
  },
  plugins: [],
}
