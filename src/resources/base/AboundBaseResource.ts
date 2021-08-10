import { AboundResource, EmptyObject } from "./AboundResource";
import { AboundBulkResponse, AboundResponse } from "./AboundResponse";

/**
 * Abstract class for all base resources, wherein a base resource is one
 * having the relative path `https://baseURL/v2/resource` (i.e. it is not
 * scoped to a user).
 *
 * @param {I} input — the data type of the request body
 * @param {O} output — the data type of the response body
 */
export abstract class AboundBaseResource<I, O> extends AboundResource<I, O> {
  abstract path: string;

  protected async list(): Promise<AboundBulkResponse<O>> {
    return super._list(this.path);
  }

  protected async create(
    payload: Record<string, I>
  ): Promise<AboundResponse<O>> {
    return super._create(this.path, payload);
  }

  protected async retrieve(id: string): Promise<AboundResponse<O>> {
    const uri = `${this.path}/${id}`;

    return super._retrieve(uri);
  }

  protected async update(
    id: string,
    payload: Record<string, Partial<I>>
  ): Promise<AboundResponse<O>> {
    const uri = `${this.path}/${id}`;

    return super._update(uri, payload);
  }

  protected async delete(id: string): Promise<EmptyObject> {
    const uri = `${this.path}/${id}`;

    return super._delete(uri);
  }
}
