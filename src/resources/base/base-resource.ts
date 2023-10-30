import type { EmptyObject } from "type-fest";
import { type AboundContext } from "../../abound.js";
import { AboundBadRequest, type ApiBadRequest } from "./abound-bad-request.js";
import { AboundError, type ApiError } from "./abound-error.js";

// eslint-disable-next-line @typescript-eslint/naming-convention
export function post<TResponse, TRequest>(
  resource: string,
  context: AboundContext
) {
  return async (request: TRequest): Promise<TResponse> =>
    fetch(`${context.baseUrl}/v4/${resource}`, {
      method: "POST",
      headers: context.headers,
      body: JSON.stringify(request),
    }).then(async (response) => {
      if (response.ok) {
        return response.json() as Promise<TResponse>;
      }

      const error = await response.json();
      if (response.status === 400) {
        const { errors } = error as ApiBadRequest;
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw new AboundBadRequest(errors);
      }

      const { message } = error as ApiError;
      throw new AboundError(message);
    });
}

export function list<
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TResponse,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TParameters extends Record<string, unknown>,
>(resource: string, context: AboundContext) {
  return async (parameters?: TParameters): Promise<TResponse[]> => {
    const urlSearchParameters = new URLSearchParams();
    for (const [key, value] of Object.entries(parameters ?? {})) {
      urlSearchParameters.append(key, String(value));
    }

    let queryStringParameters = "";
    if (urlSearchParameters.size > 0) {
      queryStringParameters = `?${urlSearchParameters.toString()}`;
    }

    return fetch(`${context.baseUrl}/v4/${resource}${queryStringParameters}`, {
      method: "GET",
      headers: context.headers,
    }).then(async (response) => {
      if (response.ok) {
        return response.json() as Promise<TResponse[]>;
      }

      const error = await response.json();
      if (response.status === 400) {
        const { errors } = error as ApiBadRequest;
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw new AboundBadRequest(errors);
      }

      const { message } = error as ApiError;
      throw new AboundError(message);
    });
  };
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export function get<TResponse>(resource: string, context: AboundContext) {
  return async (id: string): Promise<TResponse> =>
    fetch(`${context.baseUrl}/v4/${resource}/${id}`, {
      method: "GET",
      headers: context.headers,
    }).then(async (response) => {
      if (response.ok) {
        return response.json() as Promise<TResponse>;
      }

      const error = await response.json();
      const { message } = error as ApiError;
      throw new AboundError(message);
    });
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export function put<TResponse, TRequest>(
  resource: string,
  context: AboundContext
) {
  return async (id: string, request: TRequest): Promise<TResponse> =>
    fetch(`${context.baseUrl}/v4/${resource}/${id}`, {
      method: "PUT",
      headers: context.headers,
      body: JSON.stringify(request),
    }).then(async (response) => {
      if (response.ok) {
        return response.json() as Promise<TResponse>;
      }

      const error = await response.json();
      if (response.status === 400) {
        const { errors } = error as ApiBadRequest;
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw new AboundBadRequest(errors);
      }

      const { message } = error as ApiError;
      throw new AboundError(message);
    });
}

export function delete_(resource: string, context: AboundContext) {
  return async (id: string): Promise<EmptyObject> =>
    fetch(`${context.baseUrl}/v4/${resource}/${id}`, {
      method: "DELETE",
      headers: context.headers,
    }).then(async (response) => {
      if (response.ok) {
        return response.json() as Promise<EmptyObject>;
      }

      const error = await response.json();
      const { message } = error as ApiError;
      throw new AboundError(message);
    });
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export function action<TResponse, TRequest>(
  resource: string,
  context: AboundContext,
  action: string
) {
  return async (id: string, request: TRequest): Promise<TResponse> =>
    fetch(`${context.baseUrl}/v4/${resource}/${id}/${action}`, {
      method: "POST",
      headers: context.headers,
      body: JSON.stringify(request),
    }).then(async (response) => {
      if (response.ok) {
        return response.json() as Promise<TResponse>;
      }

      const error = await response.json();
      if (response.status === 400) {
        const { errors } = error as ApiBadRequest;
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw new AboundBadRequest(errors);
      }

      const { message } = error as ApiError;
      throw new AboundError(message);
    });
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export function actionWithEmptyRequest<TResponse>(
  resource: string,
  context: AboundContext,
  action: string
) {
  return async (id: string): Promise<TResponse> =>
    fetch(`${context.baseUrl}/v4/${resource}/${id}/${action}`, {
      method: "POST",
      headers: context.headers,
    }).then(async (response) => {
      if (response.ok) {
        return response.json() as Promise<TResponse>;
      }

      const error = await response.json();
      if (response.status === 400) {
        const { errors } = error as ApiBadRequest;
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw new AboundBadRequest(errors);
      }

      const { message } = error as ApiError;
      throw new AboundError(message);
    });
}
