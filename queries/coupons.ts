import {gql} from "@apollo/client/core";
export const COUPONS_QUERY = gql`
      query FetchCoupons($paging: CursorPaging) {
    coupons(paging: $paging) {
        pageInfo {
            hasNextPage
            endCursor
            startCursor
        }
      edges {
        node {
            id
            discountValue
            type
            additionalMetaData
            refId
            name
            description
            createdAt
            updatedAt
            billingId
            type
            status
        }
      }
    }
  }
`