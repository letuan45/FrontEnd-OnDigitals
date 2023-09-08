import { request, gql } from 'graphql-request'; 
export const getDataForNewAndInsightsSection = async () => {
  const endpoint = 'https://kimlongdiep.com/graphql';
  const query = gql`
  {
    posts (first:60) {
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
    console.error('Error fetching data', error);
    return []; 
  }
};
export const SearchPostsByKey = async ({ key }) => {
  const endpoint = 'https://kimlongdiep.com/graphql';
  const query = gql`
    query GetPosts($search: String!) {
      posts(where: { search: $search }) {
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
    const variables = { search: key };
    const data = await request(endpoint, query, variables);
    return data.posts.nodes;
  } catch (error) {
    console.error('Error fetching data', error);
    return [];
  }
};

