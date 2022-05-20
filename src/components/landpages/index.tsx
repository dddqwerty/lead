import { useEffect, useRef, useState, FC, ReactElement } from 'react';
import type { LottiePlayer } from 'lottie-web';
import Typo from 'components/typography';

type Props = {
    logo?: string
    classname?: string
}

type Items = {
    title: string
    onClick?: () => void
    type: string
}

export const Animation: FC<Props> = ({ logo, classname }): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);
    const [lottie, setLottie] = useState<LottiePlayer | null>(null);

    useEffect(() => {
        import('lottie-web').then((Lottie) => setLottie(Lottie.default));
    }, []);
    useEffect(() => {
        if (lottie && ref.current) {
            const animation = lottie.loadAnimation({
                container: ref.current,
                renderer: 'svg',

                rendererSettings: {
                    className: classname
                },
                loop: true,
                autoplay: true,

                // path to your animation file, place it inside public folder
                path: logo || '/static',

            });

            return () => animation.destroy();
        }
    }, [lottie, logo]);

    return (
        <div ref={ref} />
    );
};

export const Item: FC<Items> = (props: Items) => {

    const [change, setChange] = useState<boolean>(false);
    const [term, setTerm] = useState<string>('');
    const { onClick } = props;

    useEffect(() => {
        if (props.type == 'earth' && change) return setTerm('/static/global-white.json');
        if (props.type == 'earth' && !change) return setTerm('/static/global-green.json');
        if (props.type == 'bar' && !change) return setTerm('/static/bar-green.json');
        if (props.type == 'bar' && change) return setTerm('/static/bar-white.json');
        if (props.type == 'plant' && change) return setTerm('/static/plant-white.json');
        if (props.type == 'plant' && !change) return setTerm('/static/plant-green.json');
        if (props.type == 'avatar' && change) return setTerm('/static/avt-white.json');
        if (props.type == 'avatar' && !change) return setTerm('/static/avt-green.json');
        if (props.type == 'law' && change) return setTerm('/static/law-white.json');
        if (props.type == 'law' && !change) return setTerm('/static/law-green.json');
    }, [change]);



    return (
        <>
            <div onClick={onClick}>
                <div className={`flex hover:cursor-pointer flex-col w-full justify-center items-center  ${change ? 'text-primary-main' : 'text-[#000000]'}`} onClick={() => setChange(true)} onMouseLeave={() => setChange(false)}>
                    <div className={`overflow-hidden flex justify-center items-center rounded-full w-[75px] h-[75px] shadow-lg shadow-black-500/50  ${change ? 'bg-primary-main' : 'bg-white'} mb-4`}>
                        <Animation logo={term} classname={`${change ? 'bg-primary-main' : 'bg-white'} w-[48px] h-48px]`} />
                    </div>
                    <Typo variant='body' className='text-center md:text-left'> {props.title} </Typo>
                </div>
            </div>
        </>
    )
}

export default Item;


