import { Typography } from 'components'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export const Support = ({ className }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className={`mt-[100px] max-w-leadScreen mx-auto ${className}`}>
      <Typography
        variant={matches ? 'body-mobile' : 'h1'}
        className="flex justify-center text-left md:text-center text-[#0F233E]"
      >
        Биднийг дэмжигч, хамтрагч байгууллагууд
      </Typography>

      <div className="mt-7 flex flex-col items-center">
        <Typography variant="body" className="text-[#0F233E] text-center md:w-[488px]">
          Бид ардчилал, хүний эрх, залуусын оролцоог дэмжигч дотоод, гадаадын байгууллагуудтай идэвхитэй хамтран
          ажилладаг
        </Typography>
        <div className="flex justify-center gap-y-10 items-center md:items-start flex-col md:flex-row md:space-x-[150px] mt-[83px] mb-[170px]">
          <img src="/static/IRI.svg" className="w-[240px] h-[195px]  " />
          <img src="/static/wole.svg" className="w-[300px] h-[196px]  " />
          <img src="/static/usaid.svg" className="w-[300px] h-[193px]  " />
        </div>
      </div>
    </div>
  )
}

export default Support
