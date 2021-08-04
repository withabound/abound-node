declare interface AboundConfig {
  appId: string;
  appSecret: string;
  environment: Environment;
  apiVersion: ApiVersion;
}

declare interface Environment {
  name: EnvironmentName;
  baseUrl: string;
}

declare type EnvironmentName = "sandbox" | "production";

declare type ApiVersion = "v1" | "v2";
