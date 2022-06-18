import { Config } from './config'

export default class ContentfulApi {
  static async callContentful(query) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`

    const fetchOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    }

    try {
      const data = await fetch(fetchUrl, fetchOptions).then((response) => response.json())
      return data
    } catch (error) {
      throw new Error('Could not fetch data from Contentful!')
    }
  }

  static async getTotalPostsNumber() {
    const query = `
    {
      leadNewsCollection{
        total
      }
    }`
    const response = await this.callContentful(query)
    const totalPosts = response?.data?.leadNewsCollection?.total ? response?.data?.leadNewsCollection?.total : 0
    return totalPosts
  }

  static async getPaginatedPostSummaries(page) {
    const skipMultiplier = page === 1 ? 0 : page - 1
    const skip = skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0

    const query = `
      query {
        leadNewsCollection(limit: ${Config.pagination.pageSize} , skip: ${skip} , order: id_ASC){
           total
           items{
            id
            date
            title
            info
            img{
              url
            }
            profession
          }
        }
      }`

    const response = await this.callContentful(query)

    const paginatedPostSummaries = response?.data?.leadNewsCollection
      ? response?.data?.leadNewsCollection
      : { total: 0, items: [] }

    return paginatedPostSummaries
  }
}
