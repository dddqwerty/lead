import { Header } from './header'
import { Footer } from './footer'

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
