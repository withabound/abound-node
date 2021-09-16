import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";
import { AboundUserScopedResource } from "./base/AboundUserScopedResource";

// request body
export interface MileageRequest {
  distance: number; // float
  date: string; // YYYY-MM-DD
  description?: string;
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
}
