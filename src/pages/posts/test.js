import { getAllPosts } from './fetch'

export const Datas = ({ res }) => {
  return (
    <div>
      {res.map((x, i) => {
        return (
          <div key={i}>
            {' '}
            Slug: {x.slug} , int: {x.integers}{' '}
          </div>
        )
      })}
    </div>
  )
}

export async function getStaticProps() {
  const data = await getAllPosts(
    'productsCollection',
    `
    items{
      slug
      integers
      connection
      thumb {
        title
        width
        height
        url
      }
    }
    `,
  )

  return {
    props: {
      res: data,
    },
  }
}

export default Datas
