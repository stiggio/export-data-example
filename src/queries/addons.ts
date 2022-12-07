import { gql } from "@apollo/client/core";
export const ADDONS_QUERY = gql`
  query FetchAddons($paging: CursorPaging) {
    addons(paging: $paging) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
          refId
          displayName
          description
          billingId
          createdAt
          status
          versionNumber
          isLatest
          entitlements {
            id
            featureId
            usageLimit
            hasUnlimitedUsage
            resetPeriod
            resetPeriodConfiguration {
              __typename
              ... on MonthlyResetPeriodConfig {
                monthlyAccordingTo
              }
              ... on WeeklyResetPeriodConfig {
                weeklyAccordingTo
              }
            }
            feature {
              id
            }
          }
          product {
            id
          }
          prices {
            id
            billingModel
            billingPeriod
            price {
              amount
              currency
            }
            featureId
            crmId
            minUnitQuantity
            maxUnitQuantity
            feature {
              id
              refId
            }
          }
          pricingType
        }
      }
    }
  }
`;
