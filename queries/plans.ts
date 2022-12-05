import { gql } from "@apollo/client/core";
export const PLANS_QUERY = gql`
  query FetchPlans($paging: CursorPaging) {
    plans(paging: $paging) {
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
          status
          billingId
          versionNumber
          isLatest
          defaultTrialConfig {
            units
            duration
          }
          basePlan {
            id
          }
          isParent
          product {
            id
          }
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
          compatibleAddons {
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
