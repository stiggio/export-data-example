import { gql } from "@apollo/client/core";
export const PRODUCTS_QUERY = gql`
  query FetchProducts($paging: CursorPaging) {
    products(paging: $paging) {
      pageInfo {
        hasNextPage
        endCursor
        startCursor
      }
      edges {
        node {
          createdAt
          description
          id
          displayName
          refId
          isDefaultProduct
          environmentId
          updatedAt
          productSettings {
            subscriptionEndSetup
            subscriptionCancellationTime
            downgradePlan {
              refId
              id
            }
          }
        }
      }
    }
  }
`;
