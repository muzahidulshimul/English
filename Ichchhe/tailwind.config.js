/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './navigation/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C8B6FF',
        background: '#121212',
        card: '#1E1E1E',
        text: '#FFFFFF',
        secondaryText: '#A0A0A0',
      },
    },
  },
  plugins: [],
}

