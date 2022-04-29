import 'styles/globals.css'
import { MuiTheme } from 'theme/theme'
import { ThemeProvider } from '@mui/material'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={MuiTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
