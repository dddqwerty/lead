import { Typography } from 'components'
export const TextBox = (props) => {
  const { number, txt } = props

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-primary-main">
        <Typography variant="h1"> {number} </Typography>
      </div>
      <Typography variant="h3">{txt}</Typography>
    </div>
  )
}

export default TextBox
