import { Notes, Pagination } from "./base/AboundResource";
import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";
import { AboundUserScopedResource } from "./base/AboundUserScopedResource";

// request body
export interface TaxPaymentRequest {
  year: string;
  period: TaxPeriod;
  amount: number; // float
  paymentMethodId: string;
  notes?: Notes;
  foreignId?: string;
}

export enum TaxPeriod {
  Q1 = "Q1",
  Q2 = "Q2",
  Q3 = "Q3",
  Q4 = "Q4",
}

// query params
export interface TaxPaymentParameters extends Pagination {
  foreignId?: string;
}

// response body
export interface TaxPayment extends TaxPaymentRequest {
  taxPaymentId: Readonly<string>;
  createdDate: Readonly<string>;
  document?: TaxPaymentDocument;
  status: string;
  submittedDate?: Readonly<string>;
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
 * See https://docs.withabound.com/reference/tax-payments
 * @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog).
 */
export default class TaxPayments extends AboundUserScopedResource<
  TaxPaymentRequest,
  TaxPayment
> {
  path = "/taxPayments";

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async create(
    userId: string,
    taxPayment: TaxPaymentRequest
  ): Promise<AboundResponse<TaxPayment>> {
    return super.createForUser(userId, { taxPayment });
  }

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async list(
    userId: string,
    parameters?: TaxPaymentParameters
  ): Promise<AboundBulkResponse<TaxPayment>> {
    return super.listForUser(userId, parameters);
  }

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async retrieve(userId: string, taxPaymentId: string) {
    return super.retrieveForUser(userId, taxPaymentId);
  }
}
