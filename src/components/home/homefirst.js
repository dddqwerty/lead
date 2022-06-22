import { Typography } from 'components'
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { PADDINGX } from 'constants/layout'

export const HomeFirst = () => {
  const container = {
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
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  }
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div className={`flex-row flex mx-auto py-12 max-w-leadScreen ${PADDINGX} w-full relative`}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={'visible'}
        viewport={{ once: false }}
        className="flex flex-col"
      >
        <div className="flex flex-col gap-6 md:gap-[104px] mt-16  md:mt-32">
          <div className="flex-col flex gap-2 md:gap-10">
            <motion.div
              className="w-[231px] md:w-496  "
              variants={item}
              whileInView={'visible'}
              viewport={{ once: false }}
            >
              <Typography variant={matches ? 'body-mobile' : 'h1'} className="text-primary-main">
                МАНЛАЙЛАГЧ. УР ЧАДВАР. АРДЧИЛАЛ.
              </Typography>
            </motion.div>
            <motion.div
              className="w-[231px] md:w-496  "
              variants={item}
              whileInView={'visible'}
              viewport={{ once: false }}
            >
              <Typography variant={matches ? 'caption' : 'body'}>
                Монголд ардчиллыг бэхжүүлэх, манлайлагч залуусын ур чадварыг нэмэгдүүлэх зорилготой LEAD Mongolia
                хөтөлбөрийн төгсөгчдийн веб
              </Typography>
            </motion.div>
          </div>
          <motion.div
            className="flex items-center"
            variants={item}
            whileInView={'visible'}
            viewport={{ once: false }}
            onClick={() => window.open('https://www.youtube.com/channel/UCm32dHM_uDXZxG0t_C49nXg', '_blank')}
          >
            <img
              src="/static/play.png"
              className="bg-slate-100 w-7 h-7 md:w-14 md:h-14 rounded-full hover:cursor-pointer"
            />
            <Typography variant={matches ? 'subhead' : 'body-semibold'} className="ml-5 hover:cursor-pointer">
              Бичлэг үзэх
            </Typography>
          </motion.div>
        </div>
      </motion.div>
      <div className="w-[818px] hidden md:block absolute top-[2px] left-[550px]">
        <img src="/static/home1.jpg" />
      </div>
    </div>
  )
}

export default HomeFirst
