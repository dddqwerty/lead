import CustomButton from "components/button";
import Typo from "components/typography";
import { toUpper } from "lodash";
import { useState } from "react";
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Image from "next/image";

export const Workers = ({wks19 , wks20 , wks22}) => {
    const workers19 =  wks19.items.filter((value: any) => Object.keys(value).length !== 0);
    const workers20 =  wks20.items.filter((value: any) => Object.keys(value).length !== 0);
    const workers22 = wks22.items.filter((value: any) => Object.keys(value).length !== 0); 
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    const [data, setData] = useState<any>(workers22);
    const [def, setDef] = useState<boolean>(true);
    const [def1, setDef1] = useState<boolean>(false);
    const [def2, setDef2] = useState<boolean>(false);
    const [toggle, setToggle] = useState<any>(null);

    const option = () => {
        setData(workers22);
        setDef(true);
        setDef1(false);
        setDef2(false);
    }

    const option1 = () => {
        setData(workers20);
        setDef(false);
        setDef1(true);
        setDef2(false);
    }

    const option2 = () => {
        setData(workers19);
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
                            <Image src={x.image.url} alt="" width={184} height={256} className="hover:mix-blend-overlay" />
                            <div className={`flex flex-col absolute ml-4 pointer-events-none ${toggle == i ? 'visible' : 'hidden'}`}>
                                <div className="flex flex-col bg-primary-main justify-center text-center text-white w-28 h-8 mb-1">
                                    <Typo variant="body-semibold" className="text-sm"> {toUpper(x.type)} </Typo>
                                </div>
                                <Typo variant="h3" className="text-white"> {x.name} </Typo>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
};

export default Workers;
