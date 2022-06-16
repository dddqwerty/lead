import { Button } from 'components'
import { Typography } from 'components'
import { PADDINGX } from 'constants/layout'
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useState } from 'react'

export const News = ({ datas }) => {
  console.log(datas.items)
  const [read, setRead] = useState(true)

  const toggleRead = () => {
    setRead(!read)
  }

  const newsDatas = datas.items.filter((el) => {
    if (Object.keys(el).length !== 0) {
      return true
    }

    return false
  })

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
                <img src={newsDatas[0].image.url} />
              </div>
              <div className="flex flex-col max-w-[408px]">
                <Typography variant="body-bold" className="text-primary-dark">
                  {newsDatas[0].date.slice(0, 10)}
                </Typography>
                <div className="flex flex-col gap-2">
                  <Typography variant={matches ? 'mobile' : 'h3'}>{newsDatas[0].topic}</Typography>
                  <div className="flex flex-col gap-[67px] mb-[52px]">
                    <Typography variant="body">
                      {newsDatas[0] && newsDatas[0].info && read
                        ? `${newsDatas[0].info.slice(0, newsDatas[0].info.length / 2)}.....`
                        : newsDatas[0] && newsDatas[0].info
                          ? newsDatas[0].info
                          : 'ret'}
                    </Typography>
                    <Typography className="flex text-primary-dark cursor-pointer" onClick={toggleRead}>
                      {read ? 'Дэлгэрэнгүй' : 'Буцаах'}
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
                  <img src={newsDatas[1].image.url} />
                </div>
                <div className="flex flex-col max-w-[434px]">
                  <Typography variant="body-bold" className="text-primary-dark">
                    {newsDatas[1].date.slice(0, 10)}
                  </Typography>
                  <div className="flex flex-col gap-2">
                    <Typography variant={matches ? 'mobile' : 'h3'}>{newsDatas[1].topic}</Typography>
                    <div className="mb-5">
                      <Typography> {newsDatas[1].info} </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={item}>
              <div className="flex flex-col gap-6 rounded-lg shadow-[0_0_24px_rgba(0,0,0,0.05)] max-w-[601px] px-8 pt-8 border-[0.5px] border-solid border-[rgba(15, 35, 62, 0.15)]">
                <div>
                  <img src={newsDatas[2].image.url} />
                </div>
                <div className="flex flex-col max-w-[434px]">
                  <Typography variant="body-bold" className="text-primary-dark">
                    {newsDatas[2].date.slice(0, 10)}
                  </Typography>
                  <div className="flex flex-col gap-2">
                    <Typography variant={matches ? 'mobile' : 'h3'}>{newsDatas[2].topic}</Typography>
                    <div className="mb-5">
                      <Typography> {newsDatas[2].info} </Typography>
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
        <Button variant="ghost" onClick={() => (window.location.href = '/news')}>
          Бүх мэдээг үзэх
        </Button>
      </motion.div>
    </motion.div>
  )
}

export default News
