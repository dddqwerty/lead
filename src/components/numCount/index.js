import { useEffect, useState } from 'react'

export const NumCount = (props) => {
  const { number, increaseBy = 1 } = props
  const [num, setNum] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (num >= number) {
        clearTimeout(timeout)
        setNum(number)
      } else {
        setNum(num + increaseBy)
      }
    }, 50)
    return () => clearTimeout(timeout)
  }, [num])

  return (
    <div>
      <h1>{num}</h1>
    </div>
  )
}

export default NumCount
