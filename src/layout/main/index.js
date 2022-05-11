import { Header } from './header'
import { Footer } from './footer'

export const MainLayout = ({ children, classname }) => {
  return (
    <>
      <Header />
      <main className={`relative w-full ${classname}`}>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
