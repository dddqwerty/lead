import { Button } from 'components'
import { Typography } from 'components'
import { PADDINGX } from 'constants/layout'
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export const News = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div
      className={`flex flex-col gap-[56px] max-w-leadScreen mx-auto mt-[112px] md:mt-[224px] ${PADDINGX}`}
      variants={container}
      initial="hidden"
      whileInView={'visible'}
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-[44px] md:gap-[88px]">
        <div>
          <Typography variant={matches ? 'h3' : 'h1'} className="justify-center flex">
            Шинэ Мэдээ, Мэдээлэл
          </Typography>
        </div>
        <div className="flex md:flex-row flex-col  gap-6">
          <motion.div variants={item}>
            <div className="flex flex-col gap-6 rounded-lg shadow-[0_0_24px_rgba(0,0,0,0.05)] max-w-[601px] px-8 pt-8 border-[0.5px] border-solid border-[rgba(15, 35, 62, 0.15)]">
              <div>
                <img src="static/news1.svg" />
              </div>
              <div className="flex flex-col max-w-[408px]">
                <Typography variant="body-bold" className="text-primary-dark">
                  28 Jun 21
                </Typography>
                <div className="flex flex-col gap-2">
                  <Typography variant={matches ? 'mobile' : 'h3'}>
                    Humans of UB | Сонгуулийн ирцийн мэдээ ба технологийн шийдэл
                  </Typography>
                  <div className="flex flex-col gap-[67px] mb-[52px]">
                    <Typography variant="body">
                      Монгол Улсын Ерөнхийлөгчийн 2021 оны ээлжит сонгуулийн ирцийн мэдээг цаг тута Монгол Улсын
                      Ерөнхийлөгчийн 2021...
                    </Typography>
                    <Typography className="flex text-primary-dark">
                      Дэлгэрэнгүй
                      <img src="static/arrow.svg" />
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col gap-6">
            <motion.div variants={item}>
              <div className="flex flex-col gap-6 rounded-lg shadow-[0_0_24px_rgba(0,0,0,0.05)] max-w-[601px] px-8 pt-8 border-[0.5px] border-solid border-[rgba(15, 35, 62, 0.15)]">
                <div>
                  <img src="/static/news2.svg" />
                </div>
                <div className="flex flex-col max-w-[434px]">
                  <Typography variant="body-bold" className="text-primary-dark">
                    28 Jun 21
                  </Typography>
                  <div className="flex flex-col gap-2">
                    <Typography variant={matches ? 'mobile' : 'h3'}>
                      Залуу сонгогчдын ирц, түүнд нөлөөлөгч хүчин зүйлс
                    </Typography>
                    <div className="mb-5">
                      <Typography>Н.Мягмарцоож Доктор (PhD), дэд профессор</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={item}>
              <div className="flex flex-col gap-6 rounded-lg shadow-[0_0_24px_rgba(0,0,0,0.05)] max-w-[601px] px-8 pt-8 border-[0.5px] border-solid border-[rgba(15, 35, 62, 0.15)]">
                <div>
                  <img src="static/news2.svg" />
                </div>
                <div className="flex flex-col max-w-[434px]">
                  <Typography variant="body-bold" className="text-primary-dark">
                    28 Jun 21
                  </Typography>
                  <div className="flex flex-col gap-2">
                    <Typography variant={matches ? 'mobile' : 'h3'}>
                      Залуу сонгогчдын ирц, түүнд нөлөөлөгч хүчин зүйлс
                    </Typography>
                    <div className="mb-5">
                      <Typography>Н.Мягмарцоож Доктор (PhD), дэд профессор</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div>
          <Typography></Typography>
        </div>
      </div>
      <motion.div variants={item} className="flex justify-center">
        <Button variant="ghost">Бүх мэдээг үзэх</Button>
      </motion.div>
    </motion.div>
  )
}

export default News
