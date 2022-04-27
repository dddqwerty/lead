import { useState } from 'react'
import { Typography } from 'components'
import { handleIcon } from 'utils'
import router from 'next/router'

export const Header = () => {
  const [state, setState] = useState('/')

  const handleChangeMenu = async (menu) => {
    setState(menu)
    await router.push(`/${menu}`)
  }
  return (
    <div className="border-b">
      <div className="mx-auto max-w-7xl flex justify-between items-center ">
        <img
          onClick={() => handleChangeMenu('/')}
          src="/static/logo.png"
          alt=""
          className="flex h-40 w-140 hover:cursor-pointer"
        />
        <div className="flex md:hidden lg:hidden">
          {handleIcon({
            icon: 'menu',
          })}
        </div>
        <div className="flex gap-20 hidden md:flex lg:flex ">
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
            <Typography variant="body">ШИЙД</Typography>
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
