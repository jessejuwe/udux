/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        vector: "url('./src/assets/vector.svg')",
      },
      fontSize: {
        adapt: {
          h1: 'clamp(3rem, 1rem + 10vw, 7rem)',
          p: 'clamp(1rem, 0.5rem + 10vw, 1.5rem)',
        },
      },
      fontFamily: {
        BwModelica: ['BwModelica', 'sans-serif'],
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      },
      screens: {
        large: '2000px', // => @media (min-width: 1250px) { ... }
        medium: '61.25em', // => @media (min-width: 980px) { ... }
        xs: '450px', // => @media (min-width: 450px) { ... }
      },
    },
  },
  plugins: [],
};
