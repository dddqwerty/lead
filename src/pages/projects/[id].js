import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { useEffect, useState } from 'react'
import { getAllPosts, getAllPostsWithId } from 'pages/posts/fetch'
import Typo from 'components/typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { MainLayout } from 'layout'
import { PADDINGX } from 'constants/layout'
import { Oval } from 'react-loader-spinner'
import Image from 'next/image'

export const SpecDatas = ({ projects, para }) => {
  const [data, setData] = useState(null)
  const [id, setId] = useState(null)

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  useEffect(() => {
    if (para !== undefined) {
      setId(Number(para.id))
      setData(projects[0]?.leadPrjsCollection?.items[id])
    }
  }, [id, para, data, projects])

  const router = useRouter()

  if (!router.isFallback && !projects) {
    return <ErrorPage statusCode={404} />
  }

  if (!router.isFallback && projects[0]?.leadPrjsCollection?.items[id] == null) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div>
      {projects && id !== null && data ? (
        <MainLayout classname={`flex flex-col gap-[104px] ${PADDINGX}`}>
          <div className="flex flex-col mt-[120px]">
            <Typo
              variant="h3"
              className="flex items-center text-primary-main cursor-pointer gap-[13px]"
              onClick={() => (window.location.href = '/projects')}
            >
              <img src="/static/ret.png" alt="" className="w-[21px] h-[21px]" /> Буцах
            </Typo>
            <div className="flex flex-col gap-8 mt-[42px] max-w-leadScreen mx-auto">
              <Typo variant="h3" className="text-primary-dark">
                {data.date.slice(0, 10)}
              </Typo>
              <Typo variant={matches ? 'body-mobile' : 'h2'}> {data.title} </Typo>
              <Image src={data.specImg.url} alt="" width={1224} height={402} />
              <Typo variant="body">{data.specInfo}</Typo>
            </div>
          </div>
        </MainLayout>
      ) : (
        <div className="flex justify-center items-center w-[100vw] h-[100vh]">
          <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={0.5}
            strokeWidthSecondary={1.5}
            color="#9AC760"
            secondaryColor="white"
          />
        </div>
      )}
    </div>
  )
}

export default SpecDatas

export async function getStaticProps({ params }) {
  const datas = await getAllPosts(
    'pagesCollection',
    `
    items{
      leadPrjsCollection(limit: 40){
        items{
          date
          title
          specImg{
            url
         }
         specInfo
       }
     }
   }
   `,
  )

  return {
    props: {
      projects: datas,
      para: params !== undefined ? params : console.log('awaiting'),
    },
  }
}

export async function getStaticPaths() {
  const lnks = await getAllPostsWithId(
    'pagesCollection',
    `
  items {
    leadPrjsCollection {
        items {
         date
         title
         prjType
         id
       }
     } 
  `,
  )

  return {
    paths: lnks === undefined ? [] : lnks[0]?.leadPrjsCollection?.items?.map((x) => `/projects/${x.id}`) ?? [],
    fallback: true,
  }
}
