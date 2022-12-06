import { gql } from "@apollo/client/core";

export const CUSTOMERS_QUERY = gql`
  query FetchCustomers($paging: CursorPaging) {
    customers(paging: $paging) {
      edges {
        node {
          additionalMetaData
          billingId
          coupon {
            id
          }
          customerId
          crmId
          defaultPaymentExpirationMonth
          defaultPaymentExpirationYear
          defaultPaymentMethodId
          defaultPaymentMethodLast4Digits
          defaultPaymentMethodType
          email
          name
          crmHubspotCompanyId
          createdAt
          promotionalEntitlements {
            description
            endDate
            featureId
            resetPeriod
            resetPeriodConfiguration {
              ... on WeeklyResetPeriodConfig {
                weeklyAccordingTo
              }
              ... on MonthlyResetPeriodConfig {
                monthlyAccordingTo
              }
            }
            startDate
            usageLimit
            isVisible
            unlimited
            feature {
              refId
            }
          }
          experiment {
            refId
          }
          excludeFromExperiment
          subscriptions {
            additionalMetaData
            addons {
              quantity
              addon {
                refId
                versionNumber
              }
            }
            cancelReason
            cancellationDate
            createdAt
            currentBillingPeriodEnd
            subscriptionId
            plan {
              refId
              versionNumber
            }
            billingId
            crmId
            isCustomPriceSubscription
            prices {
              usageLimit
              price {
                id
              }
            }
            status
            startDate
            trialEndDate
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
        startCursor
      }
    }
  }
`;
