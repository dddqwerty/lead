import { TextBox } from 'components'
import NumCount from 'components/numCount'
import { motion } from 'framer-motion'

export const HomeSecond = ({ datas }) => {
  let eachItems = datas.items
  const variants = {
    hidden: { y: '50%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.ul
      initial="hidden"
      whileInView={'visible'}
      viewport={{ once: false }}
      variants={variants}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row w-full justify-between py-10 md:py-0 md:mt-80 mx-auto max-w-leadScreen">
        <TextBox
          number={<NumCount key={1} number={eachItems[0].amount} increaseBy={6} />}
          txt={eachItems[0].type}
        ></TextBox>
        <TextBox
          number={<NumCount key={2} number={eachItems[1].amount} increaseBy={140} />}
          txt={eachItems[1].type}
        ></TextBox>
        <TextBox
          number={<NumCount key={3} number={eachItems[2].amount} increaseBy={1} />}
          txt={eachItems[2].type}
        ></TextBox>
        <TextBox
          number={<NumCount key={4} number={eachItems[3].amount} increaseBy={55000} />}
          txt={eachItems[3].type}
        ></TextBox>
      </div>
    </motion.ul>
  )
}
export default HomeSecond
