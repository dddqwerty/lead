import { MainLayout } from 'layout'
import { Typography } from 'components'
import { TextBox } from 'components'

export default function Home() {
  return (
    <MainLayout classname={'mx-auto max-w-leadScreen'}>
      <div className="flex-col flex gap-28">
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

      <div className="flex flex-row space-x-4 w-full justify-around mt-80">
        <TextBox number="247" txt="Гишүүн"></TextBox>
        <TextBox number="4,534" txt="Үр Шим Хүртэгч"></TextBox>
        <TextBox number="37" txt="Түнш, Хамтрагч"></TextBox>
        <TextBox number="1,585,000" txt="Хүнд Нөлөөлөв"></TextBox>
      </div>

      <div className="flex-col flex gap-28 items-end mt-32">
        <div className="w-496 mt-32 flex-col flex gap-10">
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
    </MainLayout>
  )
}
