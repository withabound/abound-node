import { EmptyObject, Notes, Pagination } from "./base/AboundResource";
import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";
import { AboundUserScopedResource } from "./base/AboundUserScopedResource";

// request body
export interface IncomeRequest {
  amount: number; // float
  date: string; // YYYY-MM-DD
  description: string;

  incomeType?: IncomeType;
  category?: string;
  foreignId?: string;
  // The specific document code used when filling out this income.
  documentType?: IncomeDocumentType;
  notes?: Notes;
}

export enum IncomeDocumentType {
  TEN99INT = "1099int",
  TEN99K = "1099k",
  TEN99MISC = "1099misc",
  TEN99NEC = "1099nec",
  SSA1099 = "ssa1099",
}

// query params
export interface IncomeParameters extends Pagination {
  foreignId?: string;
  incomeType?: IncomeType;
}

// response body
export interface Income extends IncomeRequest {
  incomeId: Readonly<string>;
  predictions: Readonly<IncomePredictions>;
}

interface IncomePredictions {
  incomeTypePredictionScores: Record<string, number>; // 0 < values < 1
}

export enum IncomeType {
  TEN99 = "1099",
  W2 = "w2",
  PERSONAL = "personal",
}

/**
 * See https://docs.withabound.com/reference/incomes
 * @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog).
 */
export default class Incomes extends AboundUserScopedResource<
  IncomeRequest,
  Income
> {
  path = "/incomes";

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async create(
    userId: string,
    incomes: IncomeRequest[]
  ): Promise<AboundBulkResponse<Income>> {
    return super.bulkCreateForUser(userId, { incomes });
  }

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async list(
    userId: string,
    parameters?: IncomeParameters
  ): Promise<AboundBulkResponse<Income>> {
    return super.listForUser(userId, parameters);
  }

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async retrieve(
    userId: string,
    incomeId: string
  ): Promise<AboundResponse<Income>> {
    return super.retrieveForUser(userId, incomeId);
  }

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async update(
    userId: string,
    incomeId: string,
    income: Partial<IncomeRequest>
  ): Promise<AboundResponse<Income>> {
    return super.updateForUser(userId, incomeId, { income });
  }

  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  public async delete(
    userId: string,
    incomeId: string
  ): Promise<AboundResponse<EmptyObject>> {
    return super.deleteForUser(userId, incomeId);
  }
}
