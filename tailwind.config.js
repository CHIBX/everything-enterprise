/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    // "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      zIndex:{
        '3': '3'
      },
      textColor: {
        'pb': {
          '50': '#fefcec',
          '100': '#fcf4c9',
          '200': '#f8e78f',
          '300': '#f5d554',
          '400': '#f2c22d',
          '500': '#eca414',
          '600': '#d17d0e',
          '700': '#ad5a10',
          '800': '#8b4513',
          '900': '#743a13',
          '950': '#421d06',
      },
      }
    },
  },
  plugins: [],
}

