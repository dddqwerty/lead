import { handleIcon } from 'utils'
import { MainLayout } from 'layout'

export default function Home() {
  return (
    <MainLayout>
      <div>{handleIcon({ icon: 'instagram', className: 'bg-amber-200' })}</div>
    </MainLayout>
  )
}
