import { Medeefirst } from 'components/home/medeefir'
import { Medeesecond } from 'components/home/medeesec'
import { Medeethird } from 'components/home/medeethi'
import { Medeefourth } from 'components/home/medeefou'
import { MainLayout } from 'layout'
import { PADDINGX } from 'constants/layout'

export default function Medee() {
  return (
    <MainLayout classname={`flex flex-col mb-[148.75px] gap-[104px] mx-auto max-w-leadScreen ${PADDINGX}`}>
      <div className="h-[39px] " />
      <Medeefirst />
      <Medeesecond />
      <Medeethird />
      <Medeefourth />
    </MainLayout>
  )
}
