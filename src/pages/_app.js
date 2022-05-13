import 'styles/globals.css'
import { MuiTheme } from 'theme/theme'
import { ThemeProvider } from '@mui/material'
import { AppWrapper } from 'context/cont'

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <ThemeProvider theme={MuiTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppWrapper>
  )
}

export default MyApp
