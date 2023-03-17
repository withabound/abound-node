import { AxiosInstance } from "axios";
import {
  AccessTokens,
  Documents,
  Expenses,
  Incomes,
  Mailings,
  Mileages,
  TaxCategories,
  TaxPayments,
  Taxes,
  Payers,
  PaymentMethods,
  Users,
} from "./resources";
import { initAxios } from "./util/http";

export enum Environment {
  SANDBOX = "https://sandbox-api.withabound.com/",
  PRODUCTION = "https://production-api.withabound.com/",
}

export interface AboundConfig {
  appId: string;
  appSecret: string;
  environment: Environment;
  apiVersion: ApiVersion;
}

export type ApiVersion = "v2" | "v3";

export class AboundClient {
  // resources
  accessTokens: AccessTokens;
  documents: Documents;
  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  expenses: Expenses;
  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  incomes: Incomes;
  mailings: Mailings;
  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  mileages: Mileages;
  payers: Payers;
  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  paymentMethods: PaymentMethods;
  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  taxes: Taxes;
  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  taxCategories: TaxCategories;
  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  taxPayments: TaxPayments;
  users: Users;

  constructor(config: AboundConfig) {
    validateAboundConfig(config);

    const axiosInstance: AxiosInstance = initAxios(config);

    this.accessTokens = new AccessTokens(axiosInstance);
    this.documents = new Documents(axiosInstance);
    this.expenses = new Expenses(axiosInstance);
    this.mailings = new Mailings(axiosInstance);
    this.mileages = new Mileages(axiosInstance);
    this.incomes = new Incomes(axiosInstance);
    this.payers = new Payers(axiosInstance);
    this.paymentMethods = new PaymentMethods(axiosInstance);
    this.taxes = new Taxes(axiosInstance);
    this.taxCategories = new TaxCategories(axiosInstance);
    this.taxPayments = new TaxPayments(axiosInstance);
    this.users = new Users(axiosInstance);
  }
}

const REQUIRED_CONFIG_FIELDS: Array<keyof AboundConfig> = [
  "appId",
  "appSecret",
  "apiVersion",
  "environment",
];

function validateAboundConfig(config: AboundConfig): void {
  for (const field of REQUIRED_CONFIG_FIELDS) {
    if (!config[field]) {
      throw new Error(`Missing ${field} in Abound config`);
    }
  }
}
