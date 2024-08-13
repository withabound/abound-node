import type { TinType, TinVerificationStatus } from "../tin-verifications.js";

export type Payee = {
  name: string;
  name2?: string;
  tin: string;
  tinType?: TinType;
  tinFingerprint: string;
  tinVerificationId: string;
  tinVerificationStatus: TinVerificationStatus;
  address: string;
  address2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country: string;
};

export type PayeeRequest = {
  name: string;
  name2?: string;
  tin: string;
  address: string;
  address2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country: string;
};
