import Typo from "components/typography";
import { useEffect } from "react";
import { ReactNode } from "react";
import { useState } from "react";
import { ReactElement } from "react";
import { FC } from "react";

type Props = {
    children: React.ReactNode,
    onClick?: () => void,
    name: string,
}


export const Information: FC = (): ReactElement => {

    const [tailbar , setTailbar] = useState<boolean>(false); 
    const [zorilgo , setZorilgo] = useState<boolean>(false);
    const [zuils , setZuils] = useState<boolean>(false); 
    const [cont , setCont] = useState<boolean>(false); 
    const [read , setRead ] = useState<boolean>(true); 
    const [data , setData] = useState<any>(); 

    const DetailedInfo = (props: Props) => {

        const { onClick , children, name } = props;
        
        const getClass = (props: string) => {
            switch(props) {
                case 'info': return 'p-2 border-b-2 hover:border-l-4 border-primary-main'
            }
        }

        return <div className={`${getClass(name)}`} onClick={onClick}> {children} </div>
    }; 

    const infos = {
        tailbar: {
            title: 'Тайлбар', 
            info: "ЛИЙД Төгсөгчдийн Холбоо (ЛТХ)-ны анхны удирдлагын баг нь 2018-2019 онд 11 гишүүний бүрэлдэхүүнтэй, ТУЗ-ийн даргаар М.Золжаргал (US 2017) сонгогдон ажилласан юм. 2018 оны 7-р сард албан ёсоор төрийн бус байгууллага болон үүсгэн байгуулагдсан цагаас холбооны стратегийн тэргүүлэх чиглэлийг тодорхойлох, байгууллагын бүтэц, соёлыг ул суур...",              
        }, 
        zorilgo: {
            title: 'Зорилго', 
            info: 'Хараахан орж ирээгүй', 
        }, 
        zuils: {
            title: 'Хийсэн зүйлс', 
            info: 'Хараахан орж ирээгүй', 
        }, 
        cont: {
            title: 'Үргэлжлэл бий', 
            info: 'Үргэлжлэлтэй...', 
        }
    }; 

    const getInfos = () => {
        return tailbar ? setData(infos.tailbar) : zorilgo ? setData(infos.zorilgo) : zuils ? setData(infos.zuils) : cont ? setData(infos.cont) : setData({title: 'Тайлбар', info: 'ЛИЙД Төгсөгчдийн Холбоо (ЛТХ)-ны анхны удирдлагын баг нь 2018-2019 онд 11 гишүүний бүрэлдэхүүнтэй, ТУЗ-ийн даргаар М.Золжаргал (US 2017) сонгогдон ажилласан юм. 2018 оны 7-р сард албан ёсоор төрийн бус байгууллага болон үүсгэн байгуулагдсан цагаас холбооны стратегийн тэргүүлэх чиглэлийг тодорхойлох, байгууллагын бүтэц, соёлыг ул суур...'});
    }; 

    const toggleRead = () => {
        setRead(!read);
    };

    const option1 = () => {
        setTailbar(true); 
        setZorilgo(false); 
        setZuils(false); 
        setCont(false); 
    }

    const option2 = () => {
        setTailbar(false); 
        setZorilgo(true); 
        setZuils(false); 
        setCont(false); 
    }

    const option3 = () => {
        setTailbar(false); 
        setZorilgo(false); 
        setZuils(true); 
        setCont(false); 
    }

    const option4 = () => {
        setTailbar(false); 
        setZorilgo(false); 
        setZuils(false); 
        setCont(true); 
    }

    useEffect(() => {
        getInfos(); 
    } , [tailbar , zorilgo , zuils , cont]); 

    

   return (
       <>
       <div className='flex flex-row justify-items-center w-full m-5 p-10'>
       <Typo variant="title1" className="mt-1"> {data && data.title} </Typo>
           <div className="flex flex-col justify-center border-t-2 border-[#0F233E] border-opacity-10 w-[40%] m-3.5 p-2"> 
           <Typo variant="body" className="leading-7 mt-5"> {data && data.info && read ? data.info.slice(0 , 190) : data && data.info ? data.info : 'ret'} <Typo variant="body" className="flex flex-row text-primary-main cursor-pointer" onClick={toggleRead}> {read ? 'Дэлгэрэнгүй' : 'Буцаах'} <img src="/static/arrow.png" alt="" className="w-6 h-6 mt-1"/> </Typo> </Typo> 
           </div>
           <div className="flex flex-col w-72 h-2/4 bg-[#F7F7F7]">
           <DetailedInfo name="info" onClick={option1}> <Typo variant="body" className="pointer-events-none"> Тайлбар </Typo> </DetailedInfo>
           <DetailedInfo name='info' onClick={option2}> <Typo variant="body" className="pointer-events-none"> Зорилго </Typo> </DetailedInfo>
           <DetailedInfo name="info" onClick={option3}> <Typo variant="body" className="pointer-events-none"> Хийсэн зүйлс </Typo> </DetailedInfo>
           <DetailedInfo name="info" onClick={option4}> <Typo variant="body" className="pointer-events-none"> Үргэлжлэл бий </Typo> </DetailedInfo>
           </div>
        </div>
        </>
   )
}

export default Information; 