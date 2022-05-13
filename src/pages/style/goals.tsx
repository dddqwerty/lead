import Goal from "components/goals";
import Typo from "components/typography";
import { MainLayout } from "layout";

export default function Test() {
    return (
        <MainLayout classname={"mx-auto max-w-leadScreen"}>
            <Typo variant="h3" className="mb-5"> Эрхэм зорилго </Typo>
            <div className="grid grid-cols-3 grid-flow-row">
                <Goal gif="book" info="Шинэ үеийн манлайлагч залуучууд харилцан бие биенээсээ суралцах." classname="pr-12" />
                <Goal gif="reuse" info="Монголын нийгэмд эерэг өөрчлөлтийг авчрах." classname="px-12" />
                <Goal gif="stack" info="Ардчиллын үнэт зүйлийг бэхжүүлэх, тэгш оролцоог хангахад оролцох." classname="pl-12" last={true} />
            </div>
        </MainLayout>
    )
}