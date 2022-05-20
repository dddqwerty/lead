import { GridMain } from 'components'
import Landpage from 'components/landpages/land'
import { MainLayout } from 'layout'

export const Projects = () => {
  return (
    <MainLayout classname={`mx-auto max-w-leadScreen`}>
      <div className="h-32 md:h-[150px]" />
      <Landpage />
      <GridMain />
    </MainLayout>
  )
}

export default Projects
