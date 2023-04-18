import { BaseDocumentRequest, DocumentType } from "../Documents";

// request body
export interface W9DocumentRequest extends BaseDocumentRequest, W9FormFields {
  type: DocumentType.W9;
  payerId?: string; // The payer filing or issuing this form.
  year: number;
}

export interface W9FormFields {
  taxClassification: W9TaxClassification;
  exemptPayeeCode?: ExemptPayeeCode;
  exemptFatcaCode?: ExemptFatcaCode;
  accountNumbers?: string[];
  /**
   * The certification timestamp (number of milliseconds elapsed since the UNIX epoch)
   * for this W-9.
   */
  certificationTimestamp: number;
}

export enum W9TaxClassification {
  INDIVIDUAL = "individual",
  SOLE_PROPRIETOR = "soleProprietor",
  SINGLE_MEMBER_LLC = "singleMemberLlc",
  C_CORPORATION = "cCorporation",
  S_CORPORATION = "sCorporation",
  PARTNERSHIP = "partnership",
  TRUST = "trust",
  ESTATE = "estate",
  LLC_C_CORPORATION = "llcCCorporation",
  LLC_S_CORPORATION = "llcSCorporation",
  LLC_PARTNERSHIP = "llcPartnership",
}

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
  | "Not Applicable";
