import { AboundBaseResource } from "./base/AboundBaseResource";
import { AboundResponse } from "./base/AboundResponse";

// request body
export interface AccessTokenRequest {
  userId: string;
  expirationTimestamp?: number;
}

// response body
export interface AccessToken {
  accessToken: string;
  expirationTimestamp: number;
}

/**
 * See https://docs.withabound.com/reference/access-tokens
 */
export default class AccessTokens extends AboundBaseResource<
  AccessTokenRequest,
  AccessToken
> {
  path = "/accessTokens";

  public async create(
    accessToken: AccessTokenRequest
  ): Promise<AboundResponse<AccessToken>> {
    return super.createBaseResource({ accessToken });
  }
}
