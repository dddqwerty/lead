import { GirdPic } from 'components/hoverpic/index'
import { Button } from 'components'
import Link from 'next/link'

export const GridMain = () => {
  return (
    <div className="flex flex-col mx-auto max-w-[1592px] px-10">
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-y-9 relative gap-x-6">
        <GirdPic />
        <GirdPic />
        <GirdPic />
        <GirdPic />
        <GirdPic />
        <GirdPic />
        <GirdPic />
        <GirdPic />
      </div>
      {/* <div
        className={`hidden mt-9 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-y-9 relative `}
      >
        <GirdPic />
        <GirdPic />
        <GirdPic />
        <GirdPic />
        <GirdPic />
        <GirdPic />
        <GirdPic />
      </div> */}
      <Link href="/what-is-lead}">
        <a>
          <div className="flex justify-center mt-[64px]">
            <Button variant="ghost">Дэлгэрэнгүй</Button>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default GridMain
