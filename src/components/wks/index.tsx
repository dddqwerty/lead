import CustomButton from "components/button";
import Typo from "components/typography";
import { toUpper } from "lodash";
import { useEffect } from "react";
import { useState } from "react";
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const obj = [
    ['Dulguun', 'chairman', 'Img.svg'],
    ['E. Dulguun', 'Hackerman', 'Img.svg'],
    ['noName', 'Officer', 'Img.svg'],
    ['noName', 'Broker', 'Img.svg'],
    ['noName', 'noType', 'Img.svg'],
    ['noName', 'noType', 'Img.svg'],
    ['noName', 'Racer', 'Img.svg'],
    ['noName', 'Dropping', 'Img.svg'],
    ['noName', 'Bomber', 'Img.svg'],
    ['noName', 'Hmm', 'Img.svg'],
    ['noName', 'Idk', 'Img.svg'],
    ['noName', 'Idek', 'Img.svg'],
];

const obj1 = [
    ['Bryan', 'Manager', 'img1.svg'],
    ['Unknown', 'HackerMan', 'img1.svg'],
    ['noName', 'Officer', 'Img.svg'],
    ['noName', 'Broker', 'Img.svg'],
    ['noName', 'noType', 'Img.svg'],
    ['noName', 'noType', 'Img.svg'],
    ['noName', 'Racer', 'Img.svg'],
    ['noName', 'Dropping', 'Img.svg'],
    ['noName', 'Bomber', 'Img.svg'],
    ['noName', 'Hmm', 'Img.svg'],
    ['noName', 'Idk', 'Img.svg'],
    ['noName', 'Idek', 'Img.svg'],
];

const obj2 = [
    ['Dulguun', 'CHAIRMAN', 'Img.svg'],
    ['Unknown', 'HackerMan', 'Img.svg'],
    ['noName', 'Officer', 'Img.svg'],
    ['noName', 'Broker', 'Img.svg'],
    ['noName', 'noType', 'Img.svg'],
    ['noName', 'noType', 'Img.svg'],
    ['noName', 'Racer', 'Img.svg'],
    ['noName', 'Dropping', 'Img.svg'],
    ['noName', 'Bomber', 'Img.svg'],
    ['noName', 'Hmm', 'Img.svg'],
    ['noName', 'Idk', 'Img.svg'],
    ['noName', 'Idek', 'Img.svg'],
];


export const Workers = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    const [data, setData] = useState<any>(obj);
    const [def, setDef] = useState<boolean>(true);
    const [def1, setDef1] = useState<boolean>(false);
    const [def2, setDef2] = useState<boolean>(false);
    const [toggle, setToggle] = useState<any>(null);

    useEffect(() => {
        console.log(toggle);
    }, [toggle]);

    const option = () => {
        setData(obj);
        setDef(true);
        setDef1(false);
        setDef2(false);
    }

    const option1 = () => {
        setData(obj1);
        setDef(false);
        setDef1(true);
        setDef2(false);
    }

    const option2 = () => {
        setData(obj2);
        setDef(false);
        setDef1(false);
        setDef2(true);
    }
    return (
        <>
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-start w-full">
                <Typo variant={"h3"}> Удирдлагууд </Typo>
                <div className="flex flex-row justify-end w-full">
                    <CustomButton variant="text" classname={def ? `text-white hover:text-white bg-primary-main hover:bg-primary-main border-2` : 'text-black hover:text-white border-2  bg-[#F7F7F7] hover:bg-primary-main'} onClick={option}> 2021-2022 он </CustomButton>
                    <CustomButton variant="text" classname={def1 ? `text-white hover:text-white bg-primary-main hover:bg-primary-main border-2` : 'text-black hover:text-white border-2  bg-[#F7F7F7] hover:bg-primary-main'} onClick={option1}> 2019-2020 он </CustomButton>
                    <CustomButton variant="text" classname={def2 ? `text-white hover:text-white bg-primary-main hover:bg-primary-main border-2` : 'text-black hover:text-white border-2  bg-[#F7F7F7] hover:bg-primary-main'} onClick={option2}> 2018-2019 он </CustomButton>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-none md:grid-rows-2 md:grid-flow-col gap-6 justify-start my-[36px]">
                {data.map((x: any, i: number) => {
                    return <div key={i}>
                        <div className="flex flex-col justify-end w-full bg-gradient-to-t from-gray-700 to-gray-0 hover:cursor-pointer" onMouseEnter={() => setToggle(i)} onMouseLeave={() => setToggle(null)}>
                            <img src={`/static/${x[2]}`} alt="" width={'184px'} height={'284px'} className="hover:mix-blend-overlay" />
                            <div className={`flex flex-col absolute ml-4 pointer-events-none ${toggle == i ? 'visible' : 'hidden'}`}>
                                <div className="flex flex-col bg-primary-main justify-center text-center text-white w-28 h-8 mb-1">
                                    <Typo variant="body-semibold" className="text-sm"> {toUpper(x[1])} </Typo>
                                </div>
                                <Typo variant="h3" className="text-white"> {x[0]} </Typo>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
};

export default Workers;
