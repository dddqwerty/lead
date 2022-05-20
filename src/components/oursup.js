import { Typography } from 'components'

export const Support = () => {
  return (
    <div className="mt-[100px] ">
      <Typography variant="h1" className="text-[#0F233E] flex justify-center">
        Биднийг дэмжигч,
      </Typography>
      <Typography variant="h1" className="text-[#0F233E] flex justify-center">
        хамтрагч байгууллагууд
      </Typography>
      <div className="mt-7 ">
        <Typography variant="body" className="text-[#0F233E] flex justify-center">
          Бид ардчилал, хүний эрх, залуусын оролцоог дэмжигч
        </Typography>
        <Typography variant="body" className="text-[#0F233E] flex justify-center">
          дотоод, гадаадын байгууллагуудтай идэвхитэй хамтран
        </Typography>
        <Typography variant="body" className="text-[#0F233E] flex justify-center ">
          ажилладаг
        </Typography>
        <div className="flex justify-center flex-row space-x-[150px] mt-[83px] mb-[170px]">
          <img src="/static/IRI.svg" className="w-[240px] h-[195px]  " />
          <img src="/static/wole.svg" className="w-[300px] h-[196px]  " />
          <img src="/static/usaid.svg" className="w-[300px] h-[193px]  " />
        </div>
      </div>
    </div>
  )
}

export default Support
