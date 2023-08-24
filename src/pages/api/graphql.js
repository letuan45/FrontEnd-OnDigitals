import { request, gql } from 'graphql-request'; 
export const getDataForNewAndInsightsSection = async () => {
  const endpoint = 'https://kimlongdiep.com/graphql';
  const query = gql`
  {
    posts {
      nodes {
        id
        title
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        link
      }
    }
  }
`;
  try {
    const data = await request(endpoint, query);
    return data.posts.nodes;
  } catch (error) {
    console.error('Error fetching data:sadadas', error);
    return []; 
  }
};
