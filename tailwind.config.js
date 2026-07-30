/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Pacifico', 'cursive'],
        hand: ['Caveat', 'cursive'],
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        nfdPink: '#d25d74',
        nfdPinkDark: '#b14a5e',
        nfdPinkLight: '#e88aa0',
        nfdCream: '#fdf6ec',
        nfdCreamDeep: '#f3e6d0',
        nfdInk: '#5b2b3a',
      },
      backgroundImage: {
        'grid-paper': 'linear-gradient(to right, rgba(91,43,58,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(91,43,58,0.07) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-sm': '26px 26px',
      },
    },
  },
  plugins: [],
};
