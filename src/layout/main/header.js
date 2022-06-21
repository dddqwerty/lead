import { Typography } from 'components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { PADDINGX } from 'constants/layout'
import CustomAccordion, { AccordionDetailsWithLink } from 'components/CustomAccordion'
import MenuToggle from './MenuToggle'

export const Header = () => {
  const router = useRouter()
  const [link, setLink] = useState('/')
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const params = router.pathname

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }, [showMobileMenu])

  useEffect(() => {
    setLink(params)
  }, [params])

  const handleChangeMenu = async (menu) => {
    setLink(menu)
    await router.push(`/${menu}`)
  }

  return (
    <div className={`border-b fixed z-50 w-full bg-white`}>
      <div className={`mx-auto max-w-leadScreen flex justify-between items-center ${PADDINGX}  w-full`}>
        <img
          onClick={() => handleChangeMenu('/')}
          src="/static/lead-logo.svg"
          alt=""
          className="flex h-40 w-140 hover:cursor-pointer md:flex "
        />
        <MenuToggle
          isOpen={showMobileMenu}
          toggle={() => {
            setShowMobileMenu(!showMobileMenu)
          }}
        />
        <div
          style={{
            transition: '0.3s',
            opacity: showMobileMenu ? 1 : 0,
            left: showMobileMenu ? '0%' : '100%',
          }}
          className={`w-full fixed flex flex-col overflow-y-scroll bg-white h-screen top-[72px]`}
        >
          <div className={`block lg:hidden`}>
            <AccordionDetailsWithLink href="/" isActive={link === '/'}>
              <Typography variant="body" className="text-onSurface-black-medium">
                Нүүр
              </Typography>
            </AccordionDetailsWithLink>
            <AccordionDetailsWithLink href="/lead" isActive={link === '/lead'}>
              <Typography variant="body" className="text-onSurface-black-medium">
                What is Lead
              </Typography>
            </AccordionDetailsWithLink>
            <AccordionDetailsWithLink href="/aboutUs" isActive={link === '/aboutUs'}>
              <Typography variant="body" className="text-onSurface-black-medium">
                Бидний тухай
              </Typography>
            </AccordionDetailsWithLink>
            <AccordionDetailsWithLink href="/projects" isActive={link === '/projects'}>
              <Typography variant="body" className="text-onSurface-black-medium">
                Төслүүд
              </Typography>
            </AccordionDetailsWithLink>
            <AccordionDetailsWithLink href="/solution" isActive={link === '/solution'}>
              <Typography variant="body" className="text-onSurface-black-medium">
                Шийд
              </Typography>
            </AccordionDetailsWithLink>
            <AccordionDetailsWithLink href="/news/page" isActive={link === '/news/page'}>
              <Typography variant="body" className="text-onSurface-black-medium">
                Мэдээ
              </Typography>
            </AccordionDetailsWithLink>
          </div>
          <div className="hidden lg:block">
            <CustomAccordion items={[]} />
          </div>
          <div onClick={() => handleChangeMenu('lead')} className=" hover:cursor-pointer">
            Lead
          </div>
        </div>
        <div className="hidden md:flex gap-20 lg:flex">
          <Link href={'/'}>
            <a>
              <div
                className={`${
                  link === '/' && 'border-b-4 border-primary-main'
                }  shrink-0 py-[24px] hover:cursor-pointer`}
              >
                <Typography variant="body">Нүүр</Typography>
              </div>
            </a>
          </Link>
          <Link href={'/aboutUs'}>
            <a>
              <div
                className={`${
                  link === '/aboutUs' && 'border-b-4 border-primary-main'
                } shrink-0 py-[24px] hover:cursor-pointer`}
              >
                <Typography variant="body">Бидний тухай</Typography>
              </div>
            </a>
          </Link>

          <Link href={'/projects'}>
            <a>
              <div
                className={`${
                  link === '/projects' && 'border-b-4 border-primary-main'
                } py-[24px] shrink-0 hover:cursor-pointer`}
              >
                <Typography variant="body">Төслүүд</Typography>
              </div>
            </a>
          </Link>

          <Link href={'/solution'}>
            <a>
              <div
                className={`${
                  link === '/solution' && 'border-b-4 border-primary-main'
                } py-[24px] hover:cursor-pointer `}
              >
                <Typography variant="body">Шийд</Typography>
              </div>
            </a>
          </Link>

          <Link href={'/news/page'}>
            <a>
              <div
                className={`${
                  link === '/news/page' && 'border-b-4 border-primary-main'
                } py-[24px] shrink-0 hover:cursor-pointer`}
              >
                <Typography variant="body">Мэдээ</Typography>
              </div>
            </a>
          </Link>
          <div
            onClick={() => handleChangeMenu('/lead')}
            className={`${
              link === '/lead' && 'border-b-4 border-primary-main'
            } py-[24px] shrink-0 hover:cursor-pointer`}
          >
            <Typography variant="body">Lead</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
