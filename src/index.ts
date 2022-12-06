import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client/core";
import { CUSTOMERS_QUERY } from "./queries/customers";
import {
  CachedEntitlementsQuery,
  CachedEntitlementsQueryVariables,
  FetchAddonsQuery,
  FetchAddonsQueryVariables,
  FetchCouponsQuery,
  FetchCouponsQueryVariables,
  FetchCustomersQuery,
  FetchCustomersQueryVariables,
  FetchFeaturesQuery,
  FetchFeaturesQueryVariables,
  FetchPlansQuery,
  FetchPlansQueryVariables,
  FetchProductsQuery,
  FetchProductsQueryVariables,
} from "./types";
import * as fs from "fs";
import fetch from "cross-fetch";
import { PRODUCTS_QUERY } from "./queries/products";
import { FEATURES_QUERY } from "./queries/featrues";
import { PLANS_QUERY } from "./queries/plans";
import { ADDONS_QUERY } from "./queries/addons";
import { COUPONS_QUERY } from "./queries/coupons";
import { ENTITLEMENTS_QUERY } from "./queries/entitlements";

const PAGE_SIZE = 20;

function getApolloClient(apiKey: string): ApolloClient<NormalizedCacheObject> {
  const httpLink = new HttpLink({
    uri: `https://api.stigg.io/graphql`,
    fetch,
  });

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        "X-API-KEY": apiKey,
      },
    });
    return forward(operation);
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    name: "export-data-example",
  });
}

async function exportCustomers(
  client: ApolloClient<NormalizedCacheObject>
): Promise<void> {
  console.log("Start exporting customers");
  let hasNextPage = true;
  let endCursor = "";
  const customers: any = [];
  while (hasNextPage) {
    const result = await client.query<
      FetchCustomersQuery,
      FetchCustomersQueryVariables
    >({
      query: CUSTOMERS_QUERY,
      variables: {
        paging: {
          after: endCursor,
          first: PAGE_SIZE,
        },
      },
    });

    const {
      data: {
        customers: {
          pageInfo: { hasNextPage: nextHasNextPage, endCursor: nextEndCursor },
          edges,
        },
      },
    } = result;
    const customerNodes = edges.map((edge) => edge.node);

    const entitlementsResult = await Promise.all(
      customerNodes.map((customer) =>
        fetchCustomerEntitlements(customer.customerId, client)
      )
    );
    entitlementsResult.forEach((customerEntitlements) => {
      const customerNode = customerNodes.find(
        (node) => node.customerId === customerEntitlements.customerId
      );
      customers.push({
        ...customerNode,
        entitlements: customerEntitlements.entitlements,
      });
    });
    hasNextPage = nextHasNextPage;
    endCursor = nextEndCursor;
  }

  writeToFile(customers, "customers");
  console.log("Finished exporting customers");
}

async function fetchCustomerEntitlements(
  customerId: string,
  client: ApolloClient<NormalizedCacheObject>
): Promise<{ customerId: string; entitlements: Array<Record<string, any>> }> {
  const entitlementsResult = await client.query<
    CachedEntitlementsQuery,
    CachedEntitlementsQueryVariables
  >({
    query: ENTITLEMENTS_QUERY,
    variables: { query: { customerId } },
  });

  console.log("Got entitlements for customer", customerId);
  return {
    customerId,
    entitlements: entitlementsResult.data.cachedEntitlements,
  };
}

async function exportProducts(
  client: ApolloClient<NormalizedCacheObject>
): Promise<void> {
  console.log("Started exporting products");

  let hasNextPage = true;
  let endCursor = "";
  const products = [];
  while (hasNextPage) {
    const result = await client.query<
      FetchProductsQuery,
      FetchProductsQueryVariables
    >({
      query: PRODUCTS_QUERY,
      variables: {
        paging: {
          after: endCursor,
          first: PAGE_SIZE,
        },
      },
    });

    const {
      data: {
        products: {
          edges,
          pageInfo: { hasNextPage: nextHasNextPage, endCursor: nextEndCursor },
        },
      },
    } = result;
    products.push(edges.map((product) => product.node));
    hasNextPage = nextHasNextPage;
    endCursor = nextEndCursor;
  }

  writeToFile(products, "products");
  console.log("Finished exporting products");
}

