import { GirdPic } from 'components/hoverpic/index'
import { useAppContext } from 'context/cont'
import { PADDINGX } from 'constants/layout'

export const GridMain = ({ datas }) => {
  const { projectType } = useAppContext()

  const Select = () => {
    if (projectType === '') {
      return datas.items.map((x, i) => {
        if (i > 4) {
          return
        }
        return (
          <GirdPic
            key={i}
            text={x.title}
            subText={x.subTxt}
            img={x.media.url}
            type={x.prjType}
            link={`/projects/${x.id}`}
          />
        )
      })
    } else {
      return datas.items
        .filter((comp) => comp?.prjType === projectType)
        .map((x, i) => {
          return (
            <GirdPic
              key={i}
              text={x.title}
              subText={x.subTxt}
              img={x.media.url}
              type={x.prjType}
              link={`/projects/${x.id}`}
            />
          )
        })
    }
  }
  return (
    <div className={`flex flex-col mx-auto max-w-[1592px] mb-[68.75px] ${PADDINGX}`}>
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-y-9 relative`}>{<Select />}</div>
      <div></div>
    </div>
  )
}

export default GridMain
