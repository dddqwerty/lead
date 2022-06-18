import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { Typography } from 'components'
import Image from 'next/image'
import Pagination from './paginate'

export default function PostList(props) {
  const { posts, currentPage, totalPages } = props
  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10)
  const prevDisabled = parseInt(currentPage, 10) === 1
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        {posts &&
          posts.map((x, i) => {
            return (
              <div
                className="flex flex-col gap-6 rounded-lg shadow-[0_0_24px_rgba(0,0,0,0.05)] max-w-[601px] px-8 pt-8 border-[0.5px] border-solid border-[rgba(15, 35, 62, 0.15)] h-[327px] cursor-pointer"
                key={i}
                onClick={() => (window.location.href = `/news/${x.id}`)}
              >
                <div>
                  <Image src={x.img.url} width={537} height={133} alt="" />
                </div>
                <div className="flex flex-col max-w-[434px]">
                  <Typography variant="body-bold" className="text-primary-dark">
                    {x.date.slice(0, 10)}
                  </Typography>
                  <div className="flex flex-col gap-2">
                    <Typography variant={matches ? 'mobile' : 'h3'} className="h-[56px] truncate">
                      {x.title}
                    </Typography>
                    <div className="mb-5">
                      <Typography className="truncate"> {x.info} </Typography>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        nextDisabled={nextDisabled}
        prevDisabled={prevDisabled}
      />
    </>
  )
}
