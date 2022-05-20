import { Lead } from './lead'
import { Map } from './map'
import { Topic } from './topic'

export const Home = () => {
  return (
    <div className="flex flex-col">
      <Lead />
      <Map />
      <Topic />
    </div>
  )
}

export default Home
