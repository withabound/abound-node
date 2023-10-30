import type { AboundContext } from "../abound.js";
import { post } from "./base/base-resource.js";

// Response body
export type AccessToken = {
  accessToken: string;
  createdAt: string;
  expiresAt: string;
};

// Request body
export type AccessTokenRequest = {
  expiresIn: number;
  userId?: string;
};

const resource = "access-tokens";

export function accessTokensResource(context: AboundContext) {
  return {
    create: post<AccessToken, AccessTokenRequest>(resource, context),
  };
}
