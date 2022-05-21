import Typo from 'components/typography'

export const StartUp = () => {
  return (
    <div className="flex flex-col justify-center items-center p-[8px] mb-[173.3px]">
      <Typo variant="body-semibold" className="text-primary-main">
        Бидний тухай
      </Typo>
      <Typo variant="h2" className="text-[#0F233E]">
        НЭГ ГЭР БҮЛ
      </Typo>
      <div className="flex justify-center items-center flex-col">
        <Typo variant="body" className="text-[#0F233E] flex justify-center">
          Иргэн бүрийг тэгш хүртээмжтэй
        </Typo>
        <Typo variant="body" className="text-[#0F233E] flex justify-center">
          нийгмийг цогцлооход нэгдсэн нэг гэр бүл
        </Typo>
      </div>
      <img src="/static/shiid.webp" alt="" width={722} height={188} className=" mt-[50px]" />
    </div>
  )
}
export default StartUp
