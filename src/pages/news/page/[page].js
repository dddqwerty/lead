import { PADDINGX } from 'constants/layout'
import { MainLayout } from 'layout'
import dynamic from 'next/dynamic'
import { Config } from 'utils/config'
import ContentfulApi from 'utils/contentfulApi'
const PostList = dynamic(() => import('pages/postLs'), { ssr: false })

export default function BlogIndexPage(props) {
  const { postSummaries, totalPages, currentPage } = props

  return (
    <MainLayout classname={`flex flex-col mb-[148.75px] gap-[104px] mx-auto max-w-leadScreen ${PADDINGX}`}>
      <div className="h-[39px] " />
      <PostList posts={postSummaries} totalPages={totalPages} currentPage={currentPage} />
    </MainLayout>
  )
}

export async function getStaticPaths() {
  const totalPosts = await ContentfulApi.getTotalPostsNumber()
  const totalPages = Math.ceil(totalPosts / Config.pagination.pageSize)

  const paths = []
  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } })
  }

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postSummaries = await ContentfulApi.getPaginatedPostSummaries(params.page)
  const totalPages = Math.ceil(postSummaries.total / Config.pagination.pageSize)

  return {
    props: {
      postSummaries: postSummaries.items,
      totalPages,
      currentPage: params.page,
    },
  }
}
