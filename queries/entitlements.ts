import { gql } from "@apollo/client/core";

export const ENTITLEMENTS_QUERY = gql`
  query CachedEntitlements($query: FetchEntitlementsQuery!) {
    cachedEntitlements(query: $query) {
      isGranted
      accessDeniedReason
      customerId
      usageLimit
      hasUnlimitedUsage
      currentUsage
      requestedUsage
      nextResetDate
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
  }
`;
