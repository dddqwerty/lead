import Typo from 'components/typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Image from 'next/image'

export const Medeethird = ({ datas }) => {
  let itms = datas.items[2]
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-24">
      <div className="flex flex-col gap-[16px]">
        <Image src={itms.img.url} width={376} height={328} />
        <Typo variant="body">{itms.profession}</Typo>
      </div>
      <div className="flex md:w-[751.75px] flex-col">
        <Typo variant={matches ? 'body-mobile' : 'h2'}>{itms.title}</Typo>
        <Typo variant="body" className="mt-[32px]">
          {itms.info.slice(0, 384)}
        </Typo>
        <Typo variant="body" className="mt-[24px]">
          {itms.info.slice(384, 601)}
        </Typo>
      </div>
    </div>
  )
}
