import Typo from "components/typography"

type Props = {
    info: string
}

export const List = () => {

    const Items = (props: Props) => {
        return (
            <div className="flex flex-row items-center gap-[15px]">
                <div className="rounded-full shrink-0 bg-white border-2 border-primary-main w-2.5 h-2.5"> </div>
                <Typo variant="body"> {props.info} </Typo>
            </div>
        )
    }
    return (
        <div className="flex flex-col max-w-leadScreen gap-[104px] mb-[150px] mx-auto">
            <div className="flex justify-center">
                <div className="max-w-[808px] text-center flex flex-col gap-6">
                    <Typo variant="h3">Хөтөлбөрийн оролцогчид юуг анхаарвал зохих вэ?</Typo>
                    <Typo variant="body">LEAD Mongolia хөтөлбөр эерэг өөрчлөлт авчрах чин эмээлэлтэй манлайлагчдыг дэмжиж зорилготой. Хөтөлбөр та дараах үүрэг хүлээхийг анхаарна уу</Typo>
                </div>
            </div>
            <div className="flex gap-12">
                <div className="flex flex-col gap-12 max-w-[576px]">
                    <Items info="УБ хотоос гадна зохион байгуулах “Ур чадвар бүхий”" />
                    <div className="h-[1px] w-[576px] bg-[#e6e6e6]" />
                    <Items info="УБ хотоос гадна зохион байгуугдах “Ур чавдар хөгжүүлэх эрчимжүүлсэн семинар“" />
                    <div className="h-[1px] w-[567px] bg-[#e6e6e6]" />
                    <Items info="Хөтөлбөрийн туршид сургалтанд бүрэн сууж, идэвхтэй оролцох, төслөө, хэрэгжүүлэхдээ бусад оролцогчтой хамтран ажиллах" />
                    <div className="h-[1px] w-[567px] bg-[#e6e6e6]" />
                    <Items info="Гурван бодлогын сэдвийн хүрээнд үйл ажиллагаа явуулдаг байгуулагуудтай танилцах “ Сэдэвчилсэн” туршлага хуримтлуулах семинарт оролцох" />
                </div>
                <div className="flex flex-col gap-12 max-w-[576px]">
                    <Items info="7 хоногийн сургалтанд оролцох" />
                    <div className="h-[1px] w-[576px] bg-[#e6e6e6]" />
                    <Items info="Салбартаа танигдсан туршлагатай зөвлөхүүдтэй төсөл хэрэгжүүлэх үе шатанд уулзаж, санал бодлоо солилцох" />
                    <div className="h-[1px] w-[576px] bg-[#e6e6e6]" />
                    <Items info="Шинэ туршлага хуримтлуулах, шинэ хүмүүстэй танилцах, санал бодлоо солицон ирээдүйд эерэг өөрчлөлт авчрах манлайлагч болох чин хүсэлтэй байх" />
                </div>
            </div>
        </div>
    )
}

export default List; 