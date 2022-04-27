const colors = require('./src/theme/colors')

module.exports = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          light: colors.primary.light,
          main: colors.primary.main,
          dark: colors.primary.dark,
        },
        secondary: {
          light: colors.secondary.light,
          main: colors.secondary.main,
          dark: colors.secondary.dark,
        },
        black: {
          light: colors.black.light,
          main: colors.black.main,
          dark: colors.black.dark,
        },
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        h1: '3.813rem',
        h2: '3.063rem',
        h3: '2.438rem',
        h4: '1.938rem',
        h5: '1.563rem',
        subh: '0.813rem',
      },
    },
  },
  plugins: [],
}
