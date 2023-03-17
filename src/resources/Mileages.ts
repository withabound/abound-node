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
 * See https://docs.withabound.com/reference/mileage
 * @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog).
 */
export default class Mileages extends AboundUserScopedResource<
  MileageRequest,
  Mileage
> {
  path = "/mileage";

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async list(
    userId: string,
    parameters?: MileageParameters
  ): Promise<AboundBulkResponse<Mileage>> {
    return super.listForUser(userId, parameters);
  }

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async create(
    userId: string,
    mileages: MileageRequest[]
  ): Promise<AboundBulkResponse<Mileage>> {
    return super.bulkCreateForUser(userId, { mileages });
  }

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async retrieve(
    userId: string,
    mileageId: string
  ): Promise<AboundResponse<Mileage>> {
    return super.retrieveForUser(userId, mileageId);
  }

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async update(
    userId: string,
    mileageId: string,
    mileage: Partial<MileageRequest>
  ): Promise<AboundResponse<Mileage>> {
    return super.updateForUser(userId, mileageId, { mileage });
  }

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async delete(
    userId: string,
    mileageId: string
  ): Promise<AboundResponse<EmptyObject>> {
    return super.deleteForUser(userId, mileageId);
  }
}
