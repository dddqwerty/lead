import { MainLayout } from 'layout'
import { Home } from 'ui'
import { PADDINGX } from 'constants/layout'
import { List, Prob, Requirements } from 'components'
import { getAllPosts } from './posts/fetch'

export const Index = ({ res }) => {
  return (
    <MainLayout classname="mx-auto">
      <Home classname={`max-w-leadScreen mx-auto ${PADDINGX}`} datas={res} />
      <Requirements />
      <div className={`max-w-leadScreen mx-auto ${PADDINGX}`}>
        <Prob />
        <List />
      </div>
    </MainLayout>
  )
}

export default Index

export async function getStaticProps() {
  const data = await getAllPosts(
    'pagesCollection',
    `
     items{
       whatIsLeadPage{
         workersQuantity
         employeesCollection{
           items{
             url
          }
        }
      }
     }
     `,
  )

  return {
    props: {
      res: data[0]?.whatIsLeadPage,
    },
  }
}
