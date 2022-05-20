const colors = require('./src/theme/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

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
        border: {
          grey: 'rgba(255, 255, 255, 0.2)',
        },
        text: {
          grey: '#d0d0d0',
          grey1: '#828B98',
        },
        bgGrey: '#D0D0D0',
        bgGrey1: '#f7f7f7',
        blackLgiht: '#0F233E',
        main: '#FFFFFF',
        blue: '#3D6AD6',
        grey: '#F5FAFF',
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        h1: '3.5rem',
        h2: '2.5rem',
        h3: '24px',
        title1: '1.25rem',
        bodyBold: '1.125rem',
        bodySemiBold: '18px',
        body: '1.125rem',
        subh: '0.875rem',
        caption: '.75rem',
        bodyMobile: '24px',
        mobile: '16px',
      },
      height: {
        400: '25rem',
        40: '2.5rem',
        140: '8.75rem',
        20: '1.25rem',
      },
      width: {
        140: '8.75rem',
        20: '1.25rem',
        40: '2.5rem',
        496: '496px',
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        'sans-pro': 'Source Sans Pro, sans-serif',
      },
      // s: {
      //   grey: 'rgba(255, 255, 255, 0.2)',
      // },
      // lineHeight: {
      //   18: '1.125rem',
      // },
      // backgroundColor: {
      //   grey: 'rgba(255, 255, 255, 0.2)',
      // },
      // zIndex: {
      //   1: '1',
      // },
    },
  },
  plugins: [],
}
