import Typo from "components/typography";
import { ReactElement } from "react";
import Lottie from 'react-lottie';
import { FC } from "react";
import animation from '../../../public/static/dollar.json';
type Props = {
    name?: string,
}

export const Accompany: FC = (): ReactElement => {

    const Option = (props: Props) => {
        return (
            <div className="flex border-[#e6e6e6] border-solid border h-[100px] w-[350px] items-center rounded-[100px] shadow-[0px_4px_28px_rgba(9, 44, 76, 0.05)]">
                <div className="ml-8 pr-4"><Lottie height={40} width={40} options={defaultOptions} /></div>
                <Typo variant="body-semibold">{props.name}</Typo>
            </div>
        )
    }
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <div className="flex flex-col items-center max-w-[1038px] mx-auto gap-20" >
            <div className="flex flex-col text-center w-[560px] gap-6">
                <Typo variant="h3"> Lead хэн нэгдэж болох вэ? </Typo>
                <Typo variant="body" className="leading-[27px]"> Хөтөлбөрт шалгарснаар цогц сургалтад хамрагдан манлайлах чадвараа сайжруулахын зэрэгцээ багаар төсөл хэрэгжүүлнэ. </Typo>
            </div>
            <div className="flex flex-row relative">
                <div className="flex gap-[350px]">
                    <div className="flex flex-col gap-[104px]">
                        <Option name="25-47 насны эерэг залуус" />
                        <Option name="Нийгэмдээ эерэг өөрчлөлтийг бий болгох" />
                    </div>
                    <div className="flex flex-col gap-[104px]">
                        <Option name="Асуудлыг шийдвэрлэх чин эрмэлзэлтэй" />
                        <Option name="Монгол Улсад ардчиллыг бэхжүүлэх хүсэлтэй" />
                    </div>
                </div>
                <div className="absolute">
                    <img src="/static/perso.svg"></img>
                </div>
            </div>

        </div >
    )
}

export default Accompany; 