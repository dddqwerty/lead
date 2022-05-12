import { Typography } from 'components'

export const Topic = () => {
  return (
    <div className="flex gap-[59px] mt-[115.42px] mb-[215px]">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <Typography variant="h3">Бидний баздаг сэдэвүүд</Typography>
          <Typography variant="body" className="w-[560px]">
            Доорх сэдвийн хүрээнд төвлөрөх бөгөөд хөтөлбөрийн оролцогчид эдгээрээс аль нэг сэдвийг сонгон төсөл
            хэрэгжүүлэх юм. Оролцогч төсөл хэрэгжүүлэхэд шаардлагатай ур чадварыг эзэмшүүлэх шаталсан сургалтад
            хамрагдана.
          </Typography>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex h-16 gap-4">
            <div className="w-16 bg-bgGrey1 rounded-full"></div>
            <Typography variant="body-semibold" className="h-16 flex items-center">
              Байгаль орчин, хотжилт
            </Typography>
          </div>
          <div className="flex h-16 gap-4">
            <div className="w-16 bg-bgGrey1 rounded-full"></div>
            <Typography variant="body-semibold" className="h-16 flex items-center">
              Авлигатай тэмцэх, ил тод байдлыг сайжруула
            </Typography>
          </div>
          <div className="flex h-16 gap-4">
            <div className="w-16 bg-bgGrey1 rounded-full"></div>
            <Typography variant="body-semibold" className="h-16 flex items-center">
              Ажилгүйдэл, ядуурлыг бууруулах
            </Typography>
          </div>
        </div>
      </div>
      <div>
        <img src="static/topic.svg" className="w-[702px] absolute top-[1470px] left-[600px]" />
      </div>
    </div>
  )
}

export default Topic
