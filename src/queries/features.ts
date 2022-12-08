import { gql } from "@apollo/client/core";
export const FEATURES_QUERY = gql`
  query FetchFeatures($paging: CursorPaging) {
    features(paging: $paging) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
          displayName
          description
          updatedAt
          refId
          featureStatus
          environmentId
          featureType
          meterType
          featureUnits
          featureUnitsPlural
        }
      }
    }
  }
`;
