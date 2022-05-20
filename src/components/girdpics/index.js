import { GirdPic } from 'components/hoverpic/index'
import { useAppContext } from 'context/cont'

export const GridMain = () => {
  const { projectType } = useAppContext()

  const types = [
    <GirdPic img="/static/gird1.webp" key={0} text="Сонгуулийн дата хакатон" subText="Залуусын оролцоо" type="nojob" />,
    <GirdPic img="/static/gird1.webp" key={2} text="Сонгуулийн дата хакатон" subText="Залуусын оролцоо" type="nojob" />,
    <GirdPic img="/static/gird2.webp" key={3} text="LEAD Alumni Association" type="eco" />,
    <GirdPic img="/static/gird1.webp" key={4} text="Сонгуулийн дата хакатон" subText="Залуусын оролцоо" type="nojob" />,
    <GirdPic img="/static/gird2.webp" key={5} text="LEAD Alumni Association" type="eco" />,
    <GirdPic img="/static/gird2.webp" key={6} text="LEAD Alumni Association" type="eco" />,
    <GirdPic
      img="/static/gird3.webp"
      key={7}
      text="“Хэрэглэе, Хэмнэе, Хамгаалъя” төсөл"
      subText="Залуусын оролцоо"
      type="youngA"
    />,
    <GirdPic img="/static/gird2.webp" key={8} text="LEAD Alumni Association" type="eco" />,
    <GirdPic
      img="/static/gird3.webp"
      key={8}
      text="“Хэрэглэе, Хэмнэе, Хамгаалъя” төсөл"
      subText="Залуусын оролцоо"
      type="youngA"
    />,
    <GirdPic
      img="/static/gird3.webp"
      key={9}
      text="“Хэрэглэе, Хэмнэе, Хамгаалъя” төсөл"
      subText="Залуусын оролцоо"
      type="youngA"
    />,
    <GirdPic
      img="/static/gird1.webp"
      key={10}
      text="Сонгуулийн дата хакатон"
      subText="Залуусын оролцоо"
      type="nojob"
    />,
    <GirdPic
      img="/static/gird3.webp"
      key={11}
      text="“Хэрэглэе, Хэмнэе, Хамгаалъя” төсөл"
      subText="Залуусын оролцоо"
      type="youngA"
    />,
    <GirdPic
      img="/static/gird4.webp"
      key={12}
      text="“Гэртээ гэрэл асаая” төсөл"
      subText="ил тод байдал, авилгал"
      type="money"
    />,
    <GirdPic
      img="/static/gird4.webp"
      key={13}
      text="“Гэртээ гэрэл асаая” төсөл"
      subText="ил тод байдал, авилгал"
      type="money"
    />,
    <GirdPic
      img="/static/gird1.webp"
      key={14}
      text="Сонгуулийн дата хакатон"
      subText="Залуусын оролцоо"
      type="nojob"
    />,
    <GirdPic
      img="/static/gird4.webp"
      key={15}
      text="“Гэртээ гэрэл асаая” төсөл"
      subText="ил тод байдал, авилгал"
      type="money"
    />,
  ]
  const Select = () => {
    if (projectType === '') {
      return types.map((inedx, i) => {
        return <div key={i}>{inedx}</div>
      })
    } else {
      return types
        .filter((comp) => comp?.props?.type === projectType)
        .map((index, i) => {
          console.log(index)
          return <div key={i}>{index}</div>
        })
    }
  }
  return (
    <div className="flex flex-col mx-auto max-w-[1592px] mb-[128.75px]">
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-y-9 relative`}>{<Select />}</div>

      <div>
        {/* <div
          className={`${link === 'projects' ? 'grid' : 'hidden '} mt-9  grid-cols-2 md:grid-cols-4 gap-6 md:gap-y-9 relative `}
        >
          <GirdPic img='/static/gird1.webp' text='Сонгуулийн дата хакатон' subText='Залуусын оролцоо' type='' />
          <GirdPic img='/static/gird2.webp' text='LEAD Alumni Association' type='nojob' />
          <GirdPic img='/static/gird3.webp' text='“Хэрэглэе, Хэмнэе, Хамгаалъя” төсөл' subText='Залуусын оролцоо' type='youngA' />
          <GirdPic img='/static/gird4.webp' text='“Гэртээ гэрэл асаая” төсөл' subText='ил тод байдал, авилгал' type='money' />

        </div> */}
      </div>
    </div>
  )
}

export default GridMain
