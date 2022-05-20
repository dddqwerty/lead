import { Typography } from 'components'

export const ImgTxt = (props) => {
  const { posistion, text, img, h3 } = props

  return (
    <div className={`${posistion === 'right' ? 'flex flex-row-reverse' : 'flex '} max-w-1200px mx-auto`}>
      <img src={img} className="hidden md:flex h-400 max-w-1/2"></img>
      <div className={`${posistion === 'right' ? 'md:mr-[72px] ' : 'md:ml-[72px] '} max-w-1/2 flex items-center`}>
        <div className="flex-col grid gap-y-6">
          <Typography variant="h3">{h3}</Typography>
          <Typography variant="body">{text}</Typography>
        </div>
      </div>
    </div>
  )
}

export default ImgTxt
