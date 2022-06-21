import { Typography } from 'components'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export const TextBox = (props) => {
  const { number, txt } = props
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div className="flex flex-col justify-center items-center md:gap-[16px]">
      <div className="text-primary-main">
        <Typography variant={matches ? 'h3' : 'h1'} className="leading-[58px] font-[48px] font-bold">
          {number}
        </Typography>
      </div>
      <Typography variant={matches ? 'mobile' : 'h3'} className="text-[#0F233E]">
        {txt}
      </Typography>
    </div>
  )
}

export default TextBox
