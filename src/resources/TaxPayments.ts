import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";
import { AboundUserScopedResource } from "./base/AboundUserScopedResource";

// request body
export interface TaxPaymentRequest {
  year: string;
  period: TaxPeriod;
  amount: number; // float
  entity: string;
  paymentMethodId: string;
  notes?: Record<string, unknown>;
}

export enum TaxPeriod {
  Q1 = "Q1",
  Q2 = "Q2",
  Q3 = "Q3",
  Q4 = "Q4",
}

// response body
export interface TaxPayment extends TaxPaymentRequest {
  taxPaymentId: Readonly<string>;
  createdDate: Readonly<string>;
  status: string;
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
