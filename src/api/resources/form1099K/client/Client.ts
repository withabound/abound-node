/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Abound from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Form1099K {
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

export class Form1099K {
    constructor(protected readonly _options: Form1099K.Options) {}

    /**
     * Returns a list of 1099-K documents.
     *
     * @param {Abound.Form1099KListRequest} request
     * @param {Form1099K.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.BadRequestError}
     * @throws {@link Abound.UnauthorizedError}
     * @throws {@link Abound.NotFoundError}
     * @throws {@link Abound.InternalServerError}
     *
     * @example
     *     await client.form1099K.list()
     */
    public async list(
        request: Abound.Form1099KListRequest = {},
        requestOptions?: Form1099K.RequestOptions
    ): Promise<Abound.Form1099KSchema[]> {
        const { page, filingYear, payeeTinFingerprint, payerTinFingerprint, status, userId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (page != null) {
            _queryParams["page"] = page.toString();
        }

        if (filingYear != null) {
            _queryParams["filingYear"] = filingYear;
        }

        if (payeeTinFingerprint != null) {
            _queryParams["payeeTinFingerprint"] = payeeTinFingerprint;
        }

        if (payerTinFingerprint != null) {
            _queryParams["payerTinFingerprint"] = payerTinFingerprint;
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
                "documents/1099-k"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "abound",
                "X-Fern-SDK-Version": "6.0.0-alpha0",
                "User-Agent": "abound/6.0.0-alpha0",
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
            return _response.body as Abound.Form1099KSchema[];
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
     * Creates a 1099-K document and subsequently kicks off a TIN verification, if the name and TIN combo has not been used before.
     *
     * @param {Abound.Form1099KRequestSchema} request
     * @param {Form1099K.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.BadRequestError}
     * @throws {@link Abound.UnauthorizedError}
     * @throws {@link Abound.NotFoundError}
     * @throws {@link Abound.InternalServerError}
     *
     * @example
     *     await client.form1099K.create({
     *         "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
     *         filingYear: 2023
     *     })
     */
    public async create(
        request: Abound.Form1099KRequestSchema,
        requestOptions?: Form1099K.RequestOptions
    ): Promise<Abound.Form1099KSchema> {
        const { "Idempotency-Key": idempotencyKey, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Production,
                "documents/1099-k"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "abound",
                "X-Fern-SDK-Version": "6.0.0-alpha0",
                "User-Agent": "abound/6.0.0-alpha0",
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
            return _response.body as Abound.Form1099KSchema;
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
     * Mails a 1099-K document.
     *
     * @param {string} documentId - The unique identifier for an existing document.
     * @param {Abound.Form1099KMailRequest} request
     * @param {Form1099K.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.BadRequestError}
     * @throws {@link Abound.UnauthorizedError}
     * @throws {@link Abound.NotFoundError}
     * @throws {@link Abound.InternalServerError}
     *
     * @example
     *     await client.form1099K.mail("{{documentId}}", {
     *         "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
     *         body: {
     *             to: {},
     *             from: {}
     *         }
     *     })
     */
    public async mail(
        documentId: string,
        request: Abound.Form1099KMailRequest,
        requestOptions?: Form1099K.RequestOptions
    ): Promise<Abound.MailingSchema> {
        const { "Idempotency-Key": idempotencyKey, body: _body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Production,
                `documents/1099-k/${encodeURIComponent(documentId)}/mail`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "abound",
                "X-Fern-SDK-Version": "6.0.0-alpha0",
                "User-Agent": "abound/6.0.0-alpha0",
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
     * Files a 1099-K document.
     *
     * @param {string} documentId - The unique identifier for an existing document.
     * @param {Abound.Form1099KFileRequest} request
     * @param {Form1099K.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.BadRequestError}
     * @throws {@link Abound.UnauthorizedError}
     * @throws {@link Abound.NotFoundError}
     * @throws {@link Abound.InternalServerError}
     *
     * @example
     *     await client.form1099K.file("{{documentId}}", {
     *         "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"
     *     })
     */
    public async file(
        documentId: string,
        request: Abound.Form1099KFileRequest = {},
        requestOptions?: Form1099K.RequestOptions
    ): Promise<Abound.Form1099KSchema> {
        const { "Idempotency-Key": idempotencyKey } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Production,
                `documents/1099-k/${encodeURIComponent(documentId)}/file`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "abound",
                "X-Fern-SDK-Version": "6.0.0-alpha0",
                "User-Agent": "abound/6.0.0-alpha0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                "Idempotency-Key": idempotencyKey != null ? idempotencyKey : undefined,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Abound.Form1099KSchema;
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
     * Files a new corrected 1099-K and relates it to the original document. A 1099-K can be corrected only after it has reached the `FILED` status. Automatically handles both one-transaction and two-transaction corrections.
     *
     * @param {string} documentId - The unique identifier for an existing document.
     * @param {Abound.Form1099KCorrectRequestSchema} request
     * @param {Form1099K.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.BadRequestError}
     * @throws {@link Abound.UnauthorizedError}
     * @throws {@link Abound.NotFoundError}
     * @throws {@link Abound.InternalServerError}
     *
     * @example
     *     await client.form1099K.correct("{{documentId}}", {
     *         "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"
     *     })
     */
    public async correct(
        documentId: string,
        request: Abound.Form1099KCorrectRequestSchema = {},
        requestOptions?: Form1099K.RequestOptions
    ): Promise<Abound.Form1099KSchema> {
        const { "Idempotency-Key": idempotencyKey, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Production,
                `documents/1099-k/${encodeURIComponent(documentId)}/correct`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "abound",
                "X-Fern-SDK-Version": "6.0.0-alpha0",
                "User-Agent": "abound/6.0.0-alpha0",
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
            return _response.body as Abound.Form1099KSchema;
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
     * Files a new voided 1099-K and relates it to the original document. A 1099-K can be voided only after it has reached the `FILED` status.
     *
     * @param {string} documentId - The unique identifier for an existing document.
     * @param {Abound.Form1099KVoidRequest} request
     * @param {Form1099K.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.BadRequestError}
     * @throws {@link Abound.UnauthorizedError}
     * @throws {@link Abound.NotFoundError}
     * @throws {@link Abound.InternalServerError}
     *
     * @example
     *     await client.form1099K.void("{{documentId}}", {
     *         "Idempotency-Key": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"
     *     })
     */
    public async void(
        documentId: string,
        request: Abound.Form1099KVoidRequest = {},
        requestOptions?: Form1099K.RequestOptions
    ): Promise<Abound.Form1099KSchema> {
        const { "Idempotency-Key": idempotencyKey } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Production,
                `documents/1099-k/${encodeURIComponent(documentId)}/void`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "abound",
                "X-Fern-SDK-Version": "6.0.0-alpha0",
                "User-Agent": "abound/6.0.0-alpha0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                "Idempotency-Key": idempotencyKey != null ? idempotencyKey : undefined,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Abound.Form1099KSchema;
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
     * Retrieves the details of an existing 1099-K document.
     *
     * @param {string} documentId - The unique identifier for an existing document.
     * @param {Form1099K.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.BadRequestError}
     * @throws {@link Abound.UnauthorizedError}
     * @throws {@link Abound.NotFoundError}
     * @throws {@link Abound.InternalServerError}
     *
     * @example
     *     await client.form1099K.retrieve("{{documentId}}")
     */
    public async retrieve(
        documentId: string,
        requestOptions?: Form1099K.RequestOptions
    ): Promise<Abound.Form1099KSchema> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Production,
                `documents/1099-k/${encodeURIComponent(documentId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "abound",
                "X-Fern-SDK-Version": "6.0.0-alpha0",
                "User-Agent": "abound/6.0.0-alpha0",
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
            return _response.body as Abound.Form1099KSchema;
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
     * Deletes a 1099-K document. Once an action (`/mail`, `/file`, `/correct`, `/void`) has been executed on a 1099-K, it cannot be deleted.
     *
     * @param {string} documentId - The unique identifier for an existing document.
     * @param {Form1099K.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.BadRequestError}
     * @throws {@link Abound.UnauthorizedError}
     * @throws {@link Abound.NotFoundError}
     * @throws {@link Abound.InternalServerError}
     *
     * @example
     *     await client.form1099K.delete("{{documentId}}")
     */
    public async delete(documentId: string, requestOptions?: Form1099K.RequestOptions): Promise<Abound.OkSchema> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Production,
                `documents/1099-k/${encodeURIComponent(documentId)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "abound",
                "X-Fern-SDK-Version": "6.0.0-alpha0",
                "User-Agent": "abound/6.0.0-alpha0",
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
