import { Typography } from 'components'

export const ImgTxt = (props) => {
  const { posistion } = props

  return (
    <div className={`${posistion === 'right' ? 'flex flex-row-reverse' : 'flex'} max-w-1200px mx-auto `}>
      <img src="static/lead-logo.svg" className="flex h-400 max-w-[600px]"></img>
      <div className={`${posistion === 'right' ? 'mr-[72px] ' : 'ml-[72px] '} max-w-1/2 flex items-center`}>
        <div className="flex-col grid gap-y-6 justify-start ">
          <Typography variant="h3">Хэрхэн үүссэн бэ?</Typography>
          <Typography variant="body">
            ЛИЙД Төгсөгчдийн Холбоо нь ардчиллын үнэт зүйлийг бэхжүүлж, иргэн бүрийг тэгш хамруулсан тэгш хүртээмжтэй
            нийгмийг цогцлооход хувь нэмрээ оруулах зорилгоор 2018 оны 7-р сарын 9-нд ЛИЙД Монголиа (LEAD Mongolia)
            хөтөлбөрийн төгсөгчдийн санаачилгаар байгуулагдсан нийгэмд үйлчилдэг төрийн бус байгууллага юм.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default ImgTxt
