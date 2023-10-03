/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'navy': '#2F2B46',
      'gray': '#F0F0F0',
      'hijau' : '#16797E',
    }),
    textColor: theme => theme('colors'),
     textColor: {
       'primary': '#2F2F2F',
       'white' : '#FFFFFF',
       'muda': '#029096',
     },
    extend: {
      dropShadow: {
        "3xl": "0 20px 10px rgba(47, 43, 70, 0.2)",
      },
      backgroundImage: {
        'kp-background': "url('/assets/back.jpeg')",
       },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}