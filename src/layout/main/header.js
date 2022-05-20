import { Typography } from 'components'
import { handleIcon } from 'utils'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const Header = () => {
  const router = useRouter()
  const [link, setLink] = useState('/')
  const params = router.pathname

  useEffect(() => {
    setLink(params)
  }, [params])

  const handleChangeMenu = async (menu) => {
    setLink(menu)
    await router.push(`/${menu}`)
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
        <div className="hidden md:flex gap-20 lg:flex">
          <Link href={'/'}>
            <a>
              <div className={`${link === '/' && 'border-b-4 border-primary-main'} py-[24px] hover:cursor-pointer`}>
                <Typography variant="body">Нүүр</Typography>
              </div>
            </a>
          </Link>
          <Link href={'/aboutUs'}>
            <a>
              <div
                className={`${link === '/aboutUs' && 'border-b-4 border-primary-main'} py-[24px] hover:cursor-pointer`}
              >
                <Typography variant="body">Бидний тухай</Typography>
              </div>
            </a>
          </Link>

          <Link href={'/projects'}>
            <a>
              <div
                className={`${link === '/projects' && 'border-b-4 border-primary-main'} py-[24px] hover:cursor-pointer`}
              >
                <Typography variant="body">Төслүүд</Typography>
              </div>
            </a>
          </Link>

          <Link href={'/solution'}>
            <a>
              <div
                className={`${link === 'solution' && 'border-b-4 border-primary-main'} py-[24px] hover:cursor-pointer `}
              >
                <Typography variant="body">Шийд</Typography>
              </div>
            </a>
          </Link>

          <Link href={'/news'}>
            <a>
              <div className={`${link === '/news' && 'border-b-4 border-primary-main'} py-[24px] hover:cursor-pointer`}>
                <Typography variant="body">Мэдээ</Typography>
              </div>
            </a>
          </Link>
          <div
            onClick={() => handleChangeMenu('/lead')}
            className={`${link === '/lead' && 'border-b-4 border-primary-main'} py-[24px] hover:cursor-pointer`}
          >
            <Typography variant="body">Lead</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
