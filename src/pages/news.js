import { Medeefirst } from 'components/home/medeefir'
import { Medeesecond } from 'components/home/medeesec'
import { Medeethird } from 'components/home/medeethi'
import { Medeefourth } from 'components/home/medeefou'
import { MainLayout } from 'layout'
import { PADDINGX } from 'constants/layout'
import { getAllPosts } from './posts/fetch'

export default function Medee({ res }) {
  return (
    <MainLayout classname={`flex flex-col mb-[148.75px] gap-[104px] mx-auto max-w-leadScreen ${PADDINGX}`}>
      <div className="h-[39px] " />
      <Medeefirst datas={res} />
      <Medeesecond datas={res} />
      <Medeethird datas={res} />
      <Medeefourth datas={res} />
    </MainLayout>
  )
}

export async function getStaticProps() {
  const news = await getAllPosts(
    'pagesCollection',
    `
   items{
    leadNewsPageCollection(limit: 20){
      items{
       date
       info
       img{
         url
       }
       title
       profession
        }
      }
     }`,
  )

  return {
    props: {
      res: news[0]?.leadNewsPageCollection,
    },
  }
}
