import { destroy, get, post } from "../util/http";
import { AboundBulkResponse, AboundResponse } from "./AboundResponse";

// see https://github.com/typescript-eslint/typescript-eslint/issues/2063#issuecomment-675156492
type EmptyObject = Record<string, never>;

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

  protected async delete(id: string): Promise<EmptyObject> {
    const uri = `${this.path}/${id}`;

    return destroy(uri);
  }
}
