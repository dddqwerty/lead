import Typo from 'components/typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Image from 'next/image'

export const Medeefourth = ({ datas }) => {
  let itms = datas.items[3]
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className="flex flex-col">
      <Typo variant={matches ? 'body-mobile' : 'h2'}>{itms.title}</Typo>
      <Typo variant="body" className="mt-[32px]">
        {itms.info.slice(0, 437)}
      </Typo>
      <Typo variant="body" className="mt-[24px]">
        {itms.info.slice(437, 927)}
      </Typo>
      <Image src={itms.img.url} className="mt-[32px]" width={1224} height={402} />
    </div>
  )
}
