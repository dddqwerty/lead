import { Lead } from './lead'
import { Map } from './map'
import { News } from './news'
import { Topic } from './topic'

export const Home = () => {
  return (
    <div className="flex flex-col">
      <Lead />
      <Map />
      <Topic />
      <News />
    </div>
  )
}

export default Home
