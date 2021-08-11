import { EmptyObject, Notes } from "./base/AboundResource";
import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";
import { AboundUserScopedResource } from "./base/AboundUserScopedResource";

// request body
export interface IncomeRequest {
  incomeType: IncomeType;
  amount: number; // float
  date: string; // YYYY-MM-DD

  description?: string;
  category?: string;
  foreignId?: string;
  notes?: Notes;
}

// response body
export interface Income extends IncomeRequest {
  incomeId: Readonly<string>;
}

export type IncomeType = "1099" | "1099-INT" | "w2" | "personal";

/**
 * See https://docs.withabound.com/reference#incomes
 */
export class Incomes extends AboundUserScopedResource<IncomeRequest, Income> {
  path = "/incomes";

  public async create(
    userId: string,
    incomes: IncomeRequest[]
  ): Promise<AboundBulkResponse<Income>> {
    return super.bulkCreateForUser(userId, { incomes });
  }

  public async list(userId: string): Promise<AboundBulkResponse<Income>> {
    return super.listForUser(userId);
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
