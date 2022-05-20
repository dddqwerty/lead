import { GridMain } from 'components'
import Landpage from 'components/landpages/land'
import { MainLayout } from 'layout'

export const Projects = () => {
  return (
    <MainLayout>
      <div className="mt-[89px]">
        <Landpage className="mx-auto max-w-leadScreen " />
      </div>
      <GridMain />
    </MainLayout>
  )
}

export default Projects
