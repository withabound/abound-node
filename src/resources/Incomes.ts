import { EmptyObject, Notes, Pagination } from "./base/AboundResource";
import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";
import { AboundUserScopedResource } from "./base/AboundUserScopedResource";

// request body
export interface IncomeRequest {
  amount: number; // float
  date: string; // YYYY-MM-DD

  incomeType?: IncomeType;
  description?: string;
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
 * See https://docs.withabound.com/reference#incomes
 */
export default class Incomes extends AboundUserScopedResource<
  IncomeRequest,
  Income
> {
  path = "/incomes";

  public async create(
    userId: string,
    incomes: IncomeRequest[]
  ): Promise<AboundBulkResponse<Income>> {
    return super.bulkCreateForUser(userId, { incomes });
  }

  public async list(
    userId: string,
    parameters?: IncomeParameters
  ): Promise<AboundBulkResponse<Income>> {
    return super.listForUser(userId, parameters);
  }

  public async retrieve(
    userId: string,
    incomeId: string
  ): Promise<AboundResponse<Income>> {
    return super.retrieveForUser(userId, incomeId);
  }

  public async update(
    userId: string,
    incomeId: string,
    income: Partial<IncomeRequest>
  ): Promise<AboundResponse<Income>> {
    return super.updateForUser(userId, incomeId, { income });
  }

  public async delete(
    userId: string,
    incomeId: string
  ): Promise<AboundResponse<EmptyObject>> {
    return super.deleteForUser(userId, incomeId);
  }
}
