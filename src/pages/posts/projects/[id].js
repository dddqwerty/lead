import { getAllPosts, getAllPostsWithId } from '../fetch'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { useEffect, useState } from 'react'

export const SpecDatas = ({ projects, para }) => {
  const [id, setId] = useState(null)
  console.log(projects, para)
  useEffect(() => {
    if (para !== undefined) {
      setId(para.id[0])
    }
  }, [id, para])

  const router = useRouter()

  if (!router.isFallback && !projects) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <div>
      {projects && id !== null && id ? (
        <div>
          {' '}
          ID: {projects[0].leadPrjsCollection.items[Number(id)].id}
          <br />
          Type: {projects[0].leadPrjsCollection.items[Number(id)].prjType}
          <br />
          Date: {projects[0].leadPrjsCollection.items[Number(id)].date.slice(0, 10)}
          <br />
          Title: {projects[0].leadPrjsCollection.items[Number(id)].title}
          <br />
        </div>
      ) : (
        <div> wait </div>
      )}
    </div>
  )
}

export default SpecDatas

export async function getStaticProps({ params }) {
  const datas = await getAllPosts(
    'pagesCollection',
    `
   items {
    leadPrjsCollection {
        items {
         date
         title
         prjType
         id
       }
     } 
    } 
   `,
  )

  return {
    props: {
      projects: datas,
      para: params !== undefined ? params : console.log('awaiting'),
    },
  }
}

export async function getStaticPaths() {
  const lnks = await getAllPostsWithId(
    'pagesCollection',
    `
  items {
    leadPrjsCollection {
        items {
         date
         title
         prjType
         id
       }
     } 
  `,
  )

  return {
    paths: lnks === undefined ? [] : lnks[0]?.leadPrjsCollection?.items?.map((x) => `/posts/projects/${x.id}`) ?? [],
    fallback: true,
  }
}
