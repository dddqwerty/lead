import { Button } from 'components'
import { Typography } from 'components'
import { PADDINGX } from 'constants/layout'
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Image from 'next/image'

export const News = ({ datas }) => {
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
        <div className="grid grid-rows-2 grid-flow-col gap-4">
          {datas.items.map((x, i) => {
            return (
              <div
                className="flex flex-col gap-6 rounded-lg shadow-[0_0_24px_rgba(0,0,0,0.05)] max-w-[601px] px-8 pt-8 border-[0.5px] border-solid border-[rgba(15, 35, 62, 0.15)] h-[327px] cursor-pointer"
                key={i}
                onClick={() => (window.location.href = `/news/${x.id}`)}
              >
                <div>
                  <Image src={x.img.url} width={537} height={133} />
                </div>
                <div className="flex flex-col max-w-[434px]">
                  <Typography variant="body-bold" className="text-primary-dark">
                    {x.date.slice(0, 10)}
                  </Typography>
                  <div className="flex flex-col gap-2">
                    <Typography variant={matches ? 'mobile' : 'h3'} className="h-[56px] truncate">
                      {x.title}
                    </Typography>
                    <div className="mb-5">
                      <Typography className="truncate"> {x.info} </Typography>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <motion.div variants={item} className="flex justify-center">
        <Button variant="ghost" onClick={() => (window.location.href = '/news/page')}>
          Бүх мэдээг үзэх
        </Button>
      </motion.div>
    </motion.div>
  )
}

export default News
