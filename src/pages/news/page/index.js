import { MainLayout } from 'layout'
import { PADDINGX } from 'constants/layout'
import { Config } from 'utils/config'
import ContentfulApi from 'utils/contentfulApi'
import dynamic from 'next/dynamic'
import { Oval } from 'react-loader-spinner'

const PostList = dynamic(() => import('../../postLs'), { ssr: false })

export default function Medee({ totalPages, currentPage, postSummaries }) {
  return (
    <div>
      {postSummaries ? (
        <MainLayout classname={`flex flex-col mb-[148.75px] gap-[104px] mx-auto max-w-leadScreen ${PADDINGX}`}>
          <div className="h-[39px] " />
          <PostList posts={postSummaries} totalPages={totalPages} currentPage={currentPage} />
        </MainLayout>
      ) : (
        <div className="flex justify-center items-center w-[100vw] h-[100vh]">
          <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={0.5}
            strokeWidthSecondary={1.5}
            color="#9AC760"
            secondaryColor="white"
          />
        </div>
      )}
    </div>
  )
}

export async function getStaticProps() {
  const postSummaries = await ContentfulApi.getPaginatedPostSummaries(1)
  const totalPages = Math.ceil(postSummaries.total / Config.pagination.pageSize)
  return {
    props: {
      totalPages,
      currentPage: '1',
      postSummaries: postSummaries.items,
    },
  }
}
