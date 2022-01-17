import { AxiosInstance } from "axios";
import {
  Documents,
  Expenses,
  Incomes,
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
  users: Users;
  paymentMethods: PaymentMethods;
  taxPayments: TaxPayments;
  incomes: Incomes;
  mileages: Mileages;
  expenses: Expenses;
  documents: Documents;
  taxes: Taxes;
  taxCategories: TaxCategories;
  payers: Payers;

  constructor(config: AboundConfig) {
    validateAboundConfig(config);

    const axiosInstance: AxiosInstance = initAxios(config);

    this.users = new Users(axiosInstance);
    this.paymentMethods = new PaymentMethods(axiosInstance);
    this.taxPayments = new TaxPayments(axiosInstance);
    this.incomes = new Incomes(axiosInstance);
    this.mileages = new Mileages(axiosInstance);
    this.expenses = new Expenses(axiosInstance);
    this.documents = new Documents(axiosInstance);
    this.taxes = new Taxes(axiosInstance);
    this.taxCategories = new TaxCategories(axiosInstance);
    this.payers = new Payers(axiosInstance);
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
