import Typo from 'components/typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Image from 'next/image'

export const Medeefirst = ({ datas }) => {
  let newsData = datas.items[0]
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className="flex flex-col gap-8 max-w-leadScreen mx-auto">
      <Typo variant="h3" className="text-primary-dark">
        {' '}
        {newsData.date.slice(0, 10)}{' '}
      </Typo>
      <Typo variant={matches ? 'body-mobile' : 'h2'}> {newsData.title} </Typo>
      <Image src={newsData.img.url} width={1224} height={402} />
      <Typo variant="body">{newsData.info}</Typo>
    </div>
  )
}
