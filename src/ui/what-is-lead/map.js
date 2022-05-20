import { Typography } from '@mui/material'

export const Map = () => {
  return (
    <div className="mt-[100px] md:mt-[212px] md:h-[695px] ">
      <div className="relative justify-center flex">
        <div className="md:absolute md:top-[335px] md:left-1/2 md:z-10">
          <div className="flex flex-col gap-[24px] md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 justify-center md:absolute">
            <div className="flex justify-center">
              <Typography variant="" className="font-[700] text-[24px] leading-[27.84px] font-[Montserrat]">
                Бидний нэг болсоноор
              </Typography>
            </div>
            <div className="text-center md:w-[880px]">
              <Typography variant="body">
                LEAD Mongolia хөтөлбөр нь оролцогч нартаа манлайлах чадвараа сайжруулах, Монголын өнцөг булан бүрээс
                ирсэн ижил зорилготой манлайлагч залуустай танилцах, харилцан суралцах, нөлөөллийн ажил хийх, иргэний
                оролцоог нэмэгдүүлэх, нийгэмд тулгамдаад буй асуудлуудыг шийдвэрлэх төсөл дээр ажиллах зэрэг олон
                боломжийг олгоно.
              </Typography>
            </div>
          </div>
        </div>
        <div className="absolute hidden md:block -left-[100px] max-w-[1442px]">
          <img src="/static/map.svg" className=" max-w-[125%]" />
        </div>
      </div>
    </div>
  )
}

export default Map
