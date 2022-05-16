import { Workers } from 'components'
import StartUp from 'components/home/abtUs'
import Goalies from 'components/home/gls'
import { ImgTxt } from 'components'
import Information from 'components/info'
import { MainLayout } from 'layout'

export default function Test() {
  return (
    <MainLayout classname={'mx-auto max-w-leadScreen'}>
      <StartUp />
      <ImgTxt />
      <ImgTxt posistion="right" />
      <Goalies />
      <Workers />
      <Information />
    </MainLayout>
  )
}
