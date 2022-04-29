/* eslint-disable @typescript-eslint/no-empty-interface */
import { createTheme } from '@mui/material/styles'
import colors from './colors'

export const MuiTheme = createTheme({
  typography: {
    fontFamily: `"Montserrat", sans-serif`,
    h1: {
      fontSize: '56px',
      fontWeight: 800,
    },
    h2: {
      fontSize: '49px',
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
      fontSize: '40px',
    },
    h4: {
      fontFamily: 'DinPro',
      fontWeight: 600,
      fontSize: '36px',
    },
    h5: {
      fontFamily: 'DinPro',
      fontWeight: 700,
      fontSize: '24px',
    },
    h6: {
      fontFamily: 'DinPro',
      fontWeight: 600,
      fontSize: '20px',
    },
    body1: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
    },
    body2: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
    },
    subtitle1: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
    },
    subtitle1Bold: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
    },
    subtitle2: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
    },
    caption: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px',
    },
    buttonSmall: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px',
    },
    buttonMedium: {
      fontFamily: 'Inter',
      fontStyle: 'medium',
      fontWeight: 600,
      fontSize: '14px',
    },
    buttonLarge: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '18px',
    },
  },
  palette: {
    primary: {
      main: colors.primary.main,
    },
  },
})
