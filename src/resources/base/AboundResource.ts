import { destroy, get, post, put } from "../../util/http";
import { AboundBulkResponse, AboundResponse } from "./AboundResponse";

// see https://github.com/typescript-eslint/typescript-eslint/issues/2063#issuecomment-675156492
export type EmptyObject = Record<string, never>;

export type Notes = string | Record<string, unknown>;

export interface Pagination {
  page?: string;
}

/**
 * Base resource from which all other Abound Resources shall extend that maps an API action
 * (e.g. update) to an HTTP verb (e.g. PUT). Direct subclasses include
 * AboundBaseResource and AboundUserScopedResource.
 */
export abstract class AboundResource<I, O> {
  abstract path: string;

  protected async _list<P extends Record<string, unknown>>(
    uri: string,
    parameters?: P
  ): Promise<AboundBulkResponse<O>> {
    return get(uri, parameters);
  }

  protected async _create(
    uri: string,
    payload: Record<string, I>
  ): Promise<AboundResponse<O>> {
    return post(uri, payload);
  }

  protected async _bulkCreate(
    uri: string,
    payload: Record<string, I[]>
  ): Promise<AboundBulkResponse<O>> {
    return post(uri, payload);
  }

  protected async _retrieve(uri: string): Promise<AboundResponse<O>> {
    return get(uri);
  }

  protected async _update(
    uri: string,
    payload: Record<string, Partial<I>>
  ): Promise<AboundResponse<O>> {
    return put(uri, payload);
  }

  protected async _delete(uri: string): Promise<AboundResponse<EmptyObject>> {
    return destroy(uri);
  }
}
