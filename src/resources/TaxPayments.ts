import { Notes } from "./base/AboundResource";
import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";
import { AboundUserScopedResource } from "./base/AboundUserScopedResource";

// request body
export interface TaxPaymentRequest {
  year: string;
  period: TaxPeriod;
  amount: number; // float
  entity: TaxPaymentEntity;
  paymentMethodId: string;
  notes?: Notes;
}

export enum TaxPeriod {
  Q1 = "Q1",
  Q2 = "Q2",
  Q3 = "Q3",
  Q4 = "Q4",
}

export enum TaxPaymentEntity {
  IRS = "IRS",
  AL = "AL",
  AR = "AR",
  AZ = "AZ",
  CA = "CA",
  CO = "CO",
  CT = "CT",
  DC = "DC",
  DE = "DE",
  GA = "GA",
  HI = "HI",
  IA = "IA",
  ID = "ID",
  IL = "IL",
  IN = "IN",
  KS = "KS",
  KY = "KY",
  MA = "MA",
  ME = "ME",
  MD = "MD",
  MI = "MI",
  MO = "MO",
  MS = "MS",
  MT = "MT",
  NC = "NC",
  ND = "ND",
  NE = "NE",
  NJ = "NJ",
  NM = "NM",
  NY = "NY",
  OH = "OH",
  OK = "OK",
  OR = "OR",
  PA = "PA",
  RI = "RI",
  SC = "SC",
  VA = "VA",
  VT = "VT",
  WI = "WI",
  WV = "WV",
}

// response body
export interface TaxPayment extends TaxPaymentRequest {
  taxPaymentId: Readonly<string>;
  createdDate: Readonly<string>;
  document?: TaxPaymentDocument;
  status: string;
}

export interface TaxPaymentDocument {
  documentURL: string;
  documentName: string;
  type: TaxPaymentDocumentType;
  year: string;
}

export enum TaxPaymentDocumentType {
  TEN40ES = "1040ES",
}

/**
 * See https://docs.withabound.com/reference#tax-payments
 */
export default class TaxPayments extends AboundUserScopedResource<
  TaxPaymentRequest,
  TaxPayment
> {
  path = "/taxPayments";

  public async create(
    userId: string,
    taxPayment: TaxPaymentRequest
  ): Promise<AboundResponse<TaxPayment>> {
    return super.createForUser(userId, { taxPayment });
  }

  public async list(userId: string): Promise<AboundBulkResponse<TaxPayment>> {
    return super.listForUser(userId);
  }

  public async retrieve(userId: string, taxPaymentId: string) {
    return super.retrieveForUser(userId, taxPaymentId);
  }
}
