import { EmptyObject, Pagination } from "./base/AboundResource";
import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";
import { AboundUserScopedResource } from "./base/AboundUserScopedResource";

// request body
export interface MileageRequest {
  distance: number; // float
  date: string; // YYYY-MM-DD
  description?: string;
  foreignId?: string;
}

// query params
export interface MileageParameters extends Pagination {
  foreignId?: string;
  year?: string;
}

// response body
export interface Mileage extends MileageRequest {
  transactionId: Readonly<string>;
}

/**
 * See https://docs.withabound.com/reference#mileage
 */
export default class Mileages extends AboundUserScopedResource<
  MileageRequest,
  Mileage
> {
  path = "/mileage";

  public async list(
    userId: string,
    parameters?: MileageParameters
  ): Promise<AboundBulkResponse<Mileage>> {
    return super.listForUser(userId, parameters);
  }

  public async create(
    userId: string,
    mileages: MileageRequest[]
  ): Promise<AboundBulkResponse<Mileage>> {
    return super.bulkCreateForUser(userId, { mileages });
  }

  public async retrieve(
    userId: string,
    mileageId: string
  ): Promise<AboundResponse<Mileage>> {
    return super.retrieveForUser(userId, mileageId);
  }

  public async update(
    userId: string,
    mileageId: string,
    mileage: Partial<MileageRequest>
  ): Promise<AboundResponse<Mileage>> {
    return super.updateForUser(userId, mileageId, { mileage });
  }

  public async delete(
    userId: string,
    mileageId: string
  ): Promise<AboundResponse<EmptyObject>> {
    return super.deleteForUser(userId, mileageId);
  }
}
