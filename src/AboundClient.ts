import { Environment, environments } from "./environments";
import { resources } from "./resources";
import { Users } from "./resources/Users";
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

  constructor(config: AboundConfig) {
    validateConfig(config);

    initAxios(config);

    this.users = new resources.Users();
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
