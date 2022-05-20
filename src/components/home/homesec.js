import { TextBox } from 'components'
import NumCount from 'components/numCount'
import { motion } from 'framer-motion'

export const HomeSecond = () => {
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
        <TextBox number={<NumCount key={1} number={247} increaseBy={6} />} txt="Гишүүн"></TextBox>
        <TextBox number={<NumCount key={2} number={4534} increaseBy={140} />} txt="Үр Шим Хүртэгч"></TextBox>
        <TextBox number={<NumCount key={3} number={37} increaseBy={1} />} txt="Түнш, Хамтрагч"></TextBox>
        <TextBox number={<NumCount key={4} number={1585000} increaseBy={55000} />} txt="Хүнд Нөлөөлөв"></TextBox>
      </div>
    </motion.ul>
  )
}
export default HomeSecond
