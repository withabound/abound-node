import { Environment, environments } from "./environments";
import { PaymentMethods, Users } from "./resources";
import { TaxPayments } from "./resources/TaxPayments";
import { initAxios } from "./util/http";

export interface AboundConfig {
  appId: string;
  appSecret: string;
  environment: Environment;
  apiVersion: ApiVersion;
}

type ApiVersion = "v2";
export class AboundClient {
  // resources
  users: Users;
  paymentMethods: PaymentMethods;
  taxPayments: TaxPayments;

  constructor(config: AboundConfig) {
    validateConfig(config);

    initAxios(config);

    this.users = new Users();
    this.paymentMethods = new PaymentMethods();
    this.taxPayments = new TaxPayments();
  }
}

const REQUIRED_CONFIG_FIELDS: Array<keyof AboundConfig> = [
  "appId",
  "appSecret",
  "apiVersion",
  "environment",
];

function validateConfig(config: AboundConfig): void {
  for (const field of REQUIRED_CONFIG_FIELDS) {
    if (!config[field]) {
      throw new Error(`Missing ${field} in Abound config`);
    }
  }

  if (!environments[config.environment.name]) {
    throw new Error(`Invalid Abound environment`);
  }
}
