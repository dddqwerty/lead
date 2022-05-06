import { Header } from './header'
import { Footer } from './footer'

export const MainLayout = ({ children, classname }) => {
  return (
    <>
      <Header />
      <main className={`relative w-full  min-h-screen ${classname}`}>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
