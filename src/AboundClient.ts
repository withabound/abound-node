import { AxiosInstance } from "axios";
import { AccessTokens, Documents, Mailings, Payers, Users } from "./resources";
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

export type ApiVersion = "v3";

export class AboundClient {
  // resources
  accessTokens: AccessTokens;
  documents: Documents;
  mailings: Mailings;
  payers: Payers;
  users: Users;

  constructor(config: AboundConfig) {
    validateAboundConfig(config);

    const axiosInstance: AxiosInstance = initAxios(config);

    this.accessTokens = new AccessTokens(axiosInstance);
    this.documents = new Documents(axiosInstance);
    this.mailings = new Mailings(axiosInstance);
    this.payers = new Payers(axiosInstance);
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
