import { Hello } from 'components'
import { handleIcon } from 'utils'

export default function Home() {
  return (
    <div>
      {handleIcon({ icon: 'instagram', className: 'bg-amber-200' })}
      <Hello />
    </div>
  )
}
