import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";
import { AboundUserScopedResource } from "./base/AboundUserScopedResource";

// request body
interface PaymentMethodRequest {
  accountNumber: string;
  routingNumber: string;
  accountType: AccountType;
  accountClass: AccountClass;
  notes?: Record<string, unknown>;
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
 * See https://docs.withabound.com/reference#payment-methods
 */
export class PaymentMethods extends AboundUserScopedResource<
  PaymentMethodRequest,
  PaymentMethod
> {
  path = "/paymentMethods";

  public async create(
    userId: string,
    paymentMethod: PaymentMethodRequest
  ): Promise<AboundResponse<PaymentMethod>> {
    return super.createForUser(userId, { paymentMethod });
  }

  public async list(
    userId: string
  ): Promise<AboundBulkResponse<PaymentMethod>> {
    return super.listForUser(userId);
  }

  public async retrieve(
    userId: string,
    paymentMethodId: string
  ): Promise<AboundResponse<PaymentMethod>> {
    return super.retrieveForUser(userId, paymentMethodId);
  }
}
