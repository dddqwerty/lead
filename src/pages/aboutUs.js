import { Workers } from 'components'
import StartUp from 'components/home/abtUs'
import Goalies from 'components/home/gls'
import { ImgTxt } from 'components'
import Information from 'components/info'
import { MainLayout } from 'layout'
import { PADDINGX } from 'constants/layout'
import { getAllPosts } from './posts/fetch'

export default function Test({ wks19, wks20, wks22, info }) {
  return (
    <MainLayout classname={`mx-auto max-w-leadScreen ${PADDINGX}`}>
      <div className="h-32" />
      <StartUp />
      <div className="flex flex-col gap-14 md:gap-28">
        <ImgTxt
          img="/static/gird1.webp"
          h3="Xэрхэн үүссэн бэ?"
          text="ЛИЙД Төгсөгчдийн Холбоо нь ардчиллын үнэт зүйлийг бэхжүүлж, иргэн бүрийг тэгш хамруулсан тэгш хүртээмжтэй
            нийгмийг цогцлооход хувь нэмрээ оруулах зорилгоор 2018 оны 7-р сарын 9-нд ЛИЙД Монголиа (LEAD Mongolia)
            хөтөлбөрийн төгсөгчдийн санаачилгаар байгуулагдсан нийгэмд үйлчилдэг төрийн бус байгууллага юм."
        />
        <ImgTxt
          posistion="right"
          img="/static/gird1.webp"
          h3="Бидний алсын хараа"
          text="Ардчиллын үнэт зүйлийг бэхжүүлж, иргэн бүрийг тэгш хамруулсан тэгш хүртээмжтэй нийгмийг цогцлооход хувь нэмрээ оруулна."
        />
      </div>

      <Goalies />
      <Workers wks19={wks19} wks20={wks20} wks22={wks22} />
      <Information datas={info} />
    </MainLayout>
  )
}

export async function getStaticProps() {
  const wks19 = await getAllPosts(
    'pagesCollection',
    `
   items{
    aboutUsPageCollection(limit: 20){
      items{
        ... on Workers20182019{
           type
           name
           image{
             url
           }
        }
      }
    }
  }
`,
  )

  const wks20 = await getAllPosts(
    'pagesCollection',
    `
items{
  aboutUsPageCollection(limit: 30){
    items{
      ... on Workers20192020{
         type
         name
         image{
           url
         }
     }
   }
  }
 }
 `,
  )

  const wks22 = await getAllPosts(
    'pagesCollection',
    `
 items{
  aboutUsPageCollection(limit: 40){
    items{
      ... on Workers20212022{
         type
         name
         image{
           url
         }
       }
     }
    }
   }
 `,
  )

  const infoDatas = await getAllPosts(
    'pagesCollection',
    `
items{
  aboutUsPageCollection(limit: 40){
    items{
      ... on AbtLead{
         option
         info
       }
     }
    }
   }
 `,
  )

  return {
    props: {
      wks19: wks19[0]?.aboutUsPageCollection,
      wks20: wks20[0]?.aboutUsPageCollection,
      wks22: wks22[0]?.aboutUsPageCollection,
      info: infoDatas[0]?.aboutUsPageCollection,
    },
  }
}
