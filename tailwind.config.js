/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        primary: {
          DEFAULT: '#6D28D9',
          50: '#EDE9F6',
          100: '#DED5F3',
          200: '#C1B3E7',
          300: '#A490DB',
          400: '#876DCF',
          500: '#6D28D9',
          600: '#5A21B5',
          700: '#481A91',
          800: '#36146D',
          900: '#240D49',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
} 