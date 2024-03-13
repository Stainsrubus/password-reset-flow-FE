/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      pacifico: ['Pacifico', 'cursive'],
    },
    extend: {
      backgroundImage:{
        'login-bg':"url('/src/assets/login-bg.jpeg')"
      }
    },
  },
  plugins: [],
}

