/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#26C068',
        'secondary': '#51cd86',
        'tertiary': '#1e9a53',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
