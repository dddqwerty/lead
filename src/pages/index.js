import { MainLayout } from 'layout'
import { GridMain, Typography, NumCount, Button } from 'components'
import { TextBox } from 'components'
import { motion } from 'framer-motion'
import Landpage from 'components/landpages/land'
import Support from 'components/oursup'
import router from 'next/router'
import { useAppContext } from 'context/cont'
import Img21 from '../../public/static/indexpic21.png'

export default function Home() {
  const { setLink } = useAppContext()

  const variants = {
    hidden: { y: '50%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <MainLayout classname={''}>
      <div className="flex-col flex gap-28 mx-auto max-w-leadScreen">
        <div className="w-496 mt-32 flex-col flex gap-10">
          <Typography variant="h1" className="text-primary-main">
            МАНЛАЙЛАГЧ. УР ЧАДВАР. АРДЧИЛАЛ.
          </Typography>
          <Typography variant="body">
            Монголд ардчиллыг бэхжүүлэх, манлайлагч залуусын ур чадварыг нэмэгдүүлэх зорилготой LEAD Mongolia
            хөтөлбөрийн төгсөгчдийн веб
          </Typography>
        </div>

        <div className="flex items-center">
          <div className="bg-slate-200 w-14 h-14 rounded-full hover:cursor-pointer"></div>
          <Typography variant="body-semibold" className="ml-5 hover:cursor-pointer">
            Бичлэг үзэх
          </Typography>
        </div>
      </div>

      <motion.ul
        initial="hidden"
        whileInView={'visible'}
        viewport={{ once: false }}
        variants={variants}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-row space-x-4 w-full justify-around mt-80 mx-auto max-w-leadScreen">
          <TextBox number={<NumCount key={1} number={247} increaseBy={6} />} txt="Гишүүн"></TextBox>
          <TextBox number={<NumCount key={2} number={4534} increaseBy={140} />} txt="Үр Шим Хүртэгч"></TextBox>
          <TextBox number={<NumCount key={3} number={37} increaseBy={1} />} txt="Түнш, Хамтрагч"></TextBox>
          <TextBox number={<NumCount key={4} number={1585000} increaseBy={55000} />} txt="Хүнд Нөлөөлөв"></TextBox>
        </div>
      </motion.ul>

      <div className="flex-row flex gap-28 items-end mt-32 mx-auto max-w-leadScreen justify-end">
        <div>
          <img className="absolute left-[-20px] top-[1100px]" src={Img21.src} />
          <img className="absolute left-0 top-[900px]" src="static/indexpic22.svg" />
        </div>
        <div className="w-496 mt-32 flex-col flex gap-10 ">
          <Typography variant="h1" className="text-primary-main">
            МАНЛАЙЛАГЧ. УР ЧАДВАР. АРДЧИЛАЛ.
          </Typography>
          <Typography variant="body">
            Монголд ардчиллыг бэхжүүлэх, манлайлагч залуусын ур чадварыг нэмэгдүүлэх зорилготой LEAD Mongolia
            хөтөлбөрийн төгсөгчдийн веб
          </Typography>
          <div className="flex items-center mt-16">
            <div className="bg-slate-200 w-14 h-14 rounded-full hover:cursor-pointer"></div>
            <Typography variant="body-semibold" className="ml-5 hover:cursor-pointer">
              Бичлэг үзэх
            </Typography>
          </div>
        </div>
      </div>
      <div className="mt-9">
        <div className="mt-[380px]">
          <Landpage className="mx-auto max-w-leadScreen" />
        </div>
        <GridMain />
        <div className="flex justify-center mt-[64px]">
          <Button
            variant="fill"
            onClick={() => {
              router.push(`/projects`), setLink('projects')
            }}
          >
            del
          </Button>
        </div>
        <Support />
      </div>
    </MainLayout>
  )
}
