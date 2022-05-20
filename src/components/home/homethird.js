import { Typography } from 'components'
import { motion } from 'framer-motion'

export const HomeThird = () => {
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
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  }

  return (
    <div className="flex-row hidden md:flex mx-auto max-w-leadScreen">
      {/* <div>
        <img src='/static/lead-home-Img2.jpeg' />
      </div> */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={'visible'}
        viewport={{ once: false }}
        className="flex flex-col w-full"
      >
        <motion.div className="flex justify-end w-full">
          <div className="flex flex-col md:gap-[104px] mt-16  md:mt-32">
            <div>
              {/* <img className="absolute left-[-20px] top-[1100px]" src="/static/Img21.png" />
            <img className="absolute left-0 top-[900px]" src="static/indexpic22.svg" /> */}
            </div>
            <div className="md:w-496 mt-32 flex-col flex gap-10 ">
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
            <motion.div
              className="flex items-center"
              variants={item}
              whileInView={'visible'}
              viewport={{ once: false }}
            >
              <div className="bg-slate-200 w-14 h-14 rounded-full hover:cursor-pointer" />
              <Typography variant="body-semibold" className="ml-5 hover:cursor-pointer">
                Бичлэг үзэх
              </Typography>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HomeThird
