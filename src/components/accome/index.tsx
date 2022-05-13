import Typo from "components/typography";
import { ReactElement } from "react";
import Lottie from 'react-lottie';
import { FC } from "react";
import animation from '../../../public/static/dollar.json';

type Props = {
    option: string,
    gif: any,
    className?: string
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
            <div className={`flex flex-row justify-start items-center text-center w-[338px] max-h-[88px] border rounded-full p-3 ${props.className}`}>
                <Lottie options={defaultOptions} height={40} width={40} />
                <Typo variant="body-semibold"> {props.option} </Typo>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center max-w-[1020px] mx-auto relative">
            <div className="flex flex-col text-center w-[560px]">
                <Typo variant="h3"> Lead хэн нэгдэж болох вэ? </Typo>
                <Typo variant="body" className="leading-10"> Хөтөлбөрт шалгарснаар цогц сургалтад хамрагдан манлайлах чадвараа сайжруулахын зэрэгцээ багаар төсөл хэрэгжүүлнэ. </Typo>
            </div>
            <div className="mt-10 flex-row flex flex-wrap place-content-between">
                <Options option="25-47 насны эерэг залуус" gif={animation} className="-mb-[120px]"/>
                <Options option="Нийгэмдээ эерэг өөрчлөлтийг бий болгох" gif={animation} className="-mb-[120px]"/>
                <img src="/static/perso.svg" className="flex"></img>
                <Options option="Асуудлыг шийдвэрлэх чин эрмэлзэлтэй" gif={animation} className="-mt-[138px]" />
                <Options option="Монгол Улсад ардчиллыг бэхжүүлэх хүсэлтэй" gif={animation} className="-mt-[138px]"/>
            </div>

        </div>
    )
}

export default Accompany; 