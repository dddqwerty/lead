import { GridMain } from 'components'
import Landpage from 'components/landpages/land'
import { MainLayout } from 'layout'
import { getAllPosts } from './posts/fetch'

export const Projects = ({ res }) => {
  return (
    <MainLayout classname={`mx-auto max-w-leadScreen`}>
      <div className="h-32 md:h-[150px]" />
      <Landpage />
      <GridMain datas={res} />
    </MainLayout>
  )
}

export default Projects

export async function getStaticProps() {
  const prjs = await getAllPosts(
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

  return {
    props: {
      res: prjs[0]?.leadPrjsCollection,
    },
  }
}
