/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      barlow: ['Barlow', 'sans-serif'],
      'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      bellefair: ['Bellefair', 'serif'],
    },
    screens: {
      xs: '375px',

      sm: '640px',

      md: '821px',

      lg: '1080px',
    },
  },
  plugins: [],
}
