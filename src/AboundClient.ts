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

export type ApiVersion = "v2";

export class AboundClient {
  // resources
  accessTokens: AccessTokens;
  documents: Documents;
  expenses: Expenses;
  incomes: Incomes;
  mailings: Mailings;
  mileages: Mileages;
  payers: Payers;
  paymentMethods: PaymentMethods;
  taxes: Taxes;
  taxCategories: TaxCategories;
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
