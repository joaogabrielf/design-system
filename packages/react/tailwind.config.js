/** @type {import('tailwindcss').Config} */

import {
  colors,
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  borderRadius,
  spacing,
} from '@joaogabrielf/tokens'

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      fontSize,
      fontWeight,
      fontFamily,
      lineHeight,
      borderRadius,
      spacing,
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideOut: {
          '100%': { transform: 'translateY(0)' },
          '0%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.2s ease-out',
        slideOut: 'slideOut 0.2s ease-out',
      },
    },
    boxShadow: {
      custom: '0 0 0 2px #E1E1E6',
    },
  },
  plugins: [],
}
