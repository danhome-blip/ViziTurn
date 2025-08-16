module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a73e8',
        accent: '#f97316',
        dark: '#121212',
        light: '#f5f5f5',
      },
      borderRadius: {
        'lg': '12px',
      }
    },
  },
  plugins: [],
}
