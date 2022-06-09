import { getAllPosts } from './fetch'

export const Datas = ({ res }) => {
  console.log(res)
  return <div>results</div>
}

export async function getStaticProps() {
  const data = await getAllPosts(
    'pagesCollection',
    `
    items{
      homePageCollection(limit: 20){
        items{
          ... on AmountOfPeople{
            amount
            type
          }
        }
      }
      aboutUsPageCollection(limit: 20){
        items{
          ... on AboutUsInfo{
             info
             title
             img{
              url
            }
           }
         ... on AbtLead{
           option
           info
        }
        }
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
