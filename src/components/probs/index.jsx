import Typo from 'components/typography'
import { MainLayout } from 'layout'
import Lottie from 'react-lottie'
import star from '../../../public/static/stars.json'
import cons from '../../../public/static/consult.json'
import demand from '../../../public/static/demand.json'
import pencil from '../../../public/static/pencil.json'
import bethlem from '../../../public/static/bethlehem.json'

export const Prob = () => {
  const getGifs = (props) => {
    switch (props) {
      case 'star':
        return star
      case 'consult':
        return cons
      case 'dem':
        return demand
      case 'pencil':
        return pencil
      case 'beth':
        return bethlem
    }
  }

  const PrbComp = (props) => {
    const { gif, info } = props

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: getGifs(gif),
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }

    return (
      <div className="flex flex-row justify-start items-center w-full gap-6">
        <div className="flex shrink-0 items-center justify-center rounded-full bg-[#F5FAFF] w-[120px] h-[120px]">
          <Lottie options={defaultOptions} width={64} height={64} />
        </div>
        <Typo variant="body-semibold"> {info} </Typo>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-14">
      <PrbComp gif="star" info="Ижил хүсэл эрмэлзэл бүхий залуустай танилцах, тэднээс суралцах, хамтарч ажиллах" />
      <PrbComp gif="dem" info="Иргэдийн оролцоотой хэрхэн шийдвэрлэх талаар мэдлэг чадвартай болох юм" />
      <PrbComp gif="beth" info="Эх орондоо сайн сайхан ирээдүйг цогцлооход гар бие оролцох" />
      <PrbComp gif="consult" info="Салбартаа арвин туршлагатай ментор буюу зөвлөхүүдээс суралцах, зөвлөгөө авах" />
      <PrbComp
        gif="pencil"
        info="Нийгэмд эерэг өөрчлөлт авчрах төсөл дээр сурч авсан шинэ мэдлэг чадвараа практик дээр ашиглах"
      />
    </div>
  )
}

export default Prob
