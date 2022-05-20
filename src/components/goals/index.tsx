import Typo from "components/typography";
import Lottie from "react-lottie";
import book from '../../../public/static/book.json';
import reuse from '../../../public/static/reuse.json';
import stack from '../../../public/static/layers.json';

type Props = {
  gif: string
  info: string
  classname?: string
  last?: boolean
}

export const Goal = (props: Props) => {

  const { last = false } = props

  const getGifs = (props: string) => {
    switch (props) {
      case 'book': return book
      case 'reuse': return reuse
      case 'stack': return stack
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: getGifs(props.gif),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="flex items-center">
      <div className={`flex flex-row w-full gap-6 items-center ${props.classname}`}>
        <div className="p-2">
          <Lottie options={defaultOptions} height={48} width={48} />
        </div>
        <Typo variant="body"> {props.info} </Typo>
      </div>
      {!props.last && <div className="hidden md:block border border-r h-[70%]" />}
    </div>
  )
}

export default Goal; 