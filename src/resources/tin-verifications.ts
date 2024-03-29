import type { AboundContext } from "../abound.js";
import { post, list, get } from "./base/base-resource.js";
import type { Pagination } from "./types/pagination.js";

// Response body
export type TinVerification = {
  id: string;
  createdAt: string;
  status: TinVerificationStatus;
  tinFingerprint: string;
  tinType?: TinType;
} & TinVerificationRequest;

export type TinVerificationStatus = "PENDING" | "MATCH" | "MISMATCH";
export type TinType = "INDIVIDUAL" | "BUSINESS";

// Request body
export type TinVerificationRequest = {
  name: string;
  tin: string;
  userId?: string;
};

// Query params
export type TinVerificationParameters = Pagination & {
  tinFingerprint?: string;
  status?: TinVerificationStatus;
  userId?: string;
};

const resource = "tin-verifications";

export function tinVerificationsResource(context: AboundContext) {
  return {
    create: post<TinVerification, TinVerificationRequest>(resource, context),
    list: list<TinVerification, TinVerificationParameters>(resource, context),
    retrieve: get<TinVerification>(resource, context),
  };
}
