import { useState } from 'react'
import { Typography } from 'components'
import { handleIcon } from 'utils'
import router from 'next/router'

export const Header = () => {
  const [state, setState] = useState('/')
  const [phone, setPhone] = useState(false)

  const handleChangeMenu = async (menu) => {
    setState(menu)
    await router.push(`/${menu}`)
  }

  const phoneMenu = async () => {
    if (phone === false) {
      setPhone(true)
    } else setPhone(false)
  }
  return (
    <div className="border-b ">
      <div className="mx-auto max-w-leadScreen w-screen flex justify-between items-center">
        <img
          onClick={() => handleChangeMenu('/')}
          src="/static/lead-logo.svg"
          alt=""
          className="flex h-40 w-140 hover:cursor-pointer md:flex "
        />
        <div className="flex hover:cursor-pointer md:hidden py-[24px] mx-10  lg:hidden" onClick={() => phoneMenu()}>
          {handleIcon({
            icon: 'menu',
          })}
        </div>
        <div className={`${phone ? 'flex' : 'hidden'} border-2`}>
          <div onClick={() => handleChangeMenu('/')} className=" hover:cursor-pointer">
            Нүүр
          </div>
          <div onClick={() => handleChangeMenu('aboutUs')} className=" hover:cursor-pointer">
            Бидний тухай
          </div>
          <div onClick={() => handleChangeMenu('projects')} className=" hover:cursor-pointer">
            Төслүүд
          </div>
          <div onClick={() => handleChangeMenu('result')} className=" hover:cursor-pointer">
            ШИЙД
          </div>
          <div onClick={() => handleChangeMenu('news')} className=" hover:cursor-pointer">
            Мэдээ
          </div>
        </div>
        <div className="flex hidden md:flex gap-20 lg:flex">
          <div
            onClick={() => handleChangeMenu('/')}
            className={`${state === '/' && 'border-b-4 border-primary-main'} py-[24px] hover:cursor-pointer`}
          >
            <Typography variant="body">Нүүр</Typography>
          </div>

          <div
            onClick={() => handleChangeMenu('aboutUs')}
            className={`${state === 'aboutUs' && 'border-b-4 border-primary-main'}  py-[24px] hover:cursor-pointer`}
          >
            <Typography variant="body">Бидний тухай</Typography>
          </div>

          <div
            onClick={() => handleChangeMenu('projects')}
            className={`${state === 'projects' && 'border-b-4 border-primary-main'} py-[24px] hover:cursor-pointer`}
          >
            <Typography variant="body">Төслүүд</Typography>
          </div>

          <div
            onClick={() => handleChangeMenu('result')}
            className={`${state === 'result' && 'border-b-4 border-primary-main'} py-[24px] hover:cursor-pointer `}
          >
            <Typography variant="body">Шийд</Typography>
          </div>

          <div
            onClick={() => handleChangeMenu('news')}
            className={`${state === 'news' && 'border-b-4 border-primary-main'} py-[24px]  hover:cursor-pointer`}
          >
            <Typography variant="body">Мэдээ</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
