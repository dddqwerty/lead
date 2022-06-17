import { Accompany } from 'components'
import { Lead } from './lead'
import { Map } from './map'
import { Topic } from './topic'

export const Home = ({ datas }) => {
  return (
    <div className="flex flex-col mx-auto max-w-leadScreen">
      <Lead datas={datas} />
      <Map />
      <Topic />
      <Accompany />
    </div>
  )
}

export default Home
