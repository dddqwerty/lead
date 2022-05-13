import Typo from "components/typography"

type Props = {
    info: string
}

export const List = () => {

    const Items = (props: Props) => {
       return (
           <div className="border-b-2 flex flex-row items-center gap-[15px]"> 
             <div className="rounded-full shrink-0 bg-white border-2 border-primary-main w-2.5 h-2.5"> </div>
             <Typo variant="body"> {props.info} </Typo>
           </div>
       )
    }
    return (
        <div className="grid grid-rows-4 grid-flow-col gap-4"> 
         <Items info="УБ хотоос гадна зохион байгуулах “Ур чадвар бүхий”"/> 
         <Items info="УБ хотоос гадна зохион байгуугдах “Ур чавдар хөгжүүлэх эрчимжүүлсэн семинар“"/> 
         <Items info="Хөтөлбөрийн туршид сургалтанд бүрэн сууж, идэвхтэй оролцох, төслөө, хэрэгжүүлэхдээ бусад оролцогчтой хамтран ажиллах"/> 
         <Items info="Гурван бодлогын сэдвийн хүрээнд үйл ажиллагаа явуулдаг байгуулагуудтай танилцах “ Сэдэвчилсэн” туршлага хуримтлуулах семинарт оролцох"/> 
         <Items info="7 хоногийн сургалтанд оролцох"/> 
         <Items info="Салбартаа танигдсан туршлагатай зөвлөхүүдтэй төсөл хэрэгжүүлэх үе шатанд уулзаж, санал бодлоо солилцох"/> 
         <Items info="Шинэ туршлага хуримтлуулах, шинэ хүмүүстэй танилцах, санал бодлоо солицон ирээдүйд эерэг өөрчлөлт авчрах манлайлагч болох чин хүсэлтэй байх"/> 
        </div>
    )
}

export default List; 