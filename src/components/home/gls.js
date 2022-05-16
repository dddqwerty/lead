import Typo from 'components/typography'
import { Goal } from 'components'

export const Goalies = () => {
  return (
    <div className="mb-[113px] mt-[88px]">
      <Typo variant="h3" className="">
        {' '}
        Эрхэм зорилго{' '}
      </Typo>
      <div className="grid grid-cols-3 grid-flow-row">
        <Goal gif="book" info="Шинэ үеийн манлайлагч залуучууд харилцан бие биенээсээ суралцах." classname="pr-12" />
        <Goal gif="reuse" info="Монголын нийгэмд эерэг өөрчлөлтийг авчрах." classname="px-12" />
        <Goal
          gif="stack"
          info="Ардчиллын үнэт зүйлийг бэхжүүлэх, тэгш оролцоог хангахад оролцох."
          classname="pl-12"
          last={true}
        />
      </div>
    </div>
  )
}

export default Goalies
