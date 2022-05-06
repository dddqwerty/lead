import Typo from "components/typography";
import { ReactElement } from "react";
import Lottie from 'react-lottie'; 
import { FC } from "react";
import animation from '../../../public/static/dollar.json'; 

type Props = {
    option: string,
    gif: any,
}

export const Accompany: FC = (): ReactElement => {

    const Options = (props: Props) => {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: props.gif,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          };
         return (
             <div className="flex flex-row justify-start items-center text-center w-2/3 border rounded-full p-3"> 
                 <Lottie options={defaultOptions} height={40} width={40} /> 
                 <Typo variant="body-semibold"> {props.option} </Typo>
             </div>
         )
    }

     return (
         <div className="flex flex-col w-full justify-center items-center"> 
            <div className="flex flex-col text-center"> 
                <Typo variant="h3"> Lead хэн нэгдэж болох вэ? </Typo>
                <Typo variant="body" className="leading-10"> Хөтөлбөрт шалгарснаар цогц сургалтад хамрагдан манлайлах чадвараа сайжруулахын зэрэгцээ багаар төсөл хэрэгжүүлнэ. </Typo>
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-4"> 
                <Options option="25-47 насны эерэг залуус" gif={animation} />
                <Options option="Нийгэмдээ эерэг өөрчлөлтийг бий болгох" gif={animation} />
                <Options option="Асуудлыг шийдвэрлэх чин эрмэлзэлтэй" gif={animation} />
                <Options option="Монгол Улсад ардчиллыг бэхжүүлэх хүсэлтэй" gif={animation} />
            </div>
         </div>
     )
}

export default Accompany; 