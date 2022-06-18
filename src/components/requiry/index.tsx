import Typo from "components/typography"

type Props = {
    numbers: string
    info: string
}

export const Requirements = () => {

    const Items = (props: Props) => {
        return (
            <>
                <div className="flex flex-row gap-6">
                    <div className="flex flex-col justify-start items-center">
                        <Typo variant="h2"> {props.numbers} </Typo>
                        <div className="bg-primary-main w-4 h-1"></div>
                    </div>
                    <Typo className="mt-2" variant="body"> {props.info} </Typo>
                </div>
            </>
        )
    }
    return (
        <div className="flex flex-col gap-10 bg-[#F5FAFF] pt-[96px] pb-[120px] mt-[160px] mb-[141px]">
            <div className="mx-auto max-w-leadScreen">
                <div>
                    <Typo variant="h3"> Шаардлага </Typo>
                </div>
                <div className="flex flex-row gap-10">
                    <Items numbers="01" info="LEAD Mongolia хөтөлбөрийн зорилго, хамрах сэдэвтэй холбоотой 5 болон түүнээс дээш жилийн ажлын туршлагатай." />
                    <Items numbers="02" info="Хөтөлбөрийн туршид зохион байгуулах сургалт болон арга хэмжээний үеэр олж авсан мэдлэг туршлагад үндэслэн нийгэмд эерэг өөрчлөлт авчрах." />
                    <Items numbers="03" info="Бодлогын түвшинд нөлөөлөх төсөл боловсруулж, хэрэгжүүлэх чадвартай байх шаардлага тавина." />
                </div>
            </div>
        </div>
    )
}

export default Requirements; 