async function exportFeatures(
  client: ApolloClient<NormalizedCacheObject>
): Promise<void> {
  console.log("Started exporting features");

  let hasNextPage = true;
  let endCursor = "";
  const features = [];
  while (hasNextPage) {
    const result = await client.query<
      FetchFeaturesQuery,
      FetchFeaturesQueryVariables
    >({
      query: FEATURES_QUERY,
      variables: {
        paging: {
          after: endCursor,
          first: PAGE_SIZE,
        },
      },
    });

    const {
      data: {
        features: {
          edges,
          pageInfo: { hasNextPage: nextHasNextPage, endCursor: nextEndCursor },
        },
      },
    } = result;
    features.push(edges.map((feature) => feature.node));
    hasNextPage = nextHasNextPage;
    endCursor = nextEndCursor;
  }

  writeToFile(features, "features");
  console.log("Finished exporting features");
}

async function exportPlans(
  client: ApolloClient<NormalizedCacheObject>
): Promise<void> {
  console.log("Started exporting plans");

  let hasNextPage = true;
  let endCursor = "";
  const plans = [];
  while (hasNextPage) {
    const result = await client.query<
      FetchPlansQuery,
      FetchPlansQueryVariables
    >({
      query: PLANS_QUERY,
      variables: {
        paging: {
          after: endCursor,
          first: PAGE_SIZE,
        },
      },
    });

    const {
      data: {
        plans: {
          edges,
          pageInfo: { hasNextPage: nextHasNextPage, endCursor: nextEndCursor },
        },
      },
    } = result;
    plans.push(edges.map((plan) => plan.node));
    hasNextPage = nextHasNextPage;
    endCursor = nextEndCursor;
  }

  writeToFile(plans, "plans");
  console.log("Finished exporting plans");
}

async function exportAddons(
  client: ApolloClient<NormalizedCacheObject>
): Promise<void> {
  console.log("Started exporting addons");
  let hasNextPage = true;
  let endCursor = "";
  const addons = [];
  while (hasNextPage) {
    const result = await client.query<
      FetchAddonsQuery,
      FetchAddonsQueryVariables
    >({
      query: ADDONS_QUERY,
      variables: {
        paging: {
          after: endCursor,
          first: PAGE_SIZE,
        },
      },
    });

    const {
      data: {
        addons: {
          edges,
          pageInfo: { hasNextPage: nextHasNextPage, endCursor: nextEndCursor },
        },
      },
    } = result;
    addons.push(edges.map((addon) => addon.node));
    hasNextPage = nextHasNextPage;
    endCursor = nextEndCursor;
  }

  writeToFile(addons, "addons");
  console.log("Finished exporting addons");
}

async function exportCoupons(
  client: ApolloClient<NormalizedCacheObject>
): Promise<void> {
  console.log("Started exporting coupons");

  let hasNextPage = true;
  let endCursor = "";
  const coupons = [];
  while (hasNextPage) {
    const result = await client.query<
      FetchCouponsQuery,
      FetchCouponsQueryVariables
    >({
      query: COUPONS_QUERY,
      variables: {
        paging: {
          after: endCursor,
          first: PAGE_SIZE,
        },
      },
    });

    const {
      data: {
        coupons: {
          edges,
          pageInfo: { hasNextPage: nextHasNextPage, endCursor: nextEndCursor },
        },
      },
    } = result;
    coupons.push(edges.map((coupon) => coupon.node));
    hasNextPage = nextHasNextPage;
    endCursor = nextEndCursor;
  }

  writeToFile(coupons, "coupons");
  console.log("Finished exporting coupons");
}

function writeToFile(data: Array<Record<string, any>>, filename: string) {
  fs.writeFile(
    `./data/${filename}.json`,
    JSON.stringify(data),
    "utf8",
    function (err) {
      if (err) {
        return console.log(err);
      }
    }
  );
}

async function exportStiggData() {
  const apiKey = process.env.STIGG_SERVER_API_KEY;

  if (!apiKey) {
    throw new Error(
      'Make sure you define "STIGG_SERVER_API_KEY" environment variable'
    );
  }

  const client = getApolloClient(apiKey);
  await exportCustomers(client);
  await exportProducts(client);
  await exportFeatures(client);
  await exportPlans(client);
  await exportAddons(client);
  await exportCoupons(client);
}

exportStiggData()
  .then(() => {
    console.log('Export is done!');
    process.exit(0);
  })
  .catch((e) => {
    console.error("Error occurred", e);
    process.exit(1);
  });
