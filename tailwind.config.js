/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        botanical: {
          DEFAULT: '#1E3B2B',
          50: '#F4F7F5',
          100: '#E6ECE7',
          500: '#2A523C',
          600: '#2A523C',
          700: '#172E22',
          800: '#1E3B2B',
          900: '#14281D'
        },
        terracotta: {
          DEFAULT: '#B67A52',
          50: '#FAF5F1',
          100: '#F7EDE6',
          400: '#CF926B',
          500: '#CF926B',
          600: '#B67A52',
          700: '#9E623B'
        },
        sand: {
          50: '#FAF9F6',
          100: '#F5EFE6',
          200: '#E8E2D8'
        }
      }
    }
  },
  plugins: []
};
