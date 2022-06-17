import Typo from "components/typography";
import { AppWrapper, useAppContext } from "context/cont";
import { useContext, useState } from "react";
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Item from ".";
import { PADDINGX } from "constants/layout";


export const Landpage = () => {

    const { setData, setData1, setData2, setData3, setData4, setProjectType } = useAppContext()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))

    const option = () => {
        setData(true);
        setData1(false);
        setProjectType('')
        setData2(false);
        setData3(false);
        setData4(false);
    }

    const option1 = () => {
        setData(false);
        setData1(true);
        setProjectType('nojob')
        setData2(false);
        setData3(false);
        setData4(false);
    }

    const option2 = () => {
        setData(false);
        setData1(false);
        setProjectType('eco')
        setData2(true);
        setData3(false);
        setData4(false);
    }

    const option3 = () => {
        setData(false);
        setData1(false);
        setData2(false);
        setProjectType('youngA')
        setData3(true);
        setData4(false);
    }

    const option4 = () => {
        setData(false);
        setData1(false);
        setData2(false);
        setData3(false);
        setData4(true);
        setProjectType('money')

    }

    return (
        <div className={`mb-[80px] md:mb-[126px] ${PADDINGX} max-w-leadScreen mx-auto` }>
            <div className="flex flex-col justify-center md:items-center gap-5 ">
                <Typo variant={matches ? "body-mobile" : "h1"} className="font-bold"> Онцлох төслүүд </Typo>
                <Typo className="hidden md:block" variant="body"> Бидний хэрэгжүүлсэн зарим онцлох төслүүд  </Typo>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 md:grid-flow-row gap-4 mt-16">
                <Item title="Бүгд" type="earth" onClick={option} />
                <Item title="Ажилгүйдэл ядуурал" type="bar" onClick={option1} />
                <Item title="Байгаль орчин хотжилт" type="plant" onClick={option2} />
                <Item title="Залуусын Оролцоо" type="avatar" onClick={option3} />
                <Item title="Ил Тод Байдал Авилгал" type="law" onClick={option4} />
            </div>
        </div>

    )
}

export default Landpage; 