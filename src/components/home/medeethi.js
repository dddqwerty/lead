import Typo from 'components/typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export const Medeethird = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-24">
      <div className="flex flex-col gap-[16px]">
        <img src="/static/medee2.svg"></img>
        <Typo variant="body">ЛИЙД төгсөгчдийн холбоо ТББ, Төслийн ахлагч</Typo>
      </div>
      <div className="flex md:w-[751.75px] flex-col">
        <Typo variant={matches ? 'body-mobile' : 'h2'}>
          Н. Ганчимэг: Өнөөгийн нийгэмд мэдээлэлтэй байх нь хүн бүрийн суурь хэрэгцээ болсон
        </Typo>
        <Typo variant="body" className="mt-[32px]">
          Би социологич мэргэжилтэй, хэвлэл мэдээллийн судалгаа, мэдээллийн ил тод байдлын чиглэлээр ажилладаг. 2017 онд
          “LEAD Mongolia” хөтөлбөрт хамрагдаад 2018 онд тус хөтөлбөрийн оролцогчдын хамт ЛИЙД төгсөгчдийн холбоо ТББ-г
          байгуулалцсан. Манайх Монгол Улсын өнцөг булан бүрд төр, иргэний нийгэм, хувийн хэвшил гээд төрөл бүрийн
          салбарт ажиллаж амьдардаг 250 орчим гишүүнтэй байгууллага.
        </Typo>
        <Typo variant="body" className="mt-[24px]">
          Зорилго нь ардчиллын үнэт зүйлийг бэхжүүлж, нийгмийн тэгш оролцоог хангахад хувь нэмрээ оруулан, залуусын
          оролцоог дэмжихэд чиглэдэг. Энэ зорилгынхоо хүрээнд төрөл бүрийн төсөл хөтөлбөрүүдийг хэрэгжүүлээд явж байгаа.
        </Typo>
      </div>
    </div>
  )
}
