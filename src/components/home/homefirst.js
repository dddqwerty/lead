import { Typography } from 'components'
import { motion } from 'framer-motion'

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

  return (
    <div className="flex-row flex mx-auto max-w-leadScreen">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={'visible'}
        viewport={{ once: false }}
        className="flex flex-col"
      >
        <div className="flex flex-col gap-[104px] mt-32">
          <div className="w-496  flex-col flex gap-10">
            <motion.div variants={item} whileInView={'visible'} viewport={{ once: false }}>
              <Typography variant="h1" className="text-primary-main">
                МАНЛАЙЛАГЧ. УР ЧАДВАР. АРДЧИЛАЛ.
              </Typography>
            </motion.div>
            <motion.div variants={item} whileInView={'visible'} viewport={{ once: false }}>
              <Typography variant="body">
                Монголд ардчиллыг бэхжүүлэх, манлайлагч залуусын ур чадварыг нэмэгдүүлэх зорилготой LEAD Mongolia
                хөтөлбөрийн төгсөгчдийн веб
              </Typography>
            </motion.div>
          </div>
          <motion.div className="flex items-center" variants={item} whileInView={'visible'} viewport={{ once: false }}>
            <div className="bg-slate-200 w-14 h-14 rounded-full hover:cursor-pointer" />
            <Typography variant="body-semibold" className="ml-5 hover:cursor-pointer">
              Бичлэг үзэх
            </Typography>
          </motion.div>
        </div>
      </motion.div>
      {/* <div>
        <img src="/static/lead-home-Img1.jpeg"/>
      </div> */}
    </div>
  )
}

export default HomeFirst
