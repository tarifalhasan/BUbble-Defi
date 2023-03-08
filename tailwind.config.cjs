/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sandro: "'sandrogrottesco'",
        MacPawFixel: "'MacPawFixelTextRegular'",
      },
      colors: {
        skin: {
          darkBlue: '',
        },
      },
    },
  },
  plugins: [],
};
