import { EmptyObject, Notes, Pagination } from "./base/AboundResource";
import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";
import { AboundUserScopedResource } from "./base/AboundUserScopedResource";

// request body
export interface ExpenseRequest {
  amount: number; // float
  description: string;
  date: string; // YYYY-MM-DD
  expenseType?: ExpenseType;
  taxCategory?: string;
  foreignId?: string;
  notes?: Notes;
}

export enum ExpenseType {
  BUSINESS = "business",
  PERSONAL = "personal",
}

// query params
export interface ExpenseParameters extends Pagination {
  foreignId?: string;
  year?: string | number;
}

// response body
export interface Expense extends ExpenseRequest {
  expenseId: Readonly<string>;
  deductionAmount: number; // float
  predictions: ExpensePredictions;
}

interface ExpensePredictions {
  expenseTypePredictionScores: Record<string, number>; // 0 < values < 1
  taxCategoryPredictionScores: Record<string, number>; // 0 < values < 1
}

/**
 * See https://docs.withabound.com/reference#expenses
 */
export class Expenses extends AboundUserScopedResource<
  ExpenseRequest,
  Expense
> {
  path = "/expenses";

  public async create(
    userId: string,
    expenses: ExpenseRequest[]
  ): Promise<AboundBulkResponse<Expense>> {
    return super.bulkCreateForUser(userId, { expenses });
  }

  public async list(
    userId: string,
    parameters?: ExpenseParameters
  ): Promise<AboundBulkResponse<Expense>> {
    return super.listForUser(userId, parameters);
  }

  public async retrieve(
    userId: string,
    expenseId: string
  ): Promise<AboundResponse<Expense>> {
    return super.retrieveForUser(userId, expenseId);
  }

  public async update(
    userId: string,
    expenseId: string,
    expense: Partial<ExpenseRequest>
  ): Promise<AboundResponse<Expense>> {
    return super.updateForUser(userId, expenseId, { expense });
  }

  public async delete(
    userId: string,
    expenseId: string
  ): Promise<AboundResponse<EmptyObject>> {
    return super.deleteForUser(userId, expenseId);
  }
}
