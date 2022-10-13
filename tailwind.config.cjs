/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    //todos os tamanhos de fonte da app
    fontSize: {
      'xs': 14,
      'sm': 16,
      'md': 18,
      'lg': 20,
      'xl': 24,
      '2xl': 32,
    },
    colors: {
      'black': '#000',
      'white': '#FFF',
      'transparent': 'transparent',

      gray: {
        900: '#121214',
        800: '#202024',
        500: '#76768A',
        400: '#7C7C8A',
        300: '#C4C4CC',
        200: '#E1E1E6',
        100: '#F5F5F5',
      },

      cyan: {
        500: '#81D8F7',
        400: '#C9F1FF',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter , sans-serif'
      },
    },
  },
  plugins: [],
}
