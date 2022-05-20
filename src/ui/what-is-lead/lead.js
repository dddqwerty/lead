import { Typography } from 'components'
import { handleIcon } from 'utils'

export const Lead = () => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-[64px] mt-[231px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col">
            <img src="/static/lead-Vector-logo.svg" className="max-w-[115px]" />
            <Typography className="text-primary-main" variant="h1">
              ХӨТӨЛБӨР
            </Typography>
          </div>
          <div>
            <Typography className="md:w-[496px] lg:w-[496px]" variant="body">
              LEAD Mongolia хөтөлбөр нь төрийн болон төрийн бус байгууллага, хувийн хэвшил зэрэг төрөл бүрийн салбарын
              шинэ залуу манлайлагчдыг нэгтгэн, нийгэмд тулгамдаж буй асуудалд гарц шийдэл олох зорилготой.{' '}
            </Typography>
          </div>
        </div>

        <div className="flex gap-20">
          <div className="flex items-center gap-3">
            <div className="h-[56px] w-[56px] text-blue bg-grey flex justify-center items-center rounded-full">
              {handleIcon({
                icon: 'facebook',
                size: '32',
              })}
            </div>
            <div className="flex flex-col gap-1">
              <Typography variant="body" className="text-text-grey">
                Бидэнтэй холбогдох
              </Typography>
              <Typography className="underline" variant="Button / Link">
                Фэйсбүүд-рүү үсрэх
              </Typography>
            </div>
          </div>
          <div className="flex-col flex gap-1">
            <Typography className="text-base font-semibold text-text-grey1">ГИШҮҮД:</Typography>
            <Typography variant="body-bold">247</Typography>
          </div>
        </div>
      </div>
      <div className="hidden md:block lg:block relative w-[690px]">
        <div className="w-[93px] h-[93px] absolute top-[132px] left-[302px] rounded-full bg-bgGrey z-10">
          <img src="/static/burged.png" />
        </div>
        <div className="w-[93px] h-[93px] absolute top-[132px] left-[548px] rounded-full bg-bgGrey z-10">
          <img src="/static/burged.png" />
        </div>
        <div className="w-[93px] h-[93px] absolute top-[232px] left-[148px] rounded-full bg-bgGrey z-10">
          <img src="/static/burged.png" />
        </div>
        <div className="w-[93px] h-[93px] absolute top-[282px] left-[718px] rounded-full bg-bgGrey z-10">
          <img src="/static/burged.png" />
        </div>
        <div className="w-[93px] h-[93px] absolute top-[242px] left-[418px] rounded-full bg-bgGrey z-10">
          <img src="/static/burged.png" />
        </div>
        <div className="w-[93px] h-[93px] absolute top-[532px] left-[98px] rounded-full bg-bgGrey z-10">
          <img src="/static/burged.png" />
        </div>
        <div className="w-[93px] h-[93px] absolute top-[532px] left-[768px] rounded-full bg-bgGrey z-10">
          <img src="/static/burged.png" />
        </div>
        <div className="w-[93px] h-[93px] absolute top-[382px] left-[233px] rounded-full bg-bgGrey z-10">
          <img src="/static/burged.png" />
        </div>
        <div className="w-[93px] h-[93px] absolute top-[332px] left-[608px] rounded-full bg-bgGrey z-10">
          <img src="/static/burged.png" />
        </div>
        <div className="w-[93px] h-[93px] absolute top-[532px] left-[608px] rounded-full bg-bgGrey z-10">
          <img src="/static/burged.png" />
        </div>
        <div className="w-[93px] h-[93px] absolute top-[612px] left-[328px] rounded-full bg-bgGrey z-10">
          <img src="/static/burged.png" />
        </div>
        <div className="w-[93px] h-[93px] absolute top-[732px] left-[248px] rounded-full bg-bgGrey z-10">
          <img src="/static/burged.png" />
        </div>
        <div className="w-[93px] h-[93px] absolute top-[752px] left-[568px] rounded-full bg-bgGrey z-10">
          <img src="/static/burged.png" />
        </div>
        <div className="absolute -right-36 top-32">
          <img src="/static/members.svg" />
        </div>
      </div>
    </div>
  )
}

export default Lead
