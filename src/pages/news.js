import { Medeefirst } from 'components/home/medeefir'
import { Medeesecond } from 'components/home/medeesec'
import { Medeethird } from 'components/home/medeethi'
import { Medeefourth } from 'components/home/medeefou'
import { MainLayout } from 'layout'

export default function Medee() {
  return (
    <MainLayout classname={'flex flex-col mt-[89px] mb-[148.75px] gap-[104px] mx-auto max-w-leadScreen'}>
      <Medeefirst />
      <Medeesecond />
      <Medeethird />
      <Medeefourth />
    </MainLayout>
  )
}
