export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ConnectionCursor: any;
  DateTime: any;
  JSON: any;
};

/** DenyReason of get access policy */
export enum AccessDeniedReason {
  CustomerNotFound = "CustomerNotFound",
  FeatureNotFound = "FeatureNotFound",
  NoActiveSubscription = "NoActiveSubscription",
  NoFeatureEntitlementInSubscription = "NoFeatureEntitlementInSubscription",
  RequestedUsageExceedingLimit = "RequestedUsageExceedingLimit",
  Unknown = "Unknown",
}

export type AddCompatibleAddonsToPlanInput = {
  /** The id of the record. */
  id: Scalars["String"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["String"]>;
};

export type AddonCreateInput = {
  additionalMetaData?: InputMaybe<Scalars["JSON"]>;
  billingId?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  displayName: Scalars["String"];
  environmentId?: InputMaybe<Scalars["String"]>;
  productId: Scalars["String"];
  refId?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<PackageStatus>;
};

export type AddonFilter = {
  and?: InputMaybe<Array<AddonFilter>>;
  billingId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  displayName?: InputMaybe<StringFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  isLatest?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<AddonFilter>>;
  pricingType?: InputMaybe<PricingTypeFilterComparison>;
  productId?: InputMaybe<StringFieldComparison>;
  refId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<PackageStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  versionNumber?: InputMaybe<IntFieldComparison>;
};

export type AddonSort = {
  direction: SortDirection;
  field: AddonSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AddonSortFields {
  BillingId = "billingId",
  CreatedAt = "createdAt",
  Description = "description",
  DisplayName = "displayName",
  EnvironmentId = "environmentId",
  Id = "id",
  IsLatest = "isLatest",
  PricingType = "pricingType",
  ProductId = "productId",
  RefId = "refId",
  Status = "status",
  UpdatedAt = "updatedAt",
  VersionNumber = "versionNumber",
}

export type AddonUpdateInput = {
  additionalMetaData?: InputMaybe<Scalars["JSON"]>;
  billingId?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  displayName: Scalars["String"];
  id: Scalars["String"];
  status?: InputMaybe<PackageStatus>;
};

export type Address = {
  addressLine1?: InputMaybe<Scalars["String"]>;
  addressLine2?: InputMaybe<Scalars["String"]>;
  city?: InputMaybe<Scalars["String"]>;
  country?: InputMaybe<Scalars["String"]>;
  phoneNumber?: InputMaybe<Scalars["String"]>;
  postalCode?: InputMaybe<Scalars["String"]>;
  state?: InputMaybe<Scalars["String"]>;
};

export type ApiKeyFilter = {
  and?: InputMaybe<Array<ApiKeyFilter>>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ApiKeyFilter>>;
};

export type ApiKeySort = {
  direction: SortDirection;
  field: ApiKeySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ApiKeySortFields {
  Id = "id",
}

export enum ApiKeyType {
  Client = "CLIENT",
  Server = "SERVER",
}

export type ArchiveCouponInput = {
  environmentId?: InputMaybe<Scalars["String"]>;
  refId: Scalars["String"];
};

export type ArchivePlanInput = {
  environmentId?: InputMaybe<Scalars["String"]>;
  id: Scalars["String"];
};

export type AttachCustomerPaymentMethodInput = {
  customerId?: InputMaybe<Scalars["String"]>;
  environmentId?: InputMaybe<Scalars["String"]>;
  paymentMethodId: Scalars["String"];
  refId?: InputMaybe<Scalars["String"]>;
  vendorIdentifier: VendorIdentifier;
};

export enum BillingAnchor {
  StartOfTheMonth = "START_OF_THE_MONTH",
  SubscriptionStart = "SUBSCRIPTION_START",
}

/** Billing model. */
export enum BillingModel {
  FlatFee = "FLAT_FEE",
  PerUnit = "PER_UNIT",
  UsageBased = "USAGE_BASED",
}

export type BillingModelFilterComparison = {
  eq?: InputMaybe<BillingModel>;
  gt?: InputMaybe<BillingModel>;
  gte?: InputMaybe<BillingModel>;
  iLike?: InputMaybe<BillingModel>;
  in?: InputMaybe<Array<BillingModel>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<BillingModel>;
  lt?: InputMaybe<BillingModel>;
  lte?: InputMaybe<BillingModel>;
  neq?: InputMaybe<BillingModel>;
  notILike?: InputMaybe<BillingModel>;
  notIn?: InputMaybe<Array<BillingModel>>;
  notLike?: InputMaybe<BillingModel>;
};

/** Billing period. */
export enum BillingPeriod {
  Annually = "ANNUALLY",
  Monthly = "MONTHLY",
}

export type BillingPeriodFilterComparison = {
  eq?: InputMaybe<BillingPeriod>;
  gt?: InputMaybe<BillingPeriod>;
  gte?: InputMaybe<BillingPeriod>;
  iLike?: InputMaybe<BillingPeriod>;
  in?: InputMaybe<Array<BillingPeriod>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<BillingPeriod>;
  lt?: InputMaybe<BillingPeriod>;
  lte?: InputMaybe<BillingPeriod>;
  neq?: InputMaybe<BillingPeriod>;
  notILike?: InputMaybe<BillingPeriod>;
  notIn?: InputMaybe<Array<BillingPeriod>>;
  notLike?: InputMaybe<BillingPeriod>;
};

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
};

export enum ChangeType {
  Added = "ADDED",
  Deleted = "DELETED",
  Modified = "MODIFIED",
  Reordered = "REORDERED",
}

export type CheckoutOptions = {
  allowPromoCodes?: InputMaybe<Scalars["Boolean"]>;
  cancelUrl: Scalars["String"];
  collectBillingAddress?: InputMaybe<Scalars["Boolean"]>;
  successUrl: Scalars["String"];
};

export type CouponFilter = {
  and?: InputMaybe<Array<CouponFilter>>;
  billingId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  customers?: InputMaybe<CouponFilterCustomerFilter>;
  description?: InputMaybe<StringFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CouponFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<CouponStatusFilterComparison>;
  type?: InputMaybe<CouponTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CouponFilterCustomerFilter = {
  and?: InputMaybe<Array<CouponFilterCustomerFilter>>;
  billingId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  crmHubspotCompanyId?: InputMaybe<StringFieldComparison>;
  crmHubspotCompanyUrl?: InputMaybe<StringFieldComparison>;
  crmId?: InputMaybe<StringFieldComparison>;
  customerId?: InputMaybe<StringFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CouponFilterCustomerFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CouponSort = {
  direction: SortDirection;
  field: CouponSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CouponSortFields {
  BillingId = "billingId",
  CreatedAt = "createdAt",
  Description = "description",
  EnvironmentId = "environmentId",
  Id = "id",
  Name = "name",
  RefId = "refId",
  Status = "status",
  Type = "type",
  UpdatedAt = "updatedAt",
}

/** The status of the coupon */
export enum CouponStatus {
  Active = "ACTIVE",
  Archived = "ARCHIVED",
}

export type CouponStatusFilterComparison = {
  eq?: InputMaybe<CouponStatus>;
  gt?: InputMaybe<CouponStatus>;
  gte?: InputMaybe<CouponStatus>;
  iLike?: InputMaybe<CouponStatus>;
  in?: InputMaybe<Array<CouponStatus>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<CouponStatus>;
  lt?: InputMaybe<CouponStatus>;
  lte?: InputMaybe<CouponStatus>;
  neq?: InputMaybe<CouponStatus>;
  notILike?: InputMaybe<CouponStatus>;
  notIn?: InputMaybe<Array<CouponStatus>>;
  notLike?: InputMaybe<CouponStatus>;
};

/** The type of the coupon */
export enum CouponType {
  Fixed = "FIXED",
  Percentage = "PERCENTAGE",
}

export type CouponTypeFilterComparison = {
  eq?: InputMaybe<CouponType>;
  gt?: InputMaybe<CouponType>;
  gte?: InputMaybe<CouponType>;
  iLike?: InputMaybe<CouponType>;
  in?: InputMaybe<Array<CouponType>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<CouponType>;
  lt?: InputMaybe<CouponType>;
  lte?: InputMaybe<CouponType>;
  neq?: InputMaybe<CouponType>;
  notILike?: InputMaybe<CouponType>;
  notIn?: InputMaybe<Array<CouponType>>;
  notLike?: InputMaybe<CouponType>;
};

export type CreateCouponInput = {
  additionalMetaData?: InputMaybe<Scalars["JSON"]>;
  description?: InputMaybe<Scalars["String"]>;
  discountValue: Scalars["Float"];
  environmentId?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  refId: Scalars["String"];
  type: CouponType;
};

export type CreateEnvironment = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  displayName?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  provisionStatus?: InputMaybe<EnvironmentProvisionStatus>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type CreateEnvironmentOptions = {
  createDefaultProduct?: InputMaybe<Scalars["Boolean"]>;
};

export type CreateExperimentInput = {
  controlGroupName: Scalars["String"];
  description?: InputMaybe<Scalars["String"]>;
  environmentId?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  productId: Scalars["String"];
  productSettings?: InputMaybe<ProductSettingsInput>;
  variantGroupName: Scalars["String"];
  variantPercentage: Scalars["Float"];
};

export type CreateHook = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  endpoint?: InputMaybe<Scalars["String"]>;
  environmentId?: InputMaybe<Scalars["String"]>;
  eventLogTypes?: InputMaybe<Array<EventLogType>>;
  id?: InputMaybe<Scalars["String"]>;
  secretKey?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<HookStatus>;
};

export type CreateIntegrationInput = {
  environmentId: Scalars["String"];
  hubspotCredentials?: InputMaybe<HubspotCredentialsInput>;
  stripeCredentials?: InputMaybe<StripeCredentialsInput>;
  vendorIdentifier: VendorIdentifier;
  zuoraCredentials?: InputMaybe<ZuoraCredentialsInput>;
};

export type CreateManyPackageEntitlementsInput = {
  /** Array of records to create */
  packageEntitlements: Array<PackageEntitlementInput>;
};

export type CreateManyPromotionalEntitlementsInput = {
  /** Array of records to create */
  promotionalEntitlements: Array<PromotionalEntitlementInput>;
};

export type CreateOneEnvironmentInput = {
  environment: CreateEnvironment;
  options?: InputMaybe<CreateEnvironmentOptions>;
};

export type CreateOneFeatureInput = {
  /** The record to create */
  feature: FeatureInput;
};

export type CreateOneHookInput = {
  /** The record to create */
  hook: CreateHook;
};

export type CreateOneIntegrationInput = {
  /** The record to create */
  integration: CreateIntegrationInput;
};

export type CreateOneProductInput = {
  /** The record to create */
  product: ProductCreateInput;
};

/** Currency */
export enum Currency {
  Ils = "ILS",
  Usd = "USD",
}

export type CursorPaging = {
  /** Paginate after opaque cursor */
  after?: InputMaybe<Scalars["ConnectionCursor"]>;
  /** Paginate before opaque cursor */
  before?: InputMaybe<Scalars["ConnectionCursor"]>;
  /** Paginate first */
  first?: InputMaybe<Scalars["Int"]>;
  /** Paginate last */
  last?: InputMaybe<Scalars["Int"]>;
};

export type CustomerBillingInfo = {
  billingAddress?: InputMaybe<Address>;
  currency?: InputMaybe<Currency>;
  invoiceCustomFields?: InputMaybe<Scalars["JSON"]>;
  language?: InputMaybe<Scalars["String"]>;
  paymentMethodId?: InputMaybe<Scalars["String"]>;
  shippingAddress?: InputMaybe<Address>;
  taxIds?: InputMaybe<Array<TaxExempt>>;
  timezone?: InputMaybe<Scalars["String"]>;
};

export type CustomerFilter = {
  and?: InputMaybe<Array<CustomerFilter>>;
  billingId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  crmHubspotCompanyId?: InputMaybe<StringFieldComparison>;
  crmHubspotCompanyUrl?: InputMaybe<StringFieldComparison>;
  crmId?: InputMaybe<StringFieldComparison>;
  customerId?: InputMaybe<StringFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CustomerFilter>>;
  promotionalEntitlements?: InputMaybe<CustomerFilterPromotionalEntitlementFilter>;
  refId?: InputMaybe<StringFieldComparison>;
  subscriptions?: InputMaybe<CustomerFilterCustomerSubscriptionFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CustomerFilterCustomerSubscriptionFilter = {
  and?: InputMaybe<Array<CustomerFilterCustomerSubscriptionFilter>>;
  billingId?: InputMaybe<StringFieldComparison>;
  cancelReason?: InputMaybe<SubscriptionCancelReasonFilterComparison>;
  cancellationDate?: InputMaybe<DateFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  crmId?: InputMaybe<StringFieldComparison>;
  crmLinkUrl?: InputMaybe<StringFieldComparison>;
  effectiveEndDate?: InputMaybe<DateFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CustomerFilterCustomerSubscriptionFilter>>;
  pricingType?: InputMaybe<PricingTypeFilterComparison>;
  refId?: InputMaybe<StringFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<SubscriptionStatusFilterComparison>;
  subscriptionId?: InputMaybe<StringFieldComparison>;
  trialEndDate?: InputMaybe<DateFieldComparison>;
};

export type CustomerFilterPromotionalEntitlementFilter = {
  and?: InputMaybe<Array<CustomerFilterPromotionalEntitlementFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CustomerFilterPromotionalEntitlementFilter>>;
  status?: InputMaybe<PromotionalEntitlementStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CustomerInput = {
  additionalMetaData?: InputMaybe<Scalars["JSON"]>;
  billingId?: InputMaybe<Scalars["String"]>;
  billingInformation?: InputMaybe<CustomerBillingInfo>;
  couponRefId?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  crmId?: InputMaybe<Scalars["String"]>;
  customerId?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  environmentId?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["String"]>;
  shouldSyncFree?: InputMaybe<Scalars["Boolean"]>;
};

export type CustomerPortalInput = {
  customerId: Scalars["String"];
};

export type CustomerSort = {
  direction: SortDirection;
  field: CustomerSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CustomerSortFields {
  BillingId = "billingId",
  CreatedAt = "createdAt",
  CrmHubspotCompanyId = "crmHubspotCompanyId",
  CrmHubspotCompanyUrl = "crmHubspotCompanyUrl",
  CrmId = "crmId",
  CustomerId = "customerId",
  Email = "email",
  EnvironmentId = "environmentId",
  Id = "id",
  Name = "name",
  RefId = "refId",
  UpdatedAt = "updatedAt",
}

export type CustomerSubscriptionFilter = {
  addons?: InputMaybe<CustomerSubscriptionFilterSubscriptionAddonFilter>;
  and?: InputMaybe<Array<CustomerSubscriptionFilter>>;
  billingId?: InputMaybe<StringFieldComparison>;
  cancelReason?: InputMaybe<SubscriptionCancelReasonFilterComparison>;
  cancellationDate?: InputMaybe<DateFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  crmId?: InputMaybe<StringFieldComparison>;
  crmLinkUrl?: InputMaybe<StringFieldComparison>;
  customer?: InputMaybe<CustomerSubscriptionFilterCustomerFilter>;
  effectiveEndDate?: InputMaybe<DateFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CustomerSubscriptionFilter>>;
  prices?: InputMaybe<CustomerSubscriptionFilterSubscriptionPriceFilter>;
  pricingType?: InputMaybe<PricingTypeFilterComparison>;
  refId?: InputMaybe<StringFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<SubscriptionStatusFilterComparison>;
  subscriptionId?: InputMaybe<StringFieldComparison>;
  trialEndDate?: InputMaybe<DateFieldComparison>;
};

export type CustomerSubscriptionFilterCustomerFilter = {
  and?: InputMaybe<Array<CustomerSubscriptionFilterCustomerFilter>>;
  billingId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  crmHubspotCompanyId?: InputMaybe<StringFieldComparison>;
  crmHubspotCompanyUrl?: InputMaybe<StringFieldComparison>;
  crmId?: InputMaybe<StringFieldComparison>;
  customerId?: InputMaybe<StringFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CustomerSubscriptionFilterCustomerFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CustomerSubscriptionFilterSubscriptionAddonFilter = {
  and?: InputMaybe<Array<CustomerSubscriptionFilterSubscriptionAddonFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CustomerSubscriptionFilterSubscriptionAddonFilter>>;
  quantity?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CustomerSubscriptionFilterSubscriptionPriceFilter = {
  and?: InputMaybe<Array<CustomerSubscriptionFilterSubscriptionPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CustomerSubscriptionFilterSubscriptionPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  usageLimit?: InputMaybe<NumberFieldComparison>;
};

export type CustomerSubscriptionSort = {
  direction: SortDirection;
  field: CustomerSubscriptionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CustomerSubscriptionSortFields {
  BillingId = "billingId",
  CancelReason = "cancelReason",
  CancellationDate = "cancellationDate",
  CreatedAt = "createdAt",
  CrmId = "crmId",
  CrmLinkUrl = "crmLinkUrl",
  EffectiveEndDate = "effectiveEndDate",
  EndDate = "endDate",
  EnvironmentId = "environmentId",
  Id = "id",
  PricingType = "pricingType",
  RefId = "refId",
  StartDate = "startDate",
  Status = "status",
  SubscriptionId = "subscriptionId",
  TrialEndDate = "trialEndDate",
}

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  neq?: InputMaybe<Scalars["DateTime"]>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars["DateTime"];
  upper: Scalars["DateTime"];
};

export type DefaultTrialConfigInputDto = {
  duration?: InputMaybe<Scalars["Float"]>;
  units?: InputMaybe<TrialPeriodUnits>;
};

export type DeleteCustomerInput = {
  environmentId?: InputMaybe<Scalars["String"]>;
  id: Scalars["String"];
};

export type DeleteFeatureInput = {
  environmentId?: InputMaybe<Scalars["String"]>;
  id: Scalars["String"];
};

export type DeleteOneAddonInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type DeleteOneEnvironmentInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type DeleteOneHookInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type DeleteOneIntegrationInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type DeleteOnePackageEntitlementInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type DeleteOnePriceInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type DeleteOneProductInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type DeleteOnePromotionalEntitlementInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type DiscardPackageDraftInput = {
  environmentId: Scalars["String"];
  refId: Scalars["String"];
};

export type EntitlementCheckRequested = {
  customerId: Scalars["String"];
  entitlementCheckResult: EntitlementCheckResult;
  environmentId?: InputMaybe<Scalars["String"]>;
  featureId: Scalars["String"];
  requestedUsage?: InputMaybe<Scalars["Float"]>;
};

export type EntitlementCheckResult = {
  accessDeniedReason?: InputMaybe<AccessDeniedReason>;
  currentUsage?: InputMaybe<Scalars["Float"]>;
  hasAccess: Scalars["Boolean"];
  hasUnlimitedUsage?: InputMaybe<Scalars["Boolean"]>;
  monthlyResetPeriodConfiguration?: InputMaybe<MonthlyResetPeriodConfigInput>;
  nextResetDate?: InputMaybe<Scalars["DateTime"]>;
  requestedUsage?: InputMaybe<Scalars["Float"]>;
  resetPeriod?: InputMaybe<EntitlementResetPeriod>;
  usageLimit?: InputMaybe<Scalars["Float"]>;
  weeklyResetPeriodConfiguration?: InputMaybe<WeeklyResetPeriodConfigInput>;
};

export type EntitlementOptions = {
  requestedUsage?: InputMaybe<Scalars["Float"]>;
  shouldTrack?: InputMaybe<Scalars["Boolean"]>;
};

/** Entitlement reset period. */
export enum EntitlementResetPeriod {
  Day = "DAY",
  Hour = "HOUR",
  Month = "MONTH",
  Week = "WEEK",
}

export enum EntitySelectionMode {
  BlackList = "BLACK_LIST",
  WhiteList = "WHITE_LIST",
}

export type EnvironmentFilter = {
  and?: InputMaybe<Array<EnvironmentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  displayName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EnvironmentFilter>>;
  slug?: InputMaybe<StringFieldComparison>;
};

/** EnvironmentProvisionStatus. */
export enum EnvironmentProvisionStatus {
  Done = "DONE",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  NotProvisioned = "NOT_PROVISIONED",
}

export type EnvironmentSort = {
  direction: SortDirection;
  field: EnvironmentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum EnvironmentSortFields {
  CreatedAt = "createdAt",
  DisplayName = "displayName",
  Id = "id",
  Slug = "slug",
}

/** error codes */
export enum ErrorCode {
  AccountNotFoundError = "AccountNotFoundError",
  AddonHasToHavePriceError = "AddonHasToHavePriceError",
  AddonNotFound = "AddonNotFound",
  ArchivedCouponCantBeApplied = "ArchivedCouponCantBeApplied",
  BadUserInput = "BadUserInput",
  BillingPeriodMissingError = "BillingPeriodMissingError",
  CannotDeleteCustomerError = "CannotDeleteCustomerError",
  CannotDeleteFeatureError = "CannotDeleteFeatureError",
  CannotEditPackageInNonDraftMode = "CannotEditPackageInNonDraftMode",
  CheckoutIsNotSupported = "CheckoutIsNotSupported",
  CheckoutOptionsMissing = "CheckoutOptionsMissing",
  CouponNotFound = "CouponNotFound",
  CustomerAlreadyUsesCoupon = "CustomerAlreadyUsesCoupon",
  CustomerHasNoPaymentMethod = "CustomerHasNoPaymentMethod",
  CustomerNoBillingId = "CustomerNoBillingId",
  CustomerNotFound = "CustomerNotFound",
  DraftPlanCantBeArchived = "DraftPlanCantBeArchived",
  DuplicatedEntityNotAllowed = "DuplicatedEntityNotAllowed",
  EditAllowedOnDraftPackageOnlyError = "EditAllowedOnDraftPackageOnlyError",
  EntitlementsMustBelongToSamePackage = "EntitlementsMustBelongToSamePackage",
  EntityIdDifferentFromRefIdError = "EntityIdDifferentFromRefIdError",
  EnvironmentMissing = "EnvironmentMissing",
  ExperimentAlreadyRunning = "ExperimentAlreadyRunning",
  ExperimentNotFoundError = "ExperimentNotFoundError",
  ExperimentStatusError = "ExperimentStatusError",
  FailedToImportCustomer = "FailedToImportCustomer",
  FeatureNotFound = "FeatureNotFound",
  IdentityForbidden = "IdentityForbidden",
  ImportAlreadyInProgress = "ImportAlreadyInProgress",
  InitStripePaymentMethodError = "InitStripePaymentMethodError",
  IntegrationNotFound = "IntegrationNotFound",
  IntegrityViolation = "IntegrityViolation",
  InvalidAddressError = "InvalidAddressError",
  InvalidArgumentError = "InvalidArgumentError",
  InvalidCancellationDate = "InvalidCancellationDate",
  InvalidEntitlementResetPeriod = "InvalidEntitlementResetPeriod",
  InvalidMemberDelete = "InvalidMemberDelete",
  InvalidQuantity = "InvalidQuantity",
  InvalidSubscriptionStatus = "InvalidSubscriptionStatus",
  InvalidUpdatePriceUnitAmountError = "InvalidUpdatePriceUnitAmountError",
  InvalidUsageValueForIncrementalFeatureError = "InvalidUsageValueForIncrementalFeatureError",
  MemberInvitationError = "MemberInvitationError",
  MemberNotFound = "MemberNotFound",
  MeteringNotAvailableForFeatureType = "MeteringNotAvailableForFeatureType",
  MissingEntityIdError = "MissingEntityIdError",
  NoFeatureEntitlementInSubscription = "NoFeatureEntitlementInSubscription",
  OperationNotAllowedDuringInProgressExperiment = "OperationNotAllowedDuringInProgressExperiment",
  PackageAlreadyPublished = "PackageAlreadyPublished",
  PackagePricingTypeNotSet = "PackagePricingTypeNotSet",
  PlanAlreadyExtended = "PlanAlreadyExtended",
  PlanIsUsedAsDefaultStartPlan = "PlanIsUsedAsDefaultStartPlan",
  PlanIsUsedAsDowngradePlan = "PlanIsUsedAsDowngradePlan",
  PlanNotFound = "PlanNotFound",
  PlanWithChildCantBeDeleted = "PlanWithChildCantBeDeleted",
  PlansCircularDependencyError = "PlansCircularDependencyError",
  PriceNotFound = "PriceNotFound",
  RateLimitExceeded = "RateLimitExceeded",
  ResyncAlreadyInProgress = "ResyncAlreadyInProgress",
  SelectedBillingModelDoesntMatchImportedItemError = "SelectedBillingModelDoesntMatchImportedItemError",
  StripeCustomerIsDeleted = "StripeCustomerIsDeleted",
  SubscriptionAlreadyCanceledOrExpired = "SubscriptionAlreadyCanceledOrExpired",
  SubscriptionMustHaveSinglePlanError = "SubscriptionMustHaveSinglePlanError",
  SubscriptionNotFound = "SubscriptionNotFound",
  TrialMinDateError = "TrialMinDateError",
  TrialMustBeCancelledImmediately = "TrialMustBeCancelledImmediately",
  UnPublishedPackage = "UnPublishedPackage",
  Unauthenticated = "Unauthenticated",
  UncompatibleSubscriptionAddon = "UncompatibleSubscriptionAddon",
  UnexpectedError = "UnexpectedError",
  UnsupportedFeatureType = "UnsupportedFeatureType",
  UnsupportedVendorIdentifier = "UnsupportedVendorIdentifier",
}

export type EstimateSubscriptionInput = {
  addons?: InputMaybe<Array<SubscriptionAddonInput>>;
  billingInformation?: InputMaybe<SubscriptionBillingInfo>;
  billingPeriod?: InputMaybe<BillingPeriod>;
  customerId: Scalars["String"];
  environmentId?: InputMaybe<Scalars["String"]>;
  planId?: InputMaybe<Scalars["String"]>;
  priceUnitAmount?: InputMaybe<Scalars["Float"]>;
  startDate?: InputMaybe<Scalars["DateTime"]>;
};

export type EstimateSubscriptionUpdateInput = {
  addons?: InputMaybe<Array<SubscriptionAddonInput>>;
  environmentId?: InputMaybe<Scalars["String"]>;
  subscriptionId: Scalars["String"];
  unitQuantity?: InputMaybe<Scalars["Float"]>;
};

/** EventLogType */
export enum EventLogType {
  AddonCreated = "ADDON_CREATED",
  AddonDeleted = "ADDON_DELETED",
  AddonUpdated = "ADDON_UPDATED",
  CouponArchived = "COUPON_ARCHIVED",
  CouponCreated = "COUPON_CREATED",
  CouponUpdated = "COUPON_UPDATED",
  CreateSubscriptionFailed = "CREATE_SUBSCRIPTION_FAILED",
  CustomerCreated = "CUSTOMER_CREATED",
  CustomerDeleted = "CUSTOMER_DELETED",
  CustomerPaymentFailed = "CUSTOMER_PAYMENT_FAILED",
  CustomerUpdated = "CUSTOMER_UPDATED",
  EntitlementsUpdated = "ENTITLEMENTS_UPDATED",
  EntitlementDenied = "ENTITLEMENT_DENIED",
  EntitlementGranted = "ENTITLEMENT_GRANTED",
  EntitlementRequested = "ENTITLEMENT_REQUESTED",
  FeatureCreated = "FEATURE_CREATED",
  FeatureDeleted = "FEATURE_DELETED",
  FeatureUpdated = "FEATURE_UPDATED",
  ImportIntegrationCatalogTriggered = "IMPORT_INTEGRATION_CATALOG_TRIGGERED",
  ImportIntegrationCustomersTriggered = "IMPORT_INTEGRATION_CUSTOMERS_TRIGGERED",
  MeasurementReported = "MEASUREMENT_REPORTED",
  PackagePublished = "PACKAGE_PUBLISHED",
  PlanCreated = "PLAN_CREATED",
  PlanDeleted = "PLAN_DELETED",
  PlanUpdated = "PLAN_UPDATED",
  PromotionalEntitlementExpired = "PROMOTIONAL_ENTITLEMENT_EXPIRED",
  PromotionalEntitlementGranted = "PROMOTIONAL_ENTITLEMENT_GRANTED",
  PromotionalEntitlementRevoked = "PROMOTIONAL_ENTITLEMENT_REVOKED",
  PromotionalEntitlementUpdated = "PROMOTIONAL_ENTITLEMENT_UPDATED",
  ResyncIntegrationTriggered = "RESYNC_INTEGRATION_TRIGGERED",
  SubscriptionCanceled = "SUBSCRIPTION_CANCELED",
  SubscriptionCreated = "SUBSCRIPTION_CREATED",
  SubscriptionExpired = "SUBSCRIPTION_EXPIRED",
  SubscriptionTrialConverted = "SUBSCRIPTION_TRIAL_CONVERTED",
  SubscriptionTrialEndsSoon = "SUBSCRIPTION_TRIAL_ENDS_SOON",
  SubscriptionTrialExpired = "SUBSCRIPTION_TRIAL_EXPIRED",
  SubscriptionTrialStarted = "SUBSCRIPTION_TRIAL_STARTED",
  SubscriptionUpdated = "SUBSCRIPTION_UPDATED",
  SubscriptionUsageUpdated = "SUBSCRIPTION_USAGE_UPDATED",
  SyncFailed = "SYNC_FAILED",
}

export type ExperimentFilter = {
  and?: InputMaybe<Array<ExperimentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  customers?: InputMaybe<ExperimentFilterCustomerFilter>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ExperimentFilter>>;
  productId?: InputMaybe<StringFieldComparison>;
  refId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<ExperimentStatusFilterComparison>;
};

export type ExperimentFilterCustomerFilter = {
  and?: InputMaybe<Array<ExperimentFilterCustomerFilter>>;
  billingId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  crmHubspotCompanyId?: InputMaybe<StringFieldComparison>;
  crmHubspotCompanyUrl?: InputMaybe<StringFieldComparison>;
  crmId?: InputMaybe<StringFieldComparison>;
  customerId?: InputMaybe<StringFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ExperimentFilterCustomerFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ExperimentSort = {
  direction: SortDirection;
  field: ExperimentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ExperimentSortFields {
  CreatedAt = "createdAt",
  EnvironmentId = "environmentId",
  Id = "id",
  Name = "name",
  ProductId = "productId",
  RefId = "refId",
  Status = "status",
}

export type ExperimentStatsQuery = {
  environmentId?: InputMaybe<Scalars["String"]>;
  experimentRefId: Scalars["String"];
};

/** The status of the EXPERIMENT */
export enum ExperimentStatus {
  Completed = "COMPLETED",
  Draft = "DRAFT",
  InProgress = "IN_PROGRESS",
}

export type ExperimentStatusFilterComparison = {
  eq?: InputMaybe<ExperimentStatus>;
  gt?: InputMaybe<ExperimentStatus>;
  gte?: InputMaybe<ExperimentStatus>;
  iLike?: InputMaybe<ExperimentStatus>;
  in?: InputMaybe<Array<ExperimentStatus>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<ExperimentStatus>;
  lt?: InputMaybe<ExperimentStatus>;
  lte?: InputMaybe<ExperimentStatus>;
  neq?: InputMaybe<ExperimentStatus>;
  notILike?: InputMaybe<ExperimentStatus>;
  notIn?: InputMaybe<Array<ExperimentStatus>>;
  notLike?: InputMaybe<ExperimentStatus>;
};

export type FeatureFilter = {
  and?: InputMaybe<Array<FeatureFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  displayName?: InputMaybe<StringFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  featureStatus?: InputMaybe<FeatureStatusFilterComparison>;
  featureType?: InputMaybe<FeatureTypeFilterComparison>;
  id?: InputMaybe<StringFieldComparison>;
  meterType?: InputMaybe<MeterTypeFilterComparison>;
  or?: InputMaybe<Array<FeatureFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FeatureInput = {
  description?: InputMaybe<Scalars["String"]>;
  displayName: Scalars["String"];
  environmentId: Scalars["String"];
  featureStatus?: InputMaybe<FeatureStatus>;
  featureType: FeatureType;
  featureUnits?: InputMaybe<Scalars["String"]>;
  featureUnitsPlural?: InputMaybe<Scalars["String"]>;
  meterType?: InputMaybe<MeterType>;
  refId: Scalars["String"];
};

export type FeatureSort = {
  direction: SortDirection;
  field: FeatureSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FeatureSortFields {
  CreatedAt = "createdAt",
  Description = "description",
  DisplayName = "displayName",
  EnvironmentId = "environmentId",
  FeatureStatus = "featureStatus",
  FeatureType = "featureType",
  Id = "id",
  MeterType = "meterType",
  RefId = "refId",
  UpdatedAt = "updatedAt",
}

/** Feature status. */
export enum FeatureStatus {
  Active = "ACTIVE",
  New = "NEW",
  Suspended = "SUSPENDED",
}

export type FeatureStatusFilterComparison = {
  eq?: InputMaybe<FeatureStatus>;
  gt?: InputMaybe<FeatureStatus>;
  gte?: InputMaybe<FeatureStatus>;
  iLike?: InputMaybe<FeatureStatus>;
  in?: InputMaybe<Array<FeatureStatus>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<FeatureStatus>;
  lt?: InputMaybe<FeatureStatus>;
  lte?: InputMaybe<FeatureStatus>;
  neq?: InputMaybe<FeatureStatus>;
  notILike?: InputMaybe<FeatureStatus>;
  notIn?: InputMaybe<Array<FeatureStatus>>;
  notLike?: InputMaybe<FeatureStatus>;
};

/** The type of the feature */
export enum FeatureType {
  Boolean = "BOOLEAN",
  Number = "NUMBER",
}

export type FeatureTypeFilterComparison = {
  eq?: InputMaybe<FeatureType>;
  gt?: InputMaybe<FeatureType>;
  gte?: InputMaybe<FeatureType>;
  iLike?: InputMaybe<FeatureType>;
  in?: InputMaybe<Array<FeatureType>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<FeatureType>;
  lt?: InputMaybe<FeatureType>;
  lte?: InputMaybe<FeatureType>;
  neq?: InputMaybe<FeatureType>;
  notILike?: InputMaybe<FeatureType>;
  notIn?: InputMaybe<Array<FeatureType>>;
  notLike?: InputMaybe<FeatureType>;
};

export type FetchEntitlementQuery = {
  customerId: Scalars["String"];
  environmentId?: InputMaybe<Scalars["String"]>;
  featureId: Scalars["String"];
  options?: InputMaybe<EntitlementOptions>;
};

export type FetchEntitlementsQuery = {
  customerId: Scalars["String"];
  environmentId?: InputMaybe<Scalars["String"]>;
};

export type GetPackageByRefIdInput = {
  environmentId: Scalars["String"];
  refId: Scalars["String"];
  versionNumber?: InputMaybe<Scalars["Float"]>;
};

export type GetPaywallInput = {
  environmentId?: InputMaybe<Scalars["String"]>;
  productId?: InputMaybe<Scalars["String"]>;
};

export type HookFilter = {
  and?: InputMaybe<Array<HookFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  endpoint?: InputMaybe<StringFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<HookFilter>>;
  status?: InputMaybe<HookStatusFilterComparison>;
};

export type HookSort = {
  direction: SortDirection;
  field: HookSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum HookSortFields {
  CreatedAt = "createdAt",
  Endpoint = "endpoint",
  EnvironmentId = "environmentId",
  Id = "id",
  Status = "status",
}

/** HookStatus. */
export enum HookStatus {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}

export type HookStatusFilterComparison = {
  eq?: InputMaybe<HookStatus>;
  gt?: InputMaybe<HookStatus>;
  gte?: InputMaybe<HookStatus>;
  iLike?: InputMaybe<HookStatus>;
  in?: InputMaybe<Array<HookStatus>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<HookStatus>;
  lt?: InputMaybe<HookStatus>;
  lte?: InputMaybe<HookStatus>;
  neq?: InputMaybe<HookStatus>;
  notILike?: InputMaybe<HookStatus>;
  notIn?: InputMaybe<Array<HookStatus>>;
  notLike?: InputMaybe<HookStatus>;
};

export type HubspotCredentialsInput = {
  authorizationCode: Scalars["String"];
  refreshToken?: InputMaybe<Scalars["String"]>;
};

export type ImportCustomerInput = {
  billingId: Scalars["String"];
  customerId?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  environmentId?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["String"]>;
};

export type ImportIntegrationCatalogInput = {
  billingModel?: InputMaybe<BillingModel>;
  entitySelectionMode: EntitySelectionMode;
  environmentId: Scalars["String"];
  featureUnitName?: InputMaybe<Scalars["String"]>;
  featureUnitPluralName?: InputMaybe<Scalars["String"]>;
  plansSelectionBlacklist?: InputMaybe<Array<Scalars["String"]>>;
  plansSelectionWhitelist?: InputMaybe<Array<Scalars["String"]>>;
  productId: Scalars["String"];
  selectedAddonBillingIds: Array<Scalars["String"]>;
  vendorIdentifier: VendorIdentifier;
};

export type ImportIntegrationCustomersInput = {
  customersSelectionBlacklist?: InputMaybe<Array<Scalars["String"]>>;
  customersSelectionWhitelist?: InputMaybe<Array<Scalars["String"]>>;
  entitySelectionMode: EntitySelectionMode;
  environmentId: Scalars["String"];
  productId: Scalars["String"];
  vendorIdentifier: VendorIdentifier;
};

export type ImportIntegrationTaskFilter = {
  and?: InputMaybe<Array<ImportIntegrationTaskFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ImportIntegrationTaskFilter>>;
  status?: InputMaybe<TaskStatusFilterComparison>;
  taskType?: InputMaybe<TaskTypeFilterComparison>;
};

export type ImportIntegrationTaskSort = {
  direction: SortDirection;
  field: ImportIntegrationTaskSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ImportIntegrationTaskSortFields {
  CreatedAt = "createdAt",
  EnvironmentId = "environmentId",
  Id = "id",
  Status = "status",
  TaskType = "taskType",
}

export type InitAddStripeCustomerPaymentMethodInput = {
  customerRefId: Scalars["String"];
  environmentId?: InputMaybe<Scalars["String"]>;
};

export type InitiateCheckoutInput = {
  addons?: InputMaybe<Array<SubscriptionAddonInput>>;
  allowPromoCodes?: InputMaybe<Scalars["Boolean"]>;
  billingPeriod: BillingPeriod;
  cancelUrl: Scalars["String"];
  collectBillingAddress?: InputMaybe<Scalars["Boolean"]>;
  customerId: Scalars["String"];
  planId: Scalars["String"];
  successUrl: Scalars["String"];
  unitQuantity?: InputMaybe<Scalars["Int"]>;
};

export type IntFieldComparison = {
  between?: InputMaybe<IntFieldComparisonBetween>;
  eq?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  neq?: InputMaybe<Scalars["Int"]>;
  notBetween?: InputMaybe<IntFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type IntFieldComparisonBetween = {
  lower: Scalars["Int"];
  upper: Scalars["Int"];
};

export type IntegrationFilter = {
  and?: InputMaybe<Array<IntegrationFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<IntegrationFilter>>;
  vendorIdentifier?: InputMaybe<VendorIdentifierFilterComparison>;
};

export type IntegrationSort = {
  direction: SortDirection;
  field: IntegrationSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum IntegrationSortFields {
  CreatedAt = "createdAt",
  EnvironmentId = "environmentId",
  Id = "id",
  VendorIdentifier = "vendorIdentifier",
}

export type MemberFilter = {
  and?: InputMaybe<Array<MemberFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<MemberFilter>>;
};

export type MemberSort = {
  direction: SortDirection;
  field: MemberSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum MemberSortFields {
  CreatedAt = "createdAt",
  Id = "id",
}

/** Member Status. */
export enum MemberStatus {
  Invited = "INVITED",
  Registered = "REGISTERED",
}

/** The meter type of the feature */
export enum MeterType {
  Fluctuating = "Fluctuating",
  Incremental = "Incremental",
  None = "None",
}

export type MeterTypeFilterComparison = {
  eq?: InputMaybe<MeterType>;
  gt?: InputMaybe<MeterType>;
  gte?: InputMaybe<MeterType>;
  iLike?: InputMaybe<MeterType>;
  in?: InputMaybe<Array<MeterType>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<MeterType>;
  lt?: InputMaybe<MeterType>;
  lte?: InputMaybe<MeterType>;
  neq?: InputMaybe<MeterType>;
  notILike?: InputMaybe<MeterType>;
  notIn?: InputMaybe<Array<MeterType>>;
  notLike?: InputMaybe<MeterType>;
};

export type MoneyInputDto = {
  amount: Scalars["Float"];
  currency?: InputMaybe<Currency>;
};

/** Montly reset period according to configuration */
export enum MonthlyAccordingTo {
  StartOfTheMonth = "StartOfTheMonth",
  SubscriptionStart = "SubscriptionStart",
}

export type MonthlyResetPeriodConfigInput = {
  accordingTo: MonthlyAccordingTo;
};

export type NumberFieldComparison = {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  neq?: InputMaybe<Scalars["Float"]>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars["Float"]>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars["Float"];
  upper: Scalars["Float"];
};

export type PackageDtoFilter = {
  and?: InputMaybe<Array<PackageDtoFilter>>;
  billingId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  displayName?: InputMaybe<StringFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  isLatest?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<PackageDtoFilter>>;
  pricingType?: InputMaybe<PricingTypeFilterComparison>;
  productId?: InputMaybe<StringFieldComparison>;
  refId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<PackageStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  versionNumber?: InputMaybe<IntFieldComparison>;
};

export type PackageDtoSort = {
  direction: SortDirection;
  field: PackageDtoSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PackageDtoSortFields {
  BillingId = "billingId",
  CreatedAt = "createdAt",
  Description = "description",
  DisplayName = "displayName",
  EnvironmentId = "environmentId",
  Id = "id",
  IsLatest = "isLatest",
  PricingType = "pricingType",
  ProductId = "productId",
  RefId = "refId",
  Status = "status",
  UpdatedAt = "updatedAt",
  VersionNumber = "versionNumber",
}

export type PackageEntitlementFilter = {
  and?: InputMaybe<Array<PackageEntitlementFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  feature?: InputMaybe<PackageEntitlementFilterFeatureFilter>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PackageEntitlementFilter>>;
  package?: InputMaybe<PackageEntitlementFilterPackageDtoFilter>;
  packageId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PackageEntitlementFilterFeatureFilter = {
  and?: InputMaybe<Array<PackageEntitlementFilterFeatureFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  displayName?: InputMaybe<StringFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  featureStatus?: InputMaybe<FeatureStatusFilterComparison>;
  featureType?: InputMaybe<FeatureTypeFilterComparison>;
  id?: InputMaybe<StringFieldComparison>;
  meterType?: InputMaybe<MeterTypeFilterComparison>;
  or?: InputMaybe<Array<PackageEntitlementFilterFeatureFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PackageEntitlementFilterPackageDtoFilter = {
  and?: InputMaybe<Array<PackageEntitlementFilterPackageDtoFilter>>;
  billingId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  displayName?: InputMaybe<StringFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  isLatest?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<PackageEntitlementFilterPackageDtoFilter>>;
  pricingType?: InputMaybe<PricingTypeFilterComparison>;
  productId?: InputMaybe<StringFieldComparison>;
  refId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<PackageStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  versionNumber?: InputMaybe<IntFieldComparison>;
};

export type PackageEntitlementInput = {
  description?: InputMaybe<Scalars["String"]>;
  environmentId: Scalars["String"];
  featureId: Scalars["String"];
  hasUnlimitedUsage?: InputMaybe<Scalars["Boolean"]>;
  monthlyResetPeriodConfiguration?: InputMaybe<MonthlyResetPeriodConfigInput>;
  order?: InputMaybe<Scalars["Float"]>;
  packageId: Scalars["String"];
  resetPeriod?: InputMaybe<EntitlementResetPeriod>;
  usageLimit?: InputMaybe<Scalars["Float"]>;
  weeklyResetPeriodConfiguration?: InputMaybe<WeeklyResetPeriodConfigInput>;
};

export type PackageEntitlementSort = {
  direction: SortDirection;
  field: PackageEntitlementSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PackageEntitlementSortFields {
  CreatedAt = "createdAt",
  EnvironmentId = "environmentId",
  Id = "id",
  PackageId = "packageId",
  UpdatedAt = "updatedAt",
}

export type PackageEntitlementUpdateInput = {
  description?: InputMaybe<Scalars["String"]>;
  hasUnlimitedUsage?: InputMaybe<Scalars["Boolean"]>;
  hiddenFromWidgets?: InputMaybe<Array<WidgetType>>;
  monthlyResetPeriodConfiguration?: InputMaybe<MonthlyResetPeriodConfigInput>;
  order?: InputMaybe<Scalars["Float"]>;
  resetPeriod?: InputMaybe<EntitlementResetPeriod>;
  usageLimit?: InputMaybe<Scalars["Float"]>;
  weeklyResetPeriodConfiguration?: InputMaybe<WeeklyResetPeriodConfigInput>;
};

export type PackagePricingInput = {
  environmentId: Scalars["String"];
  packageId: Scalars["String"];
  pricingModel?: InputMaybe<PricingModelCreateInput>;
  pricingType: PricingType;
};

export type PackagePublishInput = {
  id: Scalars["ID"];
  migrationType: PublishMigrationType;
};

/** Package status. */
export enum PackageStatus {
  Archived = "ARCHIVED",
  Draft = "DRAFT",
  Published = "PUBLISHED",
}

export type PackageStatusFilterComparison = {
  eq?: InputMaybe<PackageStatus>;
  gt?: InputMaybe<PackageStatus>;
  gte?: InputMaybe<PackageStatus>;
  iLike?: InputMaybe<PackageStatus>;
  in?: InputMaybe<Array<PackageStatus>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<PackageStatus>;
  lt?: InputMaybe<PackageStatus>;
  lte?: InputMaybe<PackageStatus>;
  neq?: InputMaybe<PackageStatus>;
  notILike?: InputMaybe<PackageStatus>;
  notIn?: InputMaybe<Array<PackageStatus>>;
  notLike?: InputMaybe<PackageStatus>;
};

/** Type of a payment method */
export enum PaymentMethodType {
  Bank = "BANK",
  Card = "CARD",
}

export type PlanCreateInput = {
  additionalMetaData?: InputMaybe<Scalars["JSON"]>;
  billingId?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  displayName: Scalars["String"];
  environmentId?: InputMaybe<Scalars["String"]>;
  parentPlanId?: InputMaybe<Scalars["String"]>;
  productId: Scalars["String"];
  refId?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<PackageStatus>;
};

export type PlanFilter = {
  and?: InputMaybe<Array<PlanFilter>>;
  billingId?: InputMaybe<StringFieldComparison>;
  compatibleAddons?: InputMaybe<PlanFilterAddonFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  displayName?: InputMaybe<StringFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  isLatest?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<PlanFilter>>;
  pricingType?: InputMaybe<PricingTypeFilterComparison>;
  product?: InputMaybe<PlanFilterProductFilter>;
  productId?: InputMaybe<StringFieldComparison>;
  refId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<PackageStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  versionNumber?: InputMaybe<IntFieldComparison>;
};

export type PlanFilterAddonFilter = {
  and?: InputMaybe<Array<PlanFilterAddonFilter>>;
  billingId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  displayName?: InputMaybe<StringFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  isLatest?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<PlanFilterAddonFilter>>;
  pricingType?: InputMaybe<PricingTypeFilterComparison>;
  productId?: InputMaybe<StringFieldComparison>;
  refId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<PackageStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  versionNumber?: InputMaybe<IntFieldComparison>;
};

export type PlanFilterProductFilter = {
  and?: InputMaybe<Array<PlanFilterProductFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  displayName?: InputMaybe<StringFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  isDefaultProduct?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<PlanFilterProductFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PlanSort = {
  direction: SortDirection;
  field: PlanSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PlanSortFields {
  BillingId = "billingId",
  CreatedAt = "createdAt",
  Description = "description",
  DisplayName = "displayName",
  EnvironmentId = "environmentId",
  Id = "id",
  IsLatest = "isLatest",
  PricingType = "pricingType",
  ProductId = "productId",
  RefId = "refId",
  Status = "status",
  UpdatedAt = "updatedAt",
  VersionNumber = "versionNumber",
}

export type PlanUpdateInput = {
  additionalMetaData?: InputMaybe<Scalars["JSON"]>;
  billingId?: InputMaybe<Scalars["String"]>;
  defaultTrialConfig?: InputMaybe<DefaultTrialConfigInputDto>;
  description?: InputMaybe<Scalars["String"]>;
  displayName?: InputMaybe<Scalars["String"]>;
  id: Scalars["String"];
  parentPlanId?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<PackageStatus>;
};

export type PriceFilter = {
  and?: InputMaybe<Array<PriceFilter>>;
  billingModel?: InputMaybe<BillingModelFilterComparison>;
  billingPeriod?: InputMaybe<BillingPeriodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PriceFilter>>;
  package?: InputMaybe<PriceFilterPackageDtoFilter>;
};

export type PriceFilterPackageDtoFilter = {
  and?: InputMaybe<Array<PriceFilterPackageDtoFilter>>;
  billingId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  displayName?: InputMaybe<StringFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  isLatest?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<PriceFilterPackageDtoFilter>>;
  pricingType?: InputMaybe<PricingTypeFilterComparison>;
  productId?: InputMaybe<StringFieldComparison>;
  refId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<PackageStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  versionNumber?: InputMaybe<IntFieldComparison>;
};

export type PricePeriodInput = {
  billingPeriod: BillingPeriod;
  price: MoneyInputDto;
};

export type PriceSort = {
  direction: SortDirection;
  field: PriceSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PriceSortFields {
  BillingModel = "billingModel",
  BillingPeriod = "billingPeriod",
  CreatedAt = "createdAt",
  Id = "id",
}

export type PricingModelCreateInput = {
  billingModel: BillingModel;
  featureId?: InputMaybe<Scalars["String"]>;
  maxUnitQuantity?: InputMaybe<Scalars["Float"]>;
  minUnitQuantity?: InputMaybe<Scalars["Float"]>;
  pricePeriods: Array<PricePeriodInput>;
};

/** Package pricing type. */
export enum PricingType {
  Custom = "CUSTOM",
  Free = "FREE",
  Paid = "PAID",
}

export type PricingTypeFilterComparison = {
  eq?: InputMaybe<PricingType>;
  gt?: InputMaybe<PricingType>;
  gte?: InputMaybe<PricingType>;
  iLike?: InputMaybe<PricingType>;
  in?: InputMaybe<Array<PricingType>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<PricingType>;
  lt?: InputMaybe<PricingType>;
  lte?: InputMaybe<PricingType>;
  neq?: InputMaybe<PricingType>;
  notILike?: InputMaybe<PricingType>;
  notIn?: InputMaybe<Array<PricingType>>;
  notLike?: InputMaybe<PricingType>;
};

export type ProductCreateInput = {
  additionalMetaData?: InputMaybe<Scalars["JSON"]>;
  description?: InputMaybe<Scalars["String"]>;
  displayName?: InputMaybe<Scalars["String"]>;
  environmentId: Scalars["String"];
  refId: Scalars["String"];
};

export type ProductFilter = {
  and?: InputMaybe<Array<ProductFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  displayName?: InputMaybe<StringFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  isDefaultProduct?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<ProductFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductSettingsInput = {
  downgradePlanId?: InputMaybe<Scalars["String"]>;
  subscriptionCancellationTime: SubscriptionCancellationTime;
  subscriptionEndSetup: SubscriptionEndSetup;
  subscriptionStartPlanId?: InputMaybe<Scalars["String"]>;
  subscriptionStartSetup: SubscriptionStartSetup;
};

export type ProductSort = {
  direction: SortDirection;
  field: ProductSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductSortFields {
  CreatedAt = "createdAt",
  Description = "description",
  DisplayName = "displayName",
  EnvironmentId = "environmentId",
  Id = "id",
  IsDefaultProduct = "isDefaultProduct",
  RefId = "refId",
  UpdatedAt = "updatedAt",
}

export type ProductUpdateInput = {
  additionalMetaData?: InputMaybe<Scalars["JSON"]>;
  description?: InputMaybe<Scalars["String"]>;
  displayName?: InputMaybe<Scalars["String"]>;
  productSettings?: InputMaybe<ProductSettingsInput>;
};

export type PromotionalEntitlementFilter = {
  and?: InputMaybe<Array<PromotionalEntitlementFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PromotionalEntitlementFilter>>;
  status?: InputMaybe<PromotionalEntitlementStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PromotionalEntitlementInput = {
  customerId: Scalars["String"];
  description?: InputMaybe<Scalars["String"]>;
  endDate?: InputMaybe<Scalars["DateTime"]>;
  environmentId: Scalars["String"];
  featureId: Scalars["String"];
  hasUnlimitedUsage?: InputMaybe<Scalars["Boolean"]>;
  isVisible: Scalars["Boolean"];
  monthlyResetPeriodConfiguration?: InputMaybe<MonthlyResetPeriodConfigInput>;
  period: PromotionalEntitlementPeriod;
  resetPeriod?: InputMaybe<EntitlementResetPeriod>;
  usageLimit?: InputMaybe<Scalars["Float"]>;
  weeklyResetPeriodConfiguration?: InputMaybe<WeeklyResetPeriodConfigInput>;
};

/** Promotional entitlement duration */
export enum PromotionalEntitlementPeriod {
  Custom = "CUSTOM",
  Lifetime = "LIFETIME",
  OneMonth = "ONE_MONTH",
  OneWeek = "ONE_WEEK",
  OneYear = "ONE_YEAR",
  SixMonth = "SIX_MONTH",
}

export type PromotionalEntitlementSort = {
  direction: SortDirection;
  field: PromotionalEntitlementSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PromotionalEntitlementSortFields {
  CreatedAt = "createdAt",
  EnvironmentId = "environmentId",
  Id = "id",
  Status = "status",
  UpdatedAt = "updatedAt",
}

/** Promotional entitlement status */
export enum PromotionalEntitlementStatus {
  Active = "Active",
  Expired = "Expired",
  Paused = "Paused",
}

export type PromotionalEntitlementStatusFilterComparison = {
  eq?: InputMaybe<PromotionalEntitlementStatus>;
  gt?: InputMaybe<PromotionalEntitlementStatus>;
  gte?: InputMaybe<PromotionalEntitlementStatus>;
  iLike?: InputMaybe<PromotionalEntitlementStatus>;
  in?: InputMaybe<Array<PromotionalEntitlementStatus>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<PromotionalEntitlementStatus>;
  lt?: InputMaybe<PromotionalEntitlementStatus>;
  lte?: InputMaybe<PromotionalEntitlementStatus>;
  neq?: InputMaybe<PromotionalEntitlementStatus>;
  notILike?: InputMaybe<PromotionalEntitlementStatus>;
  notIn?: InputMaybe<Array<PromotionalEntitlementStatus>>;
  notLike?: InputMaybe<PromotionalEntitlementStatus>;
};

export type PromotionalEntitlementUpdateInput = {
  description?: InputMaybe<Scalars["String"]>;
  endDate?: InputMaybe<Scalars["DateTime"]>;
  hasUnlimitedUsage?: InputMaybe<Scalars["Boolean"]>;
  isVisible: Scalars["Boolean"];
  monthlyResetPeriodConfiguration?: InputMaybe<MonthlyResetPeriodConfigInput>;
  period: PromotionalEntitlementPeriod;
  resetPeriod?: InputMaybe<EntitlementResetPeriod>;
  usageLimit?: InputMaybe<Scalars["Float"]>;
  weeklyResetPeriodConfiguration?: InputMaybe<WeeklyResetPeriodConfigInput>;
};

export type ProvisionCustomerInput = {
  additionalMetaData?: InputMaybe<Scalars["JSON"]>;
  billingId?: InputMaybe<Scalars["String"]>;
  billingInformation?: InputMaybe<CustomerBillingInfo>;
  couponRefId?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  crmId?: InputMaybe<Scalars["String"]>;
  customerId?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  environmentId?: InputMaybe<Scalars["String"]>;
  excludeFromExperiment?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["String"]>;
  shouldSyncFree?: InputMaybe<Scalars["Boolean"]>;
  subscriptionParams?: InputMaybe<ProvisionCustomerSubscriptionInput>;
};

export type ProvisionCustomerSubscriptionInput = {
  additionalMetaData?: InputMaybe<Scalars["JSON"]>;
  addons?: InputMaybe<Array<SubscriptionAddonInput>>;
  awaitPaymentConfirmation?: InputMaybe<Scalars["Boolean"]>;
  billingInformation?: InputMaybe<SubscriptionBillingInfo>;
  billingPeriod?: InputMaybe<BillingPeriod>;
  planId?: InputMaybe<Scalars["String"]>;
  priceUnitAmount?: InputMaybe<Scalars["Float"]>;
  refId?: InputMaybe<Scalars["String"]>;
  startDate?: InputMaybe<Scalars["DateTime"]>;
  subscriptionId?: InputMaybe<Scalars["String"]>;
};

export type ProvisionSubscription = {
  additionalMetaData?: InputMaybe<Scalars["JSON"]>;
  addons?: InputMaybe<Array<SubscriptionAddonInput>>;
  awaitPaymentConfirmation?: InputMaybe<Scalars["Boolean"]>;
  billingInformation?: InputMaybe<SubscriptionBillingInfo>;
  billingPeriod?: InputMaybe<BillingPeriod>;
  checkoutOptions?: InputMaybe<CheckoutOptions>;
  customerId: Scalars["String"];
  planId?: InputMaybe<Scalars["String"]>;
  priceUnitAmount?: InputMaybe<Scalars["Float"]>;
  refId?: InputMaybe<Scalars["String"]>;
  skipTrial?: InputMaybe<Scalars["Boolean"]>;
  startDate?: InputMaybe<Scalars["DateTime"]>;
  subscriptionId?: InputMaybe<Scalars["String"]>;
};

/** Provision subscription status */
export enum ProvisionSubscriptionStatus {
  PaymentRequired = "PAYMENT_REQUIRED",
  Success = "SUCCESS",
}

/** PublishMigrationType */
export enum PublishMigrationType {
  AllCustomers = "ALL_CUSTOMERS",
  NewCustomers = "NEW_CUSTOMERS",
}

export type RemoveBasePlanFromPlanInput = {
  /** The id of the record. */
  id: Scalars["String"];
  /** The id of relation. */
  relationId: Scalars["String"];
};

export type RemoveCompatibleAddonsFromPlanInput = {
  /** The id of the record. */
  id: Scalars["String"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["String"]>;
};

export type RemoveCouponFromCustomerInput = {
  /** The id of the record. */
  id: Scalars["String"];
  /** The id of relation. */
  relationId: Scalars["String"];
};

export type RemoveCouponFromCustomerSubscriptionInput = {
  /** The id of the record. */
  id: Scalars["String"];
  /** The id of relation. */
  relationId: Scalars["String"];
};

export type RemoveExperimentFromCustomerInput = {
  /** The id of the record. */
  id: Scalars["String"];
  /** The id of relation. */
  relationId: Scalars["String"];
};

export type RemoveExperimentFromCustomerSubscriptionInput = {
  /** The id of the record. */
  id: Scalars["String"];
  /** The id of relation. */
  relationId: Scalars["String"];
};

export type ResyncIntegrationInput = {
  environmentId: Scalars["String"];
  vendorIdentifier: VendorIdentifier;
};

export type SetBasePlanOnPlanInput = {
  /** The id of the record. */
  id: Scalars["String"];
  /** The id of relation. */
  relationId: Scalars["String"];
};

export type SetCompatibleAddonsOnPlanInput = {
  /** The id of the record. */
  id: Scalars["String"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["String"]>;
};

export type SetCouponOnCustomerInput = {
  /** The id of the record. */
  id: Scalars["String"];
  /** The id of relation. */
  relationId: Scalars["String"];
};

export type SetCouponOnCustomerSubscriptionInput = {
  /** The id of the record. */
  id: Scalars["String"];
  /** The id of relation. */
  relationId: Scalars["String"];
};

export type SetExperimentOnCustomerInput = {
  /** The id of the record. */
  id: Scalars["String"];
  /** The id of relation. */
  relationId: Scalars["String"];
};

export type SetExperimentOnCustomerSubscriptionInput = {
  /** The id of the record. */
  id: Scalars["String"];
  /** The id of relation. */
  relationId: Scalars["String"];
};

/** Sort Directions */
export enum SortDirection {
  Asc = "ASC",
  Desc = "DESC",
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = "NULLS_FIRST",
  NullsLast = "NULLS_LAST",
}

export enum SourceType {
  JsClientSdk = "JS_CLIENT_SDK",
  NodeServerSdk = "NODE_SERVER_SDK",
}

export type StartExperimentInput = {
  environmentId?: InputMaybe<Scalars["String"]>;
  refId: Scalars["String"];
};

export type StopExperimentInput = {
  environmentId?: InputMaybe<Scalars["String"]>;
  refId: Scalars["String"];
};

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  iLike?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<Scalars["String"]>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  neq?: InputMaybe<Scalars["String"]>;
  notILike?: InputMaybe<Scalars["String"]>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  notLike?: InputMaybe<Scalars["String"]>;
};

export type StripeCredentialsInput = {
  accountId?: InputMaybe<Scalars["String"]>;
  authorizationCode: Scalars["String"];
  isTestMode: Scalars["Boolean"];
};

export type StripeCustomerSearchInput = {
  customerName?: InputMaybe<Scalars["String"]>;
  environmentId: Scalars["String"];
  nextPage?: InputMaybe<Scalars["String"]>;
};

export type StripeProductSearchInput = {
  environmentId: Scalars["String"];
  nextPage?: InputMaybe<Scalars["String"]>;
  productName?: InputMaybe<Scalars["String"]>;
};

export type StripeSubscriptionSearchInput = {
  environmentId: Scalars["String"];
  nextPage?: InputMaybe<Scalars["String"]>;
};

export type SubscriptionAddonFilter = {
  addon?: InputMaybe<SubscriptionAddonFilterAddonFilter>;
  and?: InputMaybe<Array<SubscriptionAddonFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SubscriptionAddonFilter>>;
  price?: InputMaybe<SubscriptionAddonFilterPriceFilter>;
  quantity?: InputMaybe<NumberFieldComparison>;
  subscription?: InputMaybe<SubscriptionAddonFilterCustomerSubscriptionFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type SubscriptionAddonFilterAddonFilter = {
  and?: InputMaybe<Array<SubscriptionAddonFilterAddonFilter>>;
  billingId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  displayName?: InputMaybe<StringFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  isLatest?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<SubscriptionAddonFilterAddonFilter>>;
  pricingType?: InputMaybe<PricingTypeFilterComparison>;
  productId?: InputMaybe<StringFieldComparison>;
  refId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<PackageStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  versionNumber?: InputMaybe<IntFieldComparison>;
};

export type SubscriptionAddonFilterCustomerSubscriptionFilter = {
  and?: InputMaybe<Array<SubscriptionAddonFilterCustomerSubscriptionFilter>>;
  billingId?: InputMaybe<StringFieldComparison>;
  cancelReason?: InputMaybe<SubscriptionCancelReasonFilterComparison>;
  cancellationDate?: InputMaybe<DateFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  crmId?: InputMaybe<StringFieldComparison>;
  crmLinkUrl?: InputMaybe<StringFieldComparison>;
  effectiveEndDate?: InputMaybe<DateFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SubscriptionAddonFilterCustomerSubscriptionFilter>>;
  pricingType?: InputMaybe<PricingTypeFilterComparison>;
  refId?: InputMaybe<StringFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<SubscriptionStatusFilterComparison>;
  subscriptionId?: InputMaybe<StringFieldComparison>;
  trialEndDate?: InputMaybe<DateFieldComparison>;
};

export type SubscriptionAddonFilterPriceFilter = {
  and?: InputMaybe<Array<SubscriptionAddonFilterPriceFilter>>;
  billingModel?: InputMaybe<BillingModelFilterComparison>;
  billingPeriod?: InputMaybe<BillingPeriodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SubscriptionAddonFilterPriceFilter>>;
};

export type SubscriptionAddonInput = {
  addonId: Scalars["String"];
  quantity?: InputMaybe<Scalars["Int"]>;
};

export type SubscriptionAddonSort = {
  direction: SortDirection;
  field: SubscriptionAddonSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SubscriptionAddonSortFields {
  CreatedAt = "createdAt",
  Id = "id",
  Quantity = "quantity",
  UpdatedAt = "updatedAt",
}

export type SubscriptionBillingInfo = {
  taxRateIds?: InputMaybe<Array<Scalars["String"]>>;
};

/** Subscription cancellation status */
export enum SubscriptionCancelReason {
  CancelledByBilling = "CancelledByBilling",
  DetachBilling = "DetachBilling",
  Expired = "Expired",
  Immediate = "Immediate",
  PendingPaymentExpired = "PendingPaymentExpired",
  ScheduledCancellation = "ScheduledCancellation",
  TrialConverted = "TrialConverted",
  TrialEnded = "TrialEnded",
  UpgradeOrDowngrade = "UpgradeOrDowngrade",
}

export type SubscriptionCancelReasonFilterComparison = {
  eq?: InputMaybe<SubscriptionCancelReason>;
  gt?: InputMaybe<SubscriptionCancelReason>;
  gte?: InputMaybe<SubscriptionCancelReason>;
  iLike?: InputMaybe<SubscriptionCancelReason>;
  in?: InputMaybe<Array<SubscriptionCancelReason>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<SubscriptionCancelReason>;
  lt?: InputMaybe<SubscriptionCancelReason>;
  lte?: InputMaybe<SubscriptionCancelReason>;
  neq?: InputMaybe<SubscriptionCancelReason>;
  notILike?: InputMaybe<SubscriptionCancelReason>;
  notIn?: InputMaybe<Array<SubscriptionCancelReason>>;
  notLike?: InputMaybe<SubscriptionCancelReason>;
};

export type SubscriptionCancellationInput = {
  endDate?: InputMaybe<Scalars["DateTime"]>;
  environmentId?: InputMaybe<Scalars["String"]>;
  subscriptionCancellationTime?: InputMaybe<SubscriptionCancellationTime>;
  subscriptionRefId: Scalars["String"];
};

export enum SubscriptionCancellationTime {
  EndOfBillingPeriod = "END_OF_BILLING_PERIOD",
  Immediate = "IMMEDIATE",
  SpecificDate = "SPECIFIC_DATE",
}

/** Subscription decision strategy */
export enum SubscriptionDecisionStrategy {
  PredefinedFreePlan = "PREDEFINED_FREE_PLAN",
  PredefinedTrialPlan = "PREDEFINED_TRIAL_PLAN",
  RequestedPlan = "REQUESTED_PLAN",
  SkippedSubscriptionCreation = "SKIPPED_SUBSCRIPTION_CREATION",
}

export enum SubscriptionEndSetup {
  CancelSubscription = "CANCEL_SUBSCRIPTION",
  DowngradeToFree = "DOWNGRADE_TO_FREE",
}

export type SubscriptionInput = {
  additionalMetaData?: InputMaybe<Scalars["JSON"]>;
  addons?: InputMaybe<Array<SubscriptionAddonInput>>;
  awaitPaymentConfirmation?: InputMaybe<Scalars["Boolean"]>;
  billingId?: InputMaybe<Scalars["String"]>;
  billingInformation?: InputMaybe<SubscriptionBillingInfo>;
  billingPeriod?: InputMaybe<BillingPeriod>;
  couponId?: InputMaybe<Scalars["String"]>;
  crmId?: InputMaybe<Scalars["String"]>;
  customerId: Scalars["String"];
  endDate?: InputMaybe<Scalars["DateTime"]>;
  environmentId?: InputMaybe<Scalars["String"]>;
  isCustomPriceSubscription?: InputMaybe<Scalars["Boolean"]>;
  isOverridingTrialConfig?: InputMaybe<Scalars["Boolean"]>;
  isTrial?: InputMaybe<Scalars["Boolean"]>;
  planId?: InputMaybe<Scalars["String"]>;
  priceUnitAmount?: InputMaybe<Scalars["Float"]>;
  refId?: InputMaybe<Scalars["String"]>;
  startDate?: InputMaybe<Scalars["DateTime"]>;
  subscriptionId?: InputMaybe<Scalars["String"]>;
};

export type SubscriptionMigrationInput = {
  subscriptionId: Scalars["String"];
};

export type SubscriptionMigrationTaskFilter = {
  and?: InputMaybe<Array<SubscriptionMigrationTaskFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SubscriptionMigrationTaskFilter>>;
  status?: InputMaybe<TaskStatusFilterComparison>;
  taskType?: InputMaybe<TaskTypeFilterComparison>;
};

export type SubscriptionMigrationTaskSort = {
  direction: SortDirection;
  field: SubscriptionMigrationTaskSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SubscriptionMigrationTaskSortFields {
  CreatedAt = "createdAt",
  EnvironmentId = "environmentId",
  Id = "id",
  Status = "status",
  TaskType = "taskType",
}

export type SubscriptionPriceFilter = {
  and?: InputMaybe<Array<SubscriptionPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SubscriptionPriceFilter>>;
  price?: InputMaybe<SubscriptionPriceFilterPriceFilter>;
  subscription?: InputMaybe<SubscriptionPriceFilterCustomerSubscriptionFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  usageLimit?: InputMaybe<NumberFieldComparison>;
};

export type SubscriptionPriceFilterCustomerSubscriptionFilter = {
  and?: InputMaybe<Array<SubscriptionPriceFilterCustomerSubscriptionFilter>>;
  billingId?: InputMaybe<StringFieldComparison>;
  cancelReason?: InputMaybe<SubscriptionCancelReasonFilterComparison>;
  cancellationDate?: InputMaybe<DateFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  crmId?: InputMaybe<StringFieldComparison>;
  crmLinkUrl?: InputMaybe<StringFieldComparison>;
  effectiveEndDate?: InputMaybe<DateFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SubscriptionPriceFilterCustomerSubscriptionFilter>>;
  pricingType?: InputMaybe<PricingTypeFilterComparison>;
  refId?: InputMaybe<StringFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<SubscriptionStatusFilterComparison>;
  subscriptionId?: InputMaybe<StringFieldComparison>;
  trialEndDate?: InputMaybe<DateFieldComparison>;
};

export type SubscriptionPriceFilterPriceFilter = {
  and?: InputMaybe<Array<SubscriptionPriceFilterPriceFilter>>;
  billingModel?: InputMaybe<BillingModelFilterComparison>;
  billingPeriod?: InputMaybe<BillingPeriodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SubscriptionPriceFilterPriceFilter>>;
};

export type SubscriptionPriceSort = {
  direction: SortDirection;
  field: SubscriptionPriceSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SubscriptionPriceSortFields {
  CreatedAt = "createdAt",
  Id = "id",
  UpdatedAt = "updatedAt",
  UsageLimit = "usageLimit",
}

export enum SubscriptionStartSetup {
  FreePlan = "FREE_PLAN",
  PlanSelection = "PLAN_SELECTION",
  TrialPeriod = "TRIAL_PERIOD",
}

/** Subscription status */
export enum SubscriptionStatus {
  Active = "ACTIVE",
  Canceled = "CANCELED",
  Expired = "EXPIRED",
  InTrial = "IN_TRIAL",
  NotStarted = "NOT_STARTED",
  PaymentPending = "PAYMENT_PENDING",
}

export type SubscriptionStatusFilterComparison = {
  eq?: InputMaybe<SubscriptionStatus>;
  gt?: InputMaybe<SubscriptionStatus>;
  gte?: InputMaybe<SubscriptionStatus>;
  iLike?: InputMaybe<SubscriptionStatus>;
  in?: InputMaybe<Array<SubscriptionStatus>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<SubscriptionStatus>;
  lt?: InputMaybe<SubscriptionStatus>;
  lte?: InputMaybe<SubscriptionStatus>;
  neq?: InputMaybe<SubscriptionStatus>;
  notILike?: InputMaybe<SubscriptionStatus>;
  notIn?: InputMaybe<Array<SubscriptionStatus>>;
  notLike?: InputMaybe<SubscriptionStatus>;
};

/** Status of the integration sync */
export enum SyncStatus {
  Error = "ERROR",
  NoSyncRequired = "NO_SYNC_REQUIRED",
  Pending = "PENDING",
  Success = "SUCCESS",
}

export enum TaskStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  PartiallyFailed = "PARTIALLY_FAILED",
  Pending = "PENDING",
}

export type TaskStatusFilterComparison = {
  eq?: InputMaybe<TaskStatus>;
  gt?: InputMaybe<TaskStatus>;
  gte?: InputMaybe<TaskStatus>;
  iLike?: InputMaybe<TaskStatus>;
  in?: InputMaybe<Array<TaskStatus>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<TaskStatus>;
  lt?: InputMaybe<TaskStatus>;
  lte?: InputMaybe<TaskStatus>;
  neq?: InputMaybe<TaskStatus>;
  notILike?: InputMaybe<TaskStatus>;
  notIn?: InputMaybe<Array<TaskStatus>>;
  notLike?: InputMaybe<TaskStatus>;
};

export enum TaskType {
  ImportIntegrationCatalog = "IMPORT_INTEGRATION_CATALOG",
  ImportIntegrationCustomers = "IMPORT_INTEGRATION_CUSTOMERS",
  ResyncIntegration = "RESYNC_INTEGRATION",
  SubscriptionMigration = "SUBSCRIPTION_MIGRATION",
}

export type TaskTypeFilterComparison = {
  eq?: InputMaybe<TaskType>;
  gt?: InputMaybe<TaskType>;
  gte?: InputMaybe<TaskType>;
  iLike?: InputMaybe<TaskType>;
  in?: InputMaybe<Array<TaskType>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<TaskType>;
  lt?: InputMaybe<TaskType>;
  lte?: InputMaybe<TaskType>;
  neq?: InputMaybe<TaskType>;
  notILike?: InputMaybe<TaskType>;
  notIn?: InputMaybe<Array<TaskType>>;
  notLike?: InputMaybe<TaskType>;
};

export type TaxExempt = {
  type: Scalars["String"];
  value: Scalars["String"];
};

export type TestHookInput = {
  endpointUrl: Scalars["String"];
  environmentId: Scalars["String"];
  hookEventType: EventLogType;
};

/** day or month. */
export enum TrialPeriodUnits {
  Day = "DAY",
  Month = "MONTH",
}

export type UpdateAccountInput = {
  displayName: Scalars["String"];
  id: Scalars["String"];
  subscriptionBillingAnchor?: InputMaybe<BillingAnchor>;
  timezone?: InputMaybe<Scalars["String"]>;
};

export type UpdateCouponInput = {
  additionalMetaData?: InputMaybe<Scalars["JSON"]>;
  description?: InputMaybe<Scalars["String"]>;
  environmentId?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  refId: Scalars["String"];
};

export type UpdateCustomerInput = {
  additionalMetaData?: InputMaybe<Scalars["JSON"]>;
  billingId?: InputMaybe<Scalars["String"]>;
  billingInformation?: InputMaybe<CustomerBillingInfo>;
  couponRefId?: InputMaybe<Scalars["String"]>;
  crmId?: InputMaybe<Scalars["String"]>;
  customerId?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  environmentId?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["String"]>;
};

export type UpdateEnvironment = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  displayName?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  provisionStatus?: InputMaybe<EnvironmentProvisionStatus>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type UpdateExperimentInput = {
  controlGroupName?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  environmentId?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  productId?: InputMaybe<Scalars["String"]>;
  productSettings?: InputMaybe<ProductSettingsInput>;
  refId: Scalars["String"];
  variantGroupName?: InputMaybe<Scalars["String"]>;
  variantPercentage?: InputMaybe<Scalars["Float"]>;
};

export type UpdateFeature = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  displayName?: InputMaybe<Scalars["String"]>;
  environmentId?: InputMaybe<Scalars["String"]>;
  featureStatus?: InputMaybe<FeatureStatus>;
  featureType?: InputMaybe<FeatureType>;
  featureUnits?: InputMaybe<Scalars["String"]>;
  featureUnitsPlural?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  meterType?: InputMaybe<MeterType>;
  refId?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type UpdateFeatureInput = {
  description?: InputMaybe<Scalars["String"]>;
  displayName?: InputMaybe<Scalars["String"]>;
  environmentId: Scalars["String"];
  featureUnits?: InputMaybe<Scalars["String"]>;
  featureUnitsPlural?: InputMaybe<Scalars["String"]>;
  refId: Scalars["String"];
};

export type UpdateHook = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  endpoint?: InputMaybe<Scalars["String"]>;
  environmentId?: InputMaybe<Scalars["String"]>;
  eventLogTypes?: InputMaybe<Array<EventLogType>>;
  id?: InputMaybe<Scalars["String"]>;
  secretKey?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<HookStatus>;
};

export type UpdateIntegrationInput = {
  stripeCredentials?: InputMaybe<StripeCredentialsInput>;
  vendorIdentifier: VendorIdentifier;
  zuoraCredentials?: InputMaybe<ZuoraCredentialsInput>;
};

export type UpdateOneEnvironmentInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: UpdateEnvironment;
};

export type UpdateOneFeatureInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: UpdateFeature;
};

export type UpdateOneHookInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: UpdateHook;
};

export type UpdateOneIntegrationInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: UpdateIntegrationInput;
};

export type UpdateOnePackageEntitlementInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: PackageEntitlementUpdateInput;
};

export type UpdateOneProductInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: ProductUpdateInput;
};

export type UpdateOnePromotionalEntitlementInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: PromotionalEntitlementUpdateInput;
};

export type UpdatePackageEntitlementOrderInput = {
  entitlements: Array<UpdatePackageEntitlementOrderItemInput>;
  environmentId?: InputMaybe<Scalars["String"]>;
  packageId: Scalars["String"];
};

export type UpdatePackageEntitlementOrderItemInput = {
  id: Scalars["String"];
  order?: InputMaybe<Scalars["Float"]>;
};

export type UpdateSubscriptionInput = {
  additionalMetaData?: InputMaybe<Scalars["JSON"]>;
  addons?: InputMaybe<Array<SubscriptionAddonInput>>;
  environmentId?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["String"]>;
  subscriptionId?: InputMaybe<Scalars["String"]>;
  trialEndDate?: InputMaybe<Scalars["DateTime"]>;
  unitQuantity?: InputMaybe<Scalars["Float"]>;
};

export type UsageHistoryInput = {
  customerRefId: Scalars["String"];
  endDate?: InputMaybe<Scalars["DateTime"]>;
  environmentId?: InputMaybe<Scalars["String"]>;
  featureRefId: Scalars["String"];
  monthlyResetPeriodConfiguration?: InputMaybe<MonthlyResetPeriodConfigInput>;
  resetPeriod?: InputMaybe<EntitlementResetPeriod>;
  startDate: Scalars["DateTime"];
  weeklyResetPeriodConfiguration?: InputMaybe<WeeklyResetPeriodConfigInput>;
};

export type UsageMeasurementCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  customerId: Scalars["String"];
  environmentId?: InputMaybe<Scalars["String"]>;
  featureId: Scalars["String"];
  value: Scalars["Float"];
};

export type UsageMeasurementFilter = {
  and?: InputMaybe<Array<UsageMeasurementFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  customer?: InputMaybe<UsageMeasurementFilterCustomerFilter>;
  environmentId?: InputMaybe<StringFieldComparison>;
  feature?: InputMaybe<UsageMeasurementFilterFeatureFilter>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UsageMeasurementFilter>>;
};

export type UsageMeasurementFilterCustomerFilter = {
  and?: InputMaybe<Array<UsageMeasurementFilterCustomerFilter>>;
  billingId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  crmHubspotCompanyId?: InputMaybe<StringFieldComparison>;
  crmHubspotCompanyUrl?: InputMaybe<StringFieldComparison>;
  crmId?: InputMaybe<StringFieldComparison>;
  customerId?: InputMaybe<StringFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UsageMeasurementFilterCustomerFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UsageMeasurementFilterFeatureFilter = {
  and?: InputMaybe<Array<UsageMeasurementFilterFeatureFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  displayName?: InputMaybe<StringFieldComparison>;
  environmentId?: InputMaybe<StringFieldComparison>;
  featureStatus?: InputMaybe<FeatureStatusFilterComparison>;
  featureType?: InputMaybe<FeatureTypeFilterComparison>;
  id?: InputMaybe<StringFieldComparison>;
  meterType?: InputMaybe<MeterTypeFilterComparison>;
  or?: InputMaybe<Array<UsageMeasurementFilterFeatureFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UsageMeasurementSort = {
  direction: SortDirection;
  field: UsageMeasurementSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UsageMeasurementSortFields {
  CreatedAt = "createdAt",
  EnvironmentId = "environmentId",
  Id = "id",
}

export enum VendorIdentifier {
  Hubspot = "HUBSPOT",
  Stripe = "STRIPE",
  Zuora = "ZUORA",
}

export type VendorIdentifierFilterComparison = {
  eq?: InputMaybe<VendorIdentifier>;
  gt?: InputMaybe<VendorIdentifier>;
  gte?: InputMaybe<VendorIdentifier>;
  iLike?: InputMaybe<VendorIdentifier>;
  in?: InputMaybe<Array<VendorIdentifier>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<VendorIdentifier>;
  lt?: InputMaybe<VendorIdentifier>;
  lte?: InputMaybe<VendorIdentifier>;
  neq?: InputMaybe<VendorIdentifier>;
  notILike?: InputMaybe<VendorIdentifier>;
  notIn?: InputMaybe<Array<VendorIdentifier>>;
  notLike?: InputMaybe<VendorIdentifier>;
};

/** Weekly reset period according to configuration */
export enum WeeklyAccordingTo {
  EveryFriday = "EveryFriday",
  EveryMonday = "EveryMonday",
  EverySaturday = "EverySaturday",
  EverySunday = "EverySunday",
  EveryThursday = "EveryThursday",
  EveryTuesday = "EveryTuesday",
  EveryWednesday = "EveryWednesday",
  SubscriptionStart = "SubscriptionStart",
}

export type WeeklyResetPeriodConfigInput = {
  accordingTo: WeeklyAccordingTo;
};

/** The widget type */
export enum WidgetType {
  CustomerPortal = "CUSTOMER_PORTAL",
  Paywall = "PAYWALL",
}

export type ZuoraCredentialsInput = {
  baseUrl: Scalars["String"];
  clientId: Scalars["String"];
  clientSecret: Scalars["String"];
};

/** The group of the experiment */
export enum ExperimentGroupType {
  Control = "CONTROL",
  Variant = "VARIANT",
}

export type FetchAddonsQueryVariables = Exact<{
  paging?: InputMaybe<CursorPaging>;
}>;

export type FetchAddonsQuery = {
  __typename?: "Query";
  addons: {
    __typename?: "AddonConnection";
    pageInfo: {
      __typename?: "PageInfo";
      endCursor?: any | null;
      hasNextPage?: boolean | null;
    };
    edges: Array<{
      __typename?: "AddonEdge";
      node: {
        __typename?: "Addon";
        id: string;
        refId: string;
        displayName: string;
        description?: string | null;
        billingId?: string | null;
        createdAt?: any | null;
        status: PackageStatus;
        versionNumber: number;
        isLatest?: boolean | null;
        pricingType?: PricingType | null;
        entitlements?: Array<{
          __typename?: "PackageEntitlement";
          id: string;
          featureId: string;
          usageLimit?: number | null;
          hasUnlimitedUsage?: boolean | null;
          resetPeriod?: EntitlementResetPeriod | null;
          resetPeriodConfiguration?:
            | {
                __typename: "MonthlyResetPeriodConfig";
                monthlyAccordingTo?: MonthlyAccordingTo | null;
              }
            | {
                __typename: "WeeklyResetPeriodConfig";
                weeklyAccordingTo?: WeeklyAccordingTo | null;
              }
            | null;
          feature: { __typename?: "Feature"; id: string };
        }> | null;
        product?: { __typename?: "Product"; id: string } | null;
        prices?: Array<{
          __typename?: "Price";
          id: string;
          billingModel: BillingModel;
          billingPeriod: BillingPeriod;
          featureId?: string | null;
          crmId?: string | null;
          minUnitQuantity?: number | null;
          maxUnitQuantity?: number | null;
          price: { __typename?: "Money"; amount: number; currency: Currency };
          feature?: {
            __typename?: "Feature";
            id: string;
            refId: string;
          } | null;
        }> | null;
      };
    }>;
  };
};

export type FetchCouponsQueryVariables = Exact<{
  paging?: InputMaybe<CursorPaging>;
}>;

export type FetchCouponsQuery = {
  __typename?: "Query";
  coupons: {
    __typename?: "CouponConnection";
    pageInfo: {
      __typename?: "PageInfo";
      hasNextPage?: boolean | null;
      endCursor?: any | null;
      startCursor?: any | null;
    };
    edges: Array<{
      __typename?: "CouponEdge";
      node: {
        __typename?: "Coupon";
        id: string;
        discountValue: number;
        type: CouponType;
        additionalMetaData?: any | null;
        refId: string;
        name: string;
        description?: string | null;
        createdAt: any;
        updatedAt: any;
        billingId?: string | null;
        status: CouponStatus;
      };
    }>;
  };
};

export type FetchCustomersQueryVariables = Exact<{
  paging?: InputMaybe<CursorPaging>;
}>;

export type FetchCustomersQuery = {
  __typename?: "Query";
  customers: {
    __typename?: "CustomerConnection";
    edges: Array<{
      __typename?: "CustomerEdge";
      node: {
        __typename?: "Customer";
        additionalMetaData?: any | null;
        billingId?: string | null;
        customerId: string;
        crmId?: string | null;
        defaultPaymentExpirationMonth?: number | null;
        defaultPaymentExpirationYear?: number | null;
        defaultPaymentMethodId?: string | null;
        defaultPaymentMethodLast4Digits?: string | null;
        defaultPaymentMethodType?: PaymentMethodType | null;
        email?: string | null;
        name?: string | null;
        crmHubspotCompanyId?: string | null;
        createdAt?: any | null;
        excludeFromExperiment?: boolean | null;
        coupon?: { __typename?: "Coupon"; id: string } | null;
        promotionalEntitlements: Array<{
          __typename?: "PromotionalEntitlement";
          description?: string | null;
          endDate?: any | null;
          featureId: string;
          resetPeriod?: EntitlementResetPeriod | null;
          startDate: any;
          usageLimit?: number | null;
          isVisible: boolean;
          unlimited?: boolean | null;
          resetPeriodConfiguration?:
            | {
                __typename?: "MonthlyResetPeriodConfig";
                monthlyAccordingTo?: MonthlyAccordingTo | null;
              }
            | {
                __typename?: "WeeklyResetPeriodConfig";
                weeklyAccordingTo?: WeeklyAccordingTo | null;
              }
            | null;
          feature: { __typename?: "Feature"; refId: string };
        }>;
        experiment?: { __typename?: "Experiment"; refId: string } | null;
        subscriptions?: Array<{
          __typename?: "CustomerSubscription";
          additionalMetaData?: any | null;
          cancelReason?: SubscriptionCancelReason | null;
          cancellationDate?: any | null;
          createdAt?: any | null;
          currentBillingPeriodEnd?: any | null;
          subscriptionId: string;
          billingId?: string | null;
          crmId?: string | null;
          isCustomPriceSubscription?: boolean | null;
          status: SubscriptionStatus;
          startDate: any;
          trialEndDate?: any | null;
          addons?: Array<{
            __typename?: "SubscriptionAddon";
            quantity: number;
            addon: {
              __typename?: "Addon";
              refId: string;
              versionNumber: number;
            };
          }> | null;
          plan: { __typename?: "Plan"; refId: string; versionNumber: number };
          prices?: Array<{
            __typename?: "SubscriptionPrice";
            usageLimit?: number | null;
            price?: { __typename?: "Price"; id: string } | null;
          }> | null;
        }> | null;
      };
    }>;
    pageInfo: {
      __typename?: "PageInfo";
      hasNextPage?: boolean | null;
      endCursor?: any | null;
      startCursor?: any | null;
    };
  };
};

export type CachedEntitlementsQueryVariables = Exact<{
  query: FetchEntitlementsQuery;
}>;

export type CachedEntitlementsQuery = {
  __typename?: "Query";
  cachedEntitlements: Array<{
    __typename?: "Entitlement";
    isGranted: boolean;
    accessDeniedReason?: AccessDeniedReason | null;
    customerId?: string | null;
    usageLimit?: number | null;
    hasUnlimitedUsage: boolean;
    currentUsage?: number | null;
    requestedUsage?: number | null;
    nextResetDate?: any | null;
    resetPeriod?: EntitlementResetPeriod | null;
    resetPeriodConfiguration?:
      | {
          __typename: "MonthlyResetPeriodConfig";
          monthlyAccordingTo?: MonthlyAccordingTo | null;
        }
      | {
          __typename: "WeeklyResetPeriodConfig";
          weeklyAccordingTo?: WeeklyAccordingTo | null;
        }
      | null;
    feature?: { __typename?: "EntitlementFeature"; id: string } | null;
  }>;
};

export type FetchFeaturesQueryVariables = Exact<{
  paging?: InputMaybe<CursorPaging>;
}>;

export type FetchFeaturesQuery = {
  __typename?: "Query";
  features: {
    __typename?: "FeatureConnection";
    pageInfo: {
      __typename?: "PageInfo";
      endCursor?: any | null;
      hasNextPage?: boolean | null;
    };
    edges: Array<{
      __typename?: "FeatureEdge";
      node: {
        __typename?: "Feature";
        id: string;
        displayName: string;
        description?: string | null;
        updatedAt: any;
        refId: string;
        featureStatus: FeatureStatus;
        environmentId: string;
        featureType: FeatureType;
        meterType?: MeterType | null;
        featureUnits?: string | null;
        featureUnitsPlural?: string | null;
      };
    }>;
  };
};

export type FetchPlansQueryVariables = Exact<{
  paging?: InputMaybe<CursorPaging>;
}>;

export type FetchPlansQuery = {
  __typename?: "Query";
  plans: {
    __typename?: "PlanConnection";
    pageInfo: {
      __typename?: "PageInfo";
      endCursor?: any | null;
      hasNextPage?: boolean | null;
    };
    edges: Array<{
      __typename?: "PlanEdge";
      node: {
        __typename?: "Plan";
        id: string;
        refId: string;
        displayName: string;
        description?: string | null;
        status: PackageStatus;
        billingId?: string | null;
        versionNumber: number;
        isLatest?: boolean | null;
        isParent: boolean;
        pricingType?: PricingType | null;
        defaultTrialConfig?: {
          __typename?: "DefaultTrialConfig";
          units: TrialPeriodUnits;
          duration: number;
        } | null;
        basePlan?: { __typename?: "Plan"; id: string } | null;
        product: { __typename?: "Product"; id: string };
        entitlements?: Array<{
          __typename?: "PackageEntitlement";
          id: string;
          featureId: string;
          usageLimit?: number | null;
          hasUnlimitedUsage?: boolean | null;
          resetPeriod?: EntitlementResetPeriod | null;
          resetPeriodConfiguration?:
            | {
                __typename: "MonthlyResetPeriodConfig";
                monthlyAccordingTo?: MonthlyAccordingTo | null;
              }
            | {
                __typename: "WeeklyResetPeriodConfig";
                weeklyAccordingTo?: WeeklyAccordingTo | null;
              }
            | null;
          feature: { __typename?: "Feature"; id: string };
        }> | null;
        compatibleAddons?: Array<{ __typename?: "Addon"; id: string }> | null;
        prices?: Array<{
          __typename?: "Price";
          id: string;
          billingModel: BillingModel;
          billingPeriod: BillingPeriod;
          featureId?: string | null;
          crmId?: string | null;
          minUnitQuantity?: number | null;
          maxUnitQuantity?: number | null;
          price: { __typename?: "Money"; amount: number; currency: Currency };
          feature?: {
            __typename?: "Feature";
            id: string;
            refId: string;
          } | null;
        }> | null;
      };
    }>;
  };
};

export type FetchProductsQueryVariables = Exact<{
  paging?: InputMaybe<CursorPaging>;
}>;

export type FetchProductsQuery = {
  __typename?: "Query";
  products: {
    __typename?: "ProductConnection";
    pageInfo: {
      __typename?: "PageInfo";
      hasNextPage?: boolean | null;
      endCursor?: any | null;
      startCursor?: any | null;
    };
    edges: Array<{
      __typename?: "ProductEdge";
      node: {
        __typename?: "Product";
        createdAt: any;
        description?: string | null;
        id: string;
        displayName?: string | null;
        refId: string;
        isDefaultProduct: boolean;
        environmentId: string;
        updatedAt: any;
        productSettings: {
          __typename?: "ProductSettings";
          subscriptionEndSetup: SubscriptionEndSetup;
          subscriptionCancellationTime: SubscriptionCancellationTime;
          downgradePlan?: {
            __typename?: "Plan";
            refId: string;
            id: string;
          } | null;
        };
      };
    }>;
  };
};
