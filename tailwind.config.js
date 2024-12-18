/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'custom-gradient': 'linear-gradient(to right, #434343 0%, black 100%)'
      },
     
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],

}