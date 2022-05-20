import { Workers } from 'components'
import StartUp from 'components/home/abtUs'
import Goalies from 'components/home/gls'
import { ImgTxt } from 'components'
import Information from 'components/info'
import { MainLayout } from 'layout'

export default function Test() {
  return (
    <MainLayout classname={'mx-auto max-w-leadScreen'}>
      <StartUp />
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
      <Goalies />
      <Workers />
      <Information />
    </MainLayout>
  )
}
