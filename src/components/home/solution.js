import Support from 'components/oursup'
import Typo from 'components/typography'
import { PADDINGX } from 'constants/layout'
import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { saveAs } from 'file-saver'

export const Shiid = (props) => {
  const { posistion } = props
  const [read, setRead] = useState(true)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const toggleRead = () => {
    setRead(!read)
  }

  const saveFile = () => {
    saveAs(
      'http://www.leadalumni.org/TAAP/TAAP_Toolkit_and_Guide_for_Inclusive_Development_Mongolian.pdf',
      'example.pdf',
    )
  }

  return (
    <div className={`mx-auto max-w-leadScreen grid ${PADDINGX}`}>
      <div className="mt-[129px]" />
      <div className="grid grid-flow-col gap-[150px] ">
        <div>
          <Typo variant={matches ? 'body-mobile' : 'h1'} className="text-[#0F233E]">
            ШИЙДЭХ, ОРОЛЦОХ,
          </Typo>
          <Typo variant={matches ? 'body-mobile' : 'h1'} className="text-[#0F233E]">
            МЭДЭЛЖИХ ҮЙЛЭЭ
          </Typo>
          <Typo variant={matches ? 'body-mobile' : 'h1'} className="text-[#0F233E]">
            ӨӨРЧЛӨХ НЬ
          </Typo>
          <Typo variant="body" className="text-[#0F233E] mt-[20px] md:mt-[40px]">
            Тэгш хамарсан хөгжлийн арга хэрэгсэл, заавар
          </Typo>

          <div className="flex items-center mt-[48px] md:mt-[96px]" onClick={saveFile}>
            <div className="relative bg-slate-200 w-14 h-14 rounded-full hover:cursor-pointer">
              <img src="/static/Group.svg" className="absolute left-[20px] top-[16px]" />
            </div>
            <Typo variant="body-semibold" className="ml-5 hover:cursor-pointer text-[#404040]">
              Шийд арга хэрэгслийг татах
            </Typo>
          </div>
        </div>

        <div className="relative hidden md:block w-[407px] h-[405px]">
          <div className="w-[407px] h-[405px]">
            <img src="/static/shiid1.webp" />
          </div>
          <div className="absolute left-[100px] top-[170px] z-10">
            <Typo variant="h1" className="text-white -tracking-[8.5%]">
              ШИЙД
            </Typo>
          </div>
          <div className="absolute left-[209px] top-[220px] z-10">
            <Typo variant="h2" className="text-primary-main -tracking-[8.5%]">
              ШИЙД
            </Typo>
          </div>
        </div>
      </div>

      <div
        className={`${
          posistion === 'right' ? 'flex flex-row-reverse' : 'flex'
        } max-w-1200px mx-auto mt-[48px] md:mt-[207px] `}
      >
        <div className={`${posistion === 'right' ? 'mr-[72px] ' : 'ml-[0px] '}`}>
          <div className="flex-col grid gap-y-6 justify-start  ">
            <Typo variant="title1" className="font-semibold">
              ШИЙД ТЭГШ ХАМАРСАН ХӨГЖЛИЙН АРГА ХЭРЭГСЭЛ, ЗААВАР
            </Typo>
            <Typo>
              Илүү амар амгалан, зүй ёст ертөнцийг бий болгохын тулд хөгжлийн төсөл бүр бүх хүнийг татан оролцуулах
              ёстой. Ийнхүү зорих үед зарим хүн хойно үлдсэн байх нь бий. Хүн нэг бүрийг тэгш хамруулж байгааг бид
              хэрхэн баталгаажуулах вэ? ШИЙД арга хэрэгсэл танд төсөл удирдах мөчлөгийн аливаа үе шатанд нийгэмд тэгш
              хамрахуйг бэхжүүлэх замаар туслах болно.
            </Typo>
            <Typo>
              Илүү амар амгалан, зүй ёст ертөнцийг бий болгохын тулд хөгжлийн төсөл бүр бүх хүнийг татан оролцуулах
              ёстой. Ийнхүү зорих үед зарим хүн хойно үлдсэн байх нь бий. Хүн нэг бүрийг тэгш хамруулж байгааг бид
              хэрхэн баталгаажуулах вэ? ШИЙД арга хэрэгсэл танд төсөл удирдах мөчлөгийн аливаа үе шатанд нийгэмд тэгш
              хамрахуйг бэхжүүлэх замаар туслах болно.
            </Typo>
          </div>
          <span>
            <Typo variant="body" className="flex text-primary-main cursor-pointer " onClick={toggleRead}>
              {' '}
              {read ? 'Дэлгэрэнгүй' : 'Буцаах'} <img src="/static/arrow.svg" alt="" className="w-6 h-6 mt-1" />{' '}
            </Typo>
          </span>
        </div>
      </div>
      <Support />
    </div>
  )
}
export default Shiid
