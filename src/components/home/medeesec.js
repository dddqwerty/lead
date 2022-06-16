import Typo from 'components/typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export const Medeesecond = ({ datas }) => {
  let itms = datas.items[1]
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className="flex flex-col gap-8">
      <Typo variant={matches ? 'body-mobile' : 'h2'}>{itms.title}</Typo>
      <Typo variant="body">{itms.info.slice(0, 437)}</Typo>
      <Typo variant="body">{itms.info.slice(437, 929)}</Typo>
      <Typo variant="body">{itms.info.slice(929, 1709)}</Typo>
    </div>
  )
}
