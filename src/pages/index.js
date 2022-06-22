import { MainLayout } from 'layout'
import { GridMain, Button } from 'components'
import router from 'next/router'
import { useAppContext } from 'context/cont'
import { HomeFirst } from 'components/home/homefirst'
import HomeSecond from 'components/home/homesec'
import News from 'components/home/news'
import Landpage from 'components/landpages/land'
import Support from 'components/oursup'
import { PADDINGX } from 'constants/layout'
import { getAllPosts } from './posts/fetch'
import Head from 'next/head'

export const Home = ({ fs, sc, thrd }) => {
  const { setLink } = useAppContext()

  return (
    <>
      <Head>
        <title>LEAD</title>
        <meta name="title" content="LEAD" />
        <meta name="description" content="Website for Lead Alumni Association" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="LEAD" />
        <meta property="og:description" content="Website for Lead Alumni Association" />
        <meta property="og:image" content="/static/lead.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="LEAD" />
        <meta property="twitter:description" content="Website for Lead Alumni Association" />
        <meta property="twitter:image" content="/static/lead.png" />
      </Head>

      <MainLayout>
        <HomeFirst />
        <HomeSecond datas={fs} />
        <div className="mt-9">
          <div className="md:mt-[380px]">
            <Landpage className="mx-auto max-w-leadScreen" />
          </div>
          <GridMain datas={sc} />
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
          <News datas={thrd} />
          <Support className={PADDINGX} />
        </div>
      </MainLayout>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const datas = await getAllPosts(
    'pagesCollection',
    `
   items{
    homePageCollection{
      items{
        ... on AmountOfPpl{
           type 
           amount
           }
         }
       }
      }
   `,
  )

  const gridMain = await getAllPosts(
    'pagesCollection',
    `
      items{
       leadPrjsCollection(limit: 20){
         items{
           prjType
           title
           subTxt
           media{
             url
          }
          id
        }
      }
    }
   `,
  )

  const news = await getAllPosts(
    'pagesCollection',
    `
    items{
      leadNewsPageCollection(limit: 4){
        items{
          date
          title
          img{
            url
         }
         info
         profession
         id
       }
     }
   } 
   `,
  )

  return {
    props: {
      fs: datas[0]?.homePageCollection,
      sc: gridMain[0]?.leadPrjsCollection,
      thrd: news[0]?.leadNewsPageCollection,
    },
  }
}
