import { AxiosInstance } from "axios";
import { destroy, get, post, put } from "../../util/http";
import { AboundBulkResponse, AboundResponse } from "./AboundResponse";

// see https://github.com/typescript-eslint/typescript-eslint/issues/2063#issuecomment-675156492
export type EmptyObject = Record<string, never>;

export type Notes = string | Record<string, unknown>;

export interface Pagination extends Record<string, unknown> {
  page?: string;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type DeepPartial<TType> = TType extends object
  ? {
      [TPropery in keyof TType]?: DeepPartial<TType[TPropery]>;
    }
  : TType;

/**
 * Base resource from which all other Abound Resources shall extend that maps an API action
 * (e.g. update) to an HTTP verb (e.g. PUT). Direct subclasses include
 * AboundBaseResource and AboundUserScopedResource.
 *
 * @param {I} input — the data type of the request body
 * @param {O} output — the data type of the payloads returned by SDK methods.
 * @param {RESP} API response — the data type of the raw response returned by Abound's APIs. In most cases,
 * the payload returned by the APIs is the same as the payload returned by the SDK. Infrequently, the SDK
 * will process raw API responses, transforming them into type O.
 */
export abstract class AboundResource<I, O, RESP extends O = O> {
  private readonly axiosInstance: AxiosInstance;

  abstract path: string;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  protected getDeprecatedFields(): Array<keyof RESP> {
    return [];
  }

  protected async _list<P extends Record<string, unknown>>(
    uri: string,
    parameters?: P
  ): Promise<AboundBulkResponse<O>> {
    const response: AboundBulkResponse<RESP> = await get(
      this.axiosInstance,
      uri,
      parameters
    );

    return Promise.resolve(this.bulkRemoveDeprecatedFields(response));
  }

  protected async _create(
    uri: string,
    payload: Record<string, I>
  ): Promise<AboundResponse<O>> {
    const response: AboundResponse<RESP> = await post(
      this.axiosInstance,
      uri,
      payload
    );

    return Promise.resolve(this.removeDeprecatedFields(response));
  }

  protected async _bulkCreate(
    uri: string,
    payload: Record<string, I[]>
  ): Promise<AboundBulkResponse<O>> {
    const response: AboundBulkResponse<RESP> = await post(
      this.axiosInstance,
      uri,
      payload
    );

    return Promise.resolve(this.bulkRemoveDeprecatedFields(response));
  }

  protected async _retrieve(uri: string): Promise<AboundResponse<O>> {
    const response: AboundResponse<RESP> = await get(this.axiosInstance, uri);

    return Promise.resolve(this.removeDeprecatedFields(response));
  }

  protected async _update(
    uri: string,
    payload: Record<string, DeepPartial<I>>
  ): Promise<AboundResponse<O>> {
    const response: AboundResponse<RESP> = await put(
      this.axiosInstance,
      uri,
      payload
    );

    return Promise.resolve(this.removeDeprecatedFields(response));
  }

  protected async _delete(uri: string): Promise<AboundResponse<EmptyObject>> {
    return destroy(this.axiosInstance, uri);
  }

  private removeDeprecatedFields(
    response: AboundResponse<RESP>
  ): AboundResponse<O> {
    for (const deprecatedField of this.getDeprecatedFields()) {
      delete response.data[deprecatedField]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
    }

    return response;
  }

  private bulkRemoveDeprecatedFields(
    response: AboundBulkResponse<RESP>
  ): AboundBulkResponse<O> {
    for (const deprecatedField of this.getDeprecatedFields()) {
      for (const resource of response.data) {
        delete resource[deprecatedField]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
      }
    }

    return response;
  }
}
