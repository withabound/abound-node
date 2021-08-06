import { destroy, get, post } from "../util/http";
import { AboundBulkResponse, AboundResponse } from "./AboundResponse";

/**
 * Base class for all non user-scoped resources, wherein a user-scoped resource
 * is one having the relative path `.../users/{userId}/resource`.
 *
 * @param {I} input — the data type of the request body
 * @param {O} output — the data type of the response body
 */
export abstract class AboundResource<I, O> {
  abstract path: string;

  protected async list(): Promise<AboundBulkResponse<O>> {
    return get(this.path);
  }

  protected async create(payload: I): Promise<AboundResponse<O>> {
    return post(this.path, payload);
  }

  protected async retrieve(id: string): Promise<AboundResponse<O>> {
    const uri = `${this.path}/${id}`;

    return get(uri);
  }

  protected async delete(
    id: string
  ): Promise<AboundResponse<Record<string, unknown>>> {
    const uri = `${this.path}/${id}`;

    return destroy(uri);
  }
}
