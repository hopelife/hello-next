import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    users {
      id
      name
      nick
    }
  }
`;

export const USER_DETAILS = gql`
  query GetUserDetails($productId: ID!) {
    user(id: $userId) {
      id
      name
      nick
      level
    }
  }
`;