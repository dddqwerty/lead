import { Typography } from 'components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { handleIcon } from 'utils'

export const Lead = ({ datas }) => {
  let img = datas.employeesCollection.items
  const container = {
    visible: {
      rotate: [0, 360],
      opacity: 1,
      transition: {
        duration: 7.5,
      },
    },
  }

  const item = {
    visible: {
      rotate: [0, -360],
      opacity: 1,
      transition: {
        duration: 7.5,
      },
    },
  }

  return (
    <div className="flex md:mt-[300px]">
      <div className="flex flex-col gap-[64px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col">
            <img src="/static/lead-Vector-logo.svg" className="w-[115px]" />
            <Typography className="text-primary-main" variant="h1">
              ХӨТӨЛБӨР
            </Typography>
          </div>
          <div>
            <Typography className="md:w-[496px] lg:w-[496px]" variant="body">
              LEAD Mongolia хөтөлбөр нь төрийн болон төрийн бус байгууллага, хувийн хэвшил зэрэг төрөл бүрийн салбарын
              шинэ залуу манлайлагчдыг нэгтгэн, нийгэмд тулгамдаж буй асуудалд гарц шийдэл олох зорилготой.{' '}
            </Typography>
          </div>
        </div>

        <div className="flex gap-20 items-center md:items-start">
          <div className="flex items-center gap-3">
            <div className="h-[56px] w-[56px] text-blue bg-grey flex justify-center items-center rounded-full">
              {handleIcon({
                icon: 'facebook',
                size: '32',
              })}
            </div>
            <div className="flex flex-col gap-1">
              <Typography variant="body" className="text-text-grey">
                Бидэнтэй холбогдох
              </Typography>
              <Typography
                className="underline cursor-pointer"
                variant="Button / Link"
                onClick={() => window.open('https://www.facebook.com/LEADAlumniAssociation', '_blank')}
              >
                Фэйсбүүк-рүү үсрэх
              </Typography>
            </div>
          </div>
          <div className="flex-col flex gap-1">
            <Typography className="text-base font-semibold text-text-grey1">ГИШҮҮД:</Typography>
            <Typography variant="body-bold"> {datas.workersQuantity} </Typography>
          </div>
        </div>
      </div>
      <motion.div
        className="hidden md:block lg:block relative w-[690px] -top-[101px] -right-32 h-[690px]"
        whileHover="visible"
        variants={container}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <div className="absolute">
          <img src="/static/members.svg" />
        </div>
        <motion.div
          className="w-[93px] h-[93px] absolute -top-[10px] left-[162px] rounded-full bg-bgGrey z-10  flex justify-center items-center"
          variants={item}
          transition={{ duration: 1.5 }}
        >
          <Image src={img[0].url} className="rounded-full" alt="" width={93} height={93} />
        </motion.div>
        <motion.div
          className="w-[93px] h-[93px] absolute -top-[10px] left-[442px] rounded-full bg-bgGrey z-10  flex justify-center items-center"
          variants={item}
          transition={{ duration: 1.5 }}
        >
          <Image src={img[0].url} className="rounded-full" alt="" width={93} height={93} />
        </motion.div>
        <motion.div
          className="w-[93px] h-[93px] absolute top-[160px] -left-[28px] rounded-full bg-bgGrey z-10  flex justify-center items-center"
          variants={item}
          transition={{ duration: 1.5 }}
        >
          <Image src={img[0].url} className="rounded-full" alt="" width={93} height={93} />
        </motion.div>
        <motion.div
          className="w-[93px] h-[93px] absolute top-[160px] left-[617px] rounded-full bg-bgGrey z-10  flex justify-center items-center"
          variants={item}
          transition={{ duration: 1.5 }}
        >
          <Image src={img[0].url} className="rounded-full" alt="" width={93} height={93} />
        </motion.div>
        <motion.div
          className="w-[93px] h-[93px] absolute top-[420px] -left-[28px] rounded-full bg-bgGrey z-10  flex justify-center items-center"
          variants={item}
          transition={{ duration: 1.5 }}
        >
          <Image src={img[0].url} className="rounded-full" alt="" width={93} height={93} />
        </motion.div>
        <motion.div
          className="w-[93px] h-[93px] absolute top-[420px] left-[617px] rounded-full bg-bgGrey z-10  flex justify-center items-center"
          variants={item}
          transition={{ duration: 1.5 }}
        >
          <Image src={img[0].url} className="rounded-full" alt="" width={93} height={93} />
        </motion.div>
        <motion.div
          className="w-[93px] h-[93px] absolute top-[610px] left-[162px] rounded-full bg-bgGrey z-10  flex justify-center items-center"
          variants={item}
          transition={{ duration: 1.5 }}
        >
          <Image src={img[0].url} className="rounded-full" alt="" width={93} height={93} />
        </motion.div>
        <motion.div
          className="w-[93px] h-[93px] absolute top-[610px] left-[442px] rounded-full bg-bgGrey z-10  flex justify-center items-center"
          variants={item}
          transition={{ duration: 1.5 }}
        >
          <Image src={img[0].url} className="rounded-full" alt="" width={93} height={93} />
        </motion.div>
        <motion.div
          className="w-[93px] h-[93px] absolute top-[90px] left-[297px] rounded-full bg-bgGrey z-10  flex justify-center items-center"
          variants={item}
          transition={{ duration: 1.5 }}
        >
          <Image src={img[0].url} className="rounded-full" alt="" width={93} height={93} />
        </motion.div>
        <motion.div
          className="w-[93px] h-[93px] absolute top-[220px] left-[112px] rounded-full bg-bgGrey z-10  flex justify-center items-center"
          variants={item}
          transition={{ duration: 1.5 }}
        >
          <Image src={img[0].url} className="rounded-full" alt="" width={93} height={93} />
        </motion.div>
        <motion.div
          className="w-[93px] h-[93px] absolute top-[220px] left-[472px] rounded-full bg-bgGrey z-10  flex justify-center items-center"
          variants={item}
          transition={{ duration: 1.5 }}
        >
          <Image src={img[0].url} className="rounded-full" alt="" width={93} height={93} />
        </motion.div>
        <motion.div
          className="w-[93px] h-[93px] absolute top-[450px] left-[172px] rounded-full bg-bgGrey z-10  flex justify-center items-center"
          variants={item}
          transition={{ duration: 1.5 }}
        >
          <Image src={img[0].url} className="rounded-full" alt="" width={93} height={93} />
        </motion.div>
        <motion.div
          className="w-[93px] h-[93px] absolute top-[450px] left-[412px] rounded-full bg-bgGrey z-10  flex justify-center items-center"
          variants={item}
          transition={{ duration: 1.5 }}
        >
          <Image src={img[0].url} className="rounded-full" alt="" width={93} height={93} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Lead
