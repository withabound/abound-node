import { Environment, environments } from "./environments";

export interface AboundConfig {
  appId: string;
  appSecret: string;
  environment: Environment;
  apiVersion: ApiVersion;
}

type ApiVersion = "v1" | "v2";
export class AboundClient {
  appId: string;
  appSecret: string;
  baseUrl: string;

  constructor(config: AboundConfig) {
    validateConfig(config);

    this.appId = config.appId;
    this.appSecret = config.appSecret;
    this.baseUrl = `${config.environment.baseUrl}${config.apiVersion}`;
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
