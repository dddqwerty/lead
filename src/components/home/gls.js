import Typo from 'components/typography'
import { Goal } from 'components'

export const Goalies = () => {
  return (
    <div className="mb-[113px] gap-[44px] flex flex-col mt-[88px]">
      <Typo variant="h3" className="">
        Эрхэм зорилго
      </Typo>
      <div className="grid grid-cols-1 gap-[20px] md:gap-0 md:grid-cols-3 grid-flow-row">
        <Goal gif="book" info="Шинэ үеийн манлайлагч залуучууд харилцан бие биенээсээ суралцах." classname="md:pr-12" />
        <Goal gif="reuse" info="Монголын нийгэмд эерэг өөрчлөлтийг авчрах." classname="md:px-12" />
        <Goal
          gif="stack"
          info="Ардчиллын үнэт зүйлийг бэхжүүлэх, тэгш оролцоог хангахад оролцох."
          classname="md:pl-12"
          last={true}
        />
      </div>
    </div>
  )
}

export default Goalies
