/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'Roboto Mono', 'Menlo', 'monospace'],
        body: ['Inter', 'Roboto Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        card: '0 0 6px rgba(0, 0, 0, 0.15)',
      },
      colors: {
        // palette list: https://tailwindcss.com/docs/customizing-colors
        primary: colors.emerald,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
