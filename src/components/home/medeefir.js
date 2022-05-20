import Typo from 'components/typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export const Medeefirst = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className="flex flex-col gap-8">
      <Typo className="text-primary-dark">28 Jun 21</Typo>
      <Typo variant={matches ? 'body-mobile' : 'h2'}>Сонгуулийн ирцийн мэдээ ба технологийн шийдэл.</Typo>
      <img src="/static/medee.svg" />
      <Typo variant="body">
        Монгол Улсын Ерөнхийлөгчийн 2021 оны ээлжит сонгуулийн ирцийн мэдээг цаг тутам, 12 насны ангиллаар олон нийтэд
        нээлттэй, ойлгомжтой, ил тод мэдээлэхээр Сонгуулийн ерөнхий хороо, Улсын бүртгэлийн ерөнхий газрын хамтарсан
        ажлын хэсэг ажиллаж байна. Ирцийн мэдээг анх удаа технологийн тусламжтайгаар бүрдүүлж, мэдээлэх тус ажилд ЛИЙД
        төгсөгчдийн холбоо ТББ хамтран ажиллаж байгаа юм. Энэхүү ажлыг хамтран хэрэгжүүлж буй байгууллагуудын төлөөллөөс
        тодруулга авснаа хүргэж байна.
      </Typo>
    </div>
  )
}
