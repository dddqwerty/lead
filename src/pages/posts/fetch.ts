export async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
};

function extractPostEntries(fetchResponse , param: any) {
return fetchResponse?.data?.[param]?.items
}

export async function getAllPosts(contentType: any , datas: any) {
const entries = await fetchGraphQL(
  `query {
    ${contentType} {
      ${datas}
    }
  }`
);

return extractPostEntries(entries , contentType); 
};

export async function getAllPostsWithId(contentType: any , datas: any) {
    const entries = await fetchGraphQL(
       `query {
          ${contentType} {
              ${datas}
          }
       }`
    ); 

    extractPostEntries(entries , contentType); 
}; 