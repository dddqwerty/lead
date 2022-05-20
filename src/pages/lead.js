import { MainLayout } from 'layout'
import { Home } from 'ui'
import { PADDINGX } from 'constants/layout'

export default function Index() {
  return (
    <MainLayout classname={`mx-auto max-w-leadScreen ${PADDINGX}`}>
      <Home />
    </MainLayout>
  )
}
