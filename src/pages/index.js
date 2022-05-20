import { MainLayout } from 'layout'
import { GridMain, Button } from 'components'
import router from 'next/router'
import { useAppContext } from 'context/cont'
import { HomeFirst } from 'components/home/homefirst'
import HomeSecond from 'components/home/homesec'
import HomeThird from 'components/home/homethird'
import News from 'components/home/news'
import Landpage from 'components/landpages/land'
import Support from 'components/oursup'
import { PADDINGX } from 'constants/layout'

export const Home = () => {
  const { setLink } = useAppContext()

  return (
    <MainLayout>
      <HomeFirst />
      <HomeSecond />
      <HomeThird />
      <div className="mt-9">
        <div className="md:mt-[380px]">
          <Landpage className="mx-auto max-w-leadScreen" />
        </div>
        <GridMain />
        <div className="flex justify-center mt-[64px]">
          <Button
            variant="ghost"
            onClick={() => {
              router.push(`/projects`), setLink('projects')
            }}
          >
            Дэлгэрэнгүй
          </Button>
        </div>
        <News />
        <Support className={PADDINGX} />
      </div>
    </MainLayout>
  )
}

export default Home
