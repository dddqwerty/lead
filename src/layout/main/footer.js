import { Typography } from 'components'
import { handleIcon } from 'utils'

export const Footer = () => {
  return (
    <footer className="bg-blackLgiht flex justify-center text-white pb-[16.25px] pt-[77.75px]">
      <div className="mx-auto max-w-leadScreen w-screen flex flex-col gap-[40px] overflow-hidden">
        <div className="w-full justify-center flex">
          <img src="/static/lead-white-logo.svg" className="w-[140px]"></img>
        </div>
        <div className="flex w-full justify-center relative gap-[24px]">
          <div
            className="h-[40px] w-[40px] items-center justify-center flex border-border-grey border-solid border rounded-full z-10 bg-blackLgiht cursor-pointer"
            onClick={() => window.open('https://www.facebook.com/LEADAlumniAssociation/', '_blank')}
          >
            {handleIcon({
              icon: 'facebook',
              size: '20',
            })}
          </div>
          <div
            className="h-[40px] w-[40px] items-center justify-center flex border-border-grey border-solid border rounded-full z-10 bg-blackLgiht cursor-pointer"
            onClick={() => window.open('https://www.instagram.com/leadalumniassociation/?hl=en', '_blank')}
          >
            {handleIcon({
              icon: 'instagram',
              size: '20',
            })}
          </div>
          <div
            className="h-[40px] w-[40px] items-center justify-center flex border-border-grey border-solid border rounded-full z-10 bg-blackLgiht cursor-pointer"
            onClick={() => window.open('https://twitter.com/MongoliaLeads', '_blank')}
          >
            {handleIcon({
              icon: 'twitter',
              size: '20',
            })}
          </div>
          <div className="absolute h-[0.7px] w-screen bg-border-grey z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <Typography variant="subhead" className="text-center">
          © Зохиогчийн бүх эрх Нэст Академид <br /> харьяалагдана. 2022 он
        </Typography>
      </div>
    </footer>
  )
}

export default Footer
