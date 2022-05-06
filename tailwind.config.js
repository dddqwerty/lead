const colors = require('./src/theme/colors')

module.exports = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    extend: {
      maxWidth: {
        leadScreen: '1224px',
      },
      colors: {
        primary: {
          light: colors.primary.light,
          main: colors.primary.main,
          dark: colors.primary.dark,
        },
        grey: {
          g100: colors.grey.g100,
          g200: colors.grey.g200,
          g300: colors.grey.g300,
        },
        main: '#FFFFFF',
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
        20: '1.25rem',
      },
      width: {
        140: '8.75rem',
        20: '1.25rem',
        40: '2.5rem',
      },
      s: {
        grey: 'rgba(255, 255, 255, 0.2)',
      },
      lineHeight: {
        18: '1.125rem',
      },
      backgroundColor: {
        grey: 'rgba(255, 255, 255, 0.2)',
      },
      zIndex: {
        1: '1',
      },
    },
  },
  plugins: [],
}
