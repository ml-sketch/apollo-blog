import { gql } from "@apollo/client";

const GET_ALL_SLUGS = gql`
  query {
    blogPosts {
      data {
        attributes {
          urlSlug
        }
      }
    }
  }
`;

const GET_ALL_POSTS = gql`
  query GetAllPosts($limit: Int, $start: Int) {
    events(
      pagination: { limit: $limit, start: $start }
      sort: "publishedAt:desc"
    ) {
      data {
        attributes {
          title
          description
          slug
          publishedAt
        }
      }
    }
  }
`;

const GET_INDIVIDUAL_POST = gql`
  query ($slugUrl: String!) {
    blogPosts(filters: { urlSlug: { eq: $slugUrl } }) {
      data {
        attributes {
          title
          content
        }
      }
    }
  }
`;

export { GET_ALL_POSTS, GET_INDIVIDUAL_POST, GET_ALL_SLUGS };
