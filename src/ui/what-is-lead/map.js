import { Typography } from '@mui/material'

export const Map = () => {
  return (
    <div className="mt-[212px] h-[695px] ">
      <div className="relative justify-center flex">
        <div className="absolute top-[335px] left-1/2 z-10">
          <div className="flex flex-col gap-[24px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center absolute">
            <div className="flex justify-center">
              <Typography variant="" className="font-[700] text-[24px] leading-[27.84px] font-[Montserrat]">
                Бидний нэг болсоноор
              </Typography>
            </div>
            <div className="text-center w-[880px]">
              <Typography variant="body">
                LEAD Mongolia хөтөлбөр нь оролцогч нартаа манлайлах чадвараа сайжруулах, Монголын өнцөг булан бүрээс
                ирсэн ижил зорилготой манлайлагч залуустай танилцах, харилцан суралцах, нөлөөллийн ажил хийх, иргэний
                оролцоог нэмэгдүүлэх, нийгэмд тулгамдаад буй асуудлуудыг шийдвэрлэх төсөл дээр ажиллах зэрэг олон
                боломжийг олгоно.
              </Typography>
            </div>
          </div>
        </div>
        <div className="absolute -left-[100px] max-w-[1442px]">
          <img src="static/map.svg" />
        </div>
      </div>
    </div>
  )
}

export default Map
