import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";
import { AboundUserScopedResource } from "./base/AboundUserScopedResource";

// request body
interface PaymentMethodRequest {
  status?: string;
  accountNumber?: string;
  routingNumber?: string;
  accountType?: AccountType;
  accountClass?: AccountClass;
  notes?: Record<string, unknown>;
  microdepositAmounts?: MicrodepositAmounts;
}

// response body
export interface PaymentMethod extends PaymentMethodRequest {
  paymentMethodId: Readonly<string>;
  displayName?: Readonly<string>;
  accountNumberLast4?: Readonly<string>;
}

export enum AccountType {
  BUSINESS = "business",
  PERSONAL = "personal",
}

export enum AccountClass {
  CHECKING = "checking",
  SAVINGS = "savings",
}

// The two (2) micro-deposit amounts to verify. Floating point values.
type MicrodepositAmounts = [number, number];

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

  public async verify(
    userId: string,
    paymentMethodId: string,
    microdepositAmounts: MicrodepositAmounts
  ) {
    return this.update(userId, paymentMethodId, { microdepositAmounts });
  }

  public async update(
    userId: string,
    paymentMethodId: string,
    paymentMethod: PaymentMethodRequest
  ) {
    return super.updateForUser(userId, paymentMethodId, { paymentMethod });
  }
}
