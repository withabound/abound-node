// TODO
// resources
// export type * from "./resources/1099-int.js";
// export type * from "./resources/1099-k.js";
// export type * from "./resources/1099-nec.js";
// export type * from "./resources/access-tokens.js";
// export type * from "./resources/mailings2.js";
// export type * from "./resources/tin-verifications.js";
// export type * from "./resources/users.js";
// export type * from "./resources/w-9.js";

import {
  accessTokensResource,
  mailingsResource,
  form1099IntResource,
  form1099KResource,
  form1099NecResource,
  tinVerificationsResource,
  usersResource,
  formW9Resource,
} from "./resources/index.js";
import { version } from "./version.js";

export type AboundConfig = {
  appId: string;
  appSecret: string;
  environment: "SANDBOX" | "PRODUCTION";
};

export type AboundContext = {
  baseUrl:
    | "https://sandbox-api.withabound.com"
    | "https://production-api.withabound.com";
  headers: Record<string, string>;
};

export class Abound {
  // Resources
  accessTokens: ReturnType<typeof accessTokensResource>;
  form1099Int: ReturnType<typeof form1099IntResource>;
  form1099K: ReturnType<typeof form1099KResource>;
  form1099Nec: ReturnType<typeof form1099NecResource>;
  formW9: ReturnType<typeof formW9Resource>;
  mailings: ReturnType<typeof mailingsResource>;
  tinVerifications: ReturnType<typeof tinVerificationsResource>;
  users: ReturnType<typeof usersResource>;

  constructor(config: AboundConfig) {
    validateAboundConfig(config);

    /* eslint-disable @typescript-eslint/naming-convention */
    const context: AboundContext = {
      baseUrl: {
        SANDBOX: "https://sandbox-api.withabound.com" as const,
        PRODUCTION: "https://production-api.withabound.com" as const,
      }[config.environment],
      headers: {
        "Abound-SDK": `NodeSDK/${version}`,
        Authorization: `Bearer ${config.appId}.${config.appSecret}`,
        "Content-Type": "application/json",
      },
    };
    /* eslint-enable @typescript-eslint/naming-convention */

    this.accessTokens = accessTokensResource(context);
    this.form1099Int = form1099IntResource(context);
    this.form1099K = form1099KResource(context);
    this.form1099Nec = form1099NecResource(context);
    this.formW9 = formW9Resource(context);
    this.mailings = mailingsResource(context);
    this.tinVerifications = tinVerificationsResource(context);
    this.users = usersResource(context);
  }
}

const requiredConfigFields: Array<keyof AboundConfig> = [
  "appId",
  "appSecret",
  "environment",
];

function validateAboundConfig(config: AboundConfig): void {
  for (const field of requiredConfigFields) {
    if (!config[field]) {
      throw new Error(`Missing ${field} in Abound config`);
    }
  }
}
