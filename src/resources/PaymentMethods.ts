import { Pagination } from "./base/AboundResource";
import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";
import { AboundUserScopedResource } from "./base/AboundUserScopedResource";

// request body
export interface PaymentMethodRequest {
  accountNumber: string;
  routingNumber: string;
  accountType: AccountType;
  accountClass: AccountClass;
  notes?: Record<string, unknown>;
  foreignId?: string;
}

// query params
export interface PaymentMethodParameters extends Pagination {
  foreignId?: string;
}

// response body
export interface PaymentMethod extends PaymentMethodRequest {
  paymentMethodId: Readonly<string>;
  displayName?: Readonly<string>;
  accountNumberLast4?: Readonly<string>;
  status: Readonly<string>;
}

export enum AccountType {
  BUSINESS = "business",
  PERSONAL = "personal",
}

export enum AccountClass {
  CHECKING = "checking",
  SAVINGS = "savings",
}

/**
 * See https://docs.withabound.com/reference/payment-methods
 * @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog).
 */
export default class PaymentMethods extends AboundUserScopedResource<
  PaymentMethodRequest,
  PaymentMethod
> {
  path = "/paymentMethods";

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async create(
    userId: string,
    paymentMethod: PaymentMethodRequest
  ): Promise<AboundResponse<PaymentMethod>> {
    return super.createForUser(userId, { paymentMethod });
  }

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async list(
    userId: string,
    parameters?: PaymentMethodParameters
  ): Promise<AboundBulkResponse<PaymentMethod>> {
    return super.listForUser(userId, parameters);
  }

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async retrieve(
    userId: string,
    paymentMethodId: string
  ): Promise<AboundResponse<PaymentMethod>> {
    return super.retrieveForUser(userId, paymentMethodId);
  }
}
