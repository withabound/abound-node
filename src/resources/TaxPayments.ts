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
  CA = "CA",
  GA = "GA",
  IL = "IL",
  MI = "MI",
  NJ = "NJ",
  NY = "NY",
  NC = "NC",
  OH = "OH",
  PA = "PA",
  VA = "VA",
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
  type: string;
  year: string;
}

/**
 * See https://docs.withabound.com/reference#tax-payments
 */
export class TaxPayments extends AboundUserScopedResource<
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
