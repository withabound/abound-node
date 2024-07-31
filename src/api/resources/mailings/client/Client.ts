/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Abound from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Mailings {
    interface Options {
        environment?: core.Supplier<environments.AboundEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Mailings {
    constructor(protected readonly _options: Mailings.Options) {}

    /**
     * Returns a list of mailings. Up to 100 mailings are returned per request.
     *
     * @param {Abound.MailingsListRequest} request
     * @param {Mailings.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.BadRequestError}
     * @throws {@link Abound.UnauthorizedError}
     * @throws {@link Abound.NotFoundError}
     * @throws {@link Abound.InternalServerError}
     *
     * @example
     *     await client.mailings.list()
     */
    public async list(
        request: Abound.MailingsListRequest = {},
        requestOptions?: Mailings.RequestOptions
    ): Promise<Abound.MailingSchema[]> {
        const { page, status, userId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (page != null) {
            _queryParams["page"] = page.toString();
        }

        if (status != null) {
            _queryParams["status"] = status;
        }

        if (userId != null) {
            _queryParams["userId"] = userId;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Production,
                "mailings"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "abound",
                "X-Fern-SDK-Version": "1.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Abound.MailingSchema[];
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Abound.BadRequestError(_response.error.body as Abound.ErrorBadRequestSchema);
                case 401:
                    throw new Abound.UnauthorizedError(_response.error.body as Abound.ErrorSchema);
                case 404:
                    throw new Abound.NotFoundError(_response.error.body as Abound.ErrorSchema);
                case 500:
                    throw new Abound.InternalServerError(_response.error.body as Abound.ErrorSchema);
                default:
                    throw new errors.AboundError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AboundError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AboundTimeoutError();
            case "unknown":
                throw new errors.AboundError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieves the details of an existing mailing.
     *
     * @param {string} mailingId - The unique identifier for this mailing.
     * @param {Mailings.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.BadRequestError}
     * @throws {@link Abound.UnauthorizedError}
     * @throws {@link Abound.NotFoundError}
     * @throws {@link Abound.InternalServerError}
     *
     * @example
     *     await client.mailings.retrieve("{{mailingId}}")
     */
    public async retrieve(mailingId: string, requestOptions?: Mailings.RequestOptions): Promise<Abound.MailingSchema> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Production,
                `mailings/${encodeURIComponent(mailingId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "abound",
                "X-Fern-SDK-Version": "1.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Abound.MailingSchema;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Abound.BadRequestError(_response.error.body as Abound.ErrorBadRequestSchema);
                case 401:
                    throw new Abound.UnauthorizedError(_response.error.body as Abound.ErrorSchema);
                case 404:
                    throw new Abound.NotFoundError(_response.error.body as Abound.ErrorSchema);
                case 500:
                    throw new Abound.InternalServerError(_response.error.body as Abound.ErrorSchema);
                default:
                    throw new errors.AboundError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AboundError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AboundTimeoutError();
            case "unknown":
                throw new errors.AboundError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates an existing mailing. Once a mailing has reached the `PROCESSING_FOR_DELIVERY` status, it cannot be updated. Any body parameters not provided will be removed.
     *
     * @param {string} mailingId - The unique identifier for this mailing.
     * @param {Abound.MailingsUpdateRequest} request
     * @param {Mailings.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.BadRequestError}
     * @throws {@link Abound.UnauthorizedError}
     * @throws {@link Abound.NotFoundError}
     * @throws {@link Abound.InternalServerError}
     *
     * @example
     *     await client.mailings.update("{{mailingId}}", {
     *         "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
     *         body: {
     *             to: {},
     *             from: {}
     *         }
     *     })
     */
    public async update(
        mailingId: string,
        request: Abound.MailingsUpdateRequest,
        requestOptions?: Mailings.RequestOptions
    ): Promise<Abound.MailingSchema> {
        const { "Idempotency-Key": idempotencyKey, body: _body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Production,
                `mailings/${encodeURIComponent(mailingId)}`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "abound",
                "X-Fern-SDK-Version": "1.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                "Idempotency-Key": idempotencyKey != null ? idempotencyKey : undefined,
            },
            contentType: "application/json",
            requestType: "json",
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Abound.MailingSchema;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Abound.BadRequestError(_response.error.body as Abound.ErrorBadRequestSchema);
                case 401:
                    throw new Abound.UnauthorizedError(_response.error.body as Abound.ErrorSchema);
                case 404:
                    throw new Abound.NotFoundError(_response.error.body as Abound.ErrorSchema);
                case 500:
                    throw new Abound.InternalServerError(_response.error.body as Abound.ErrorSchema);
                default:
                    throw new errors.AboundError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AboundError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AboundTimeoutError();
            case "unknown":
                throw new errors.AboundError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Deletes a mailing. Once a mailing has reached the `PROCESSING_FOR_DELIVERY` status, it cannot be deleted.
     *
     * @param {string} mailingId - The unique identifier for this mailing.
     * @param {Mailings.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.BadRequestError}
     * @throws {@link Abound.UnauthorizedError}
     * @throws {@link Abound.NotFoundError}
     * @throws {@link Abound.InternalServerError}
     *
     * @example
     *     await client.mailings.delete("{{mailingId}}")
     */
    public async delete(mailingId: string, requestOptions?: Mailings.RequestOptions): Promise<Abound.OkSchema> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Production,
                `mailings/${encodeURIComponent(mailingId)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "abound",
                "X-Fern-SDK-Version": "1.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Abound.OkSchema;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Abound.BadRequestError(_response.error.body as Abound.ErrorBadRequestSchema);
                case 401:
                    throw new Abound.UnauthorizedError(_response.error.body as Abound.ErrorSchema);
                case 404:
                    throw new Abound.NotFoundError(_response.error.body as Abound.ErrorSchema);
                case 500:
                    throw new Abound.InternalServerError(_response.error.body as Abound.ErrorSchema);
                default:
                    throw new errors.AboundError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AboundError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AboundTimeoutError();
            case "unknown":
                throw new errors.AboundError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
