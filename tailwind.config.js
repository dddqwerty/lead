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
        h1: '3.5rem',
        h2: '2.5rem',
        h3: '1.5rem',
        title1: '1.25rem',
        bodyBold: '1.125rem',
        bodySemiBold: '1.25rem',
        body: '1.125rem',
        subh: '0.875rem',
        caption: '.75rem',
      },
      height: {
        40: '2.5rem',
        140: '8.75rem',
      },
      weight: {},
    },
  },
  plugins: [],
}
