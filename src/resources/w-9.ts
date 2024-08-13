import type { AboundContext } from "../abound.js";
import { get, list, post } from "./base/base-resource.js";
import type { TinType } from "./tin-verifications.js";
import type { Pagination } from "./types/pagination.js";
import type { Payee, PayeeRequest } from "./types/payee.js";
import type { Payer, PayerRequest } from "./types/payer.js";

// Response body
export type FormW9 = {
  id: string;
  createdAt: string;
  url: string;
  payee: Payee;
  payer?: Payer;
  formFields: FormW9FormFields;
  userId?: string;
};

// Request body
export type FormW9Request = {
  payee: PayeeRequest & {
    tinType?: TinType;
  };
  payer?: PayerRequest;
  formFields: FormW9FormFields;
  userId?: string;
};

// Query params
export type FormW9Parameters = Pagination & {
  payeeTinFingerprint?: string;
  payerTinFingerprint?: string;
  userId?: string;
};

export type FormW9FormFields = {
  taxClassification: TaxClassification;
  otherTaxClassification?: string;
  exemptPayeeCode?: ExemptPayeeCode;
  exemptFatcaCode?: ExemptFatcaCode;
  accountNumbers?: string[];
  certifiedAt: string;
};

export type TaxClassification =
  | "INDIVIDUAL"
  | "SOLE_PROPRIETOR"
  | "SINGLE_MEMBER_LLC"
  | "C_CORPORATION"
  | "S_CORPORATION"
  | "PARTNERSHIP"
  | "TRUST"
  | "ESTATE"
  | "LLC_PARTNERSHIP"
  | "LLC_C_CORPORATION"
  | "LLC_S_CORPORATION"
  | "OTHER";

export type ExemptPayeeCode =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "13";

export type ExemptFatcaCode =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "NOT_APPLICABLE";

const resource = "documents/w-9";

export function formW9Resource(context: AboundContext) {
  return {
    create: post<FormW9, FormW9Request>(resource, context),
    list: list<FormW9, FormW9Parameters>(resource, context),
    retrieve: get<FormW9>(resource, context),
  };
}
