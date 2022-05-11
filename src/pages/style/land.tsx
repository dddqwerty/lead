import Item from "components/landpages"
import Typo from "components/typography"
import { MainLayout } from "layout"
import { useState } from "react"
export default function Gifs() {

    const [data, setData] = useState<boolean>(false);
    const [data1, setData1] = useState<boolean>(false);
    const [data2, setData2] = useState<boolean>(false);
    const [data3, setData3] = useState<boolean>(false);
    const [data4, setData4] = useState<boolean>(false);

    const option = () => {
        setData(true);
        setData1(false);
        setData2(false);
        setData3(false);
        setData4(false);
    }

    const option1 = () => {
        setData(false);
        setData1(true);
        setData2(false);
        setData3(false);
        setData4(false);
    }

    const option2 = () => {
        setData(false);
        setData1(false);
        setData2(true);
        setData3(false);
        setData4(false);
    }

    const option3 = () => {
        setData(false);
        setData1(false);
        setData2(false);
        setData3(true);
        setData4(false);
    }

    const option4 = () => {
        setData(false);
        setData1(false);
        setData2(false);
        setData3(false);
        setData4(true);
    }

    return (
        <MainLayout classname={'mx-auto max-w-leadScreen'}>
            <div className="flex flex-col justify-center items-center gap-5">
                <Typo variant="h1"> Онцох төслүүд </Typo>
                <Typo variant="body"> Бидний хэрэгжүүлсэн зарим онцлох төслүүд  </Typo>
            </div>
            <div className="grid grid-cols-5 grid-flow-row gap-4 mt-16">
                <Item title="Бүгд" type="earth" onClick={option} />
                <Item title="Ажилгүйдэл ядуурал" type="bar" onClick={option1} />
                <Item title="Байгаль орчин хотжилт" type="plant" onClick={option2} />
                <Item title="Залуусын Оролцоо" type="avatar" onClick={option3} />
                <Item title="Ил Тод Байдал Авилгал" type="law" onClick={option4} />
            </div>
        </MainLayout>
    )
}
