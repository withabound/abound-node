import { AboundBaseResource } from "./base/AboundBaseResource";
import { EmptyObject, Pagination } from "./base/AboundResource";
import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";

// request body
export interface PayerRequest {
  name: string;
  address: string;
  address2?: string;
  city: string;
  state: string; // Two-letter code for US. If foreign, use payer's province.
  country: string; // The payer's country, adhering to ISO 3166-2 standards.
  zipcode: string; // If foreign, use payer's foreign postal code.
  phoneNumber: string; // No country code. Numerical digits only.
  taxIdNumber: string; // The payer's tax identification number, commonly referred to as a TIN (or an EIN). No hyphens. Numerical digits only.
  foreignId?: string;
}

// query params
export interface PayerParameters extends Pagination {
  foreignId?: string;
}

// response body
export interface Payer extends PayerRequest {
  payerId: string;
}

/**
 * See https://docs.withabound.com/reference/payers
 */
export default class Payers extends AboundBaseResource<PayerRequest, Payer> {
  path = "/payers";

  public async create(
    payers: PayerRequest[]
  ): Promise<AboundBulkResponse<Payer>> {
    return super.bulkCreateBaseResource({ payers });
  }

  public async list(
    parameters?: PayerParameters
  ): Promise<AboundBulkResponse<Payer>> {
    return super.listBaseResource(parameters);
  }

  public async retrieve(payerId: string): Promise<AboundResponse<Payer>> {
    return super.retrieveBaseResource(payerId);
  }

  public async update(
    payerId: string,
    payer: Partial<PayerRequest>
  ): Promise<AboundResponse<Payer>> {
    return super.updateBaseResource(payerId, { payer });
  }

  public async delete(payerId: string): Promise<AboundResponse<EmptyObject>> {
    return super.deleteBaseResource(payerId);
  }
}
