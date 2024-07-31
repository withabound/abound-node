/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Abound from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace FormW9 {
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

export class FormW9 {
    constructor(protected readonly _options: FormW9.Options) {}

    /**
     * Returns a list of W-9 documents.
     *
     * @param {Abound.FormW9ListRequest} request
     * @param {FormW9.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.BadRequestError}
     * @throws {@link Abound.UnauthorizedError}
     * @throws {@link Abound.NotFoundError}
     * @throws {@link Abound.InternalServerError}
     *
     * @example
     *     await client.formW9.list()
     */
    public async list(
        request: Abound.FormW9ListRequest = {},
        requestOptions?: FormW9.RequestOptions
    ): Promise<unknown[]> {
        const { page, payeeTinFingerprint, payerTinFingerprint, userId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (page != null) {
            _queryParams["page"] = page.toString();
        }

        if (payeeTinFingerprint != null) {
            _queryParams["payeeTinFingerprint"] = payeeTinFingerprint;
        }

        if (payerTinFingerprint != null) {
            _queryParams["payerTinFingerprint"] = payerTinFingerprint;
        }

        if (userId != null) {
            _queryParams["userId"] = userId;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Production,
                "documents/w-9"
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
            return _response.body as unknown[];
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
     * Creates a W-9 document and subsequently kicks off a TIN verification, if the name and TIN combo has not been used before.
     *
     * @param {Abound.W9RequestSchema} request
     * @param {FormW9.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.BadRequestError}
     * @throws {@link Abound.UnauthorizedError}
     * @throws {@link Abound.NotFoundError}
     * @throws {@link Abound.InternalServerError}
     *
     * @example
     *     await client.formW9.create({
     *         "Idempotency-Key": "string",
     *         payee: {
     *             name: "string",
     *             name2: "string",
     *             tin: "string",
     *             address: "string",
     *             address2: "string",
     *             city: "string",
     *             state: "string",
     *             postalCode: "string",
     *             country: "string"
     *         },
     *         payer: {
     *             name: "string",
     *             name2: "string",
     *             tin: "string",
     *             phoneNumber: "string",
     *             address: "string",
     *             address2: "string",
     *             city: "string",
     *             state: "string",
     *             postalCode: "string",
     *             country: "string"
     *         },
     *         formFields: {
     *             taxClassification: Abound.W9FormFieldsSchemaFormFieldsTaxClassification.Individual,
     *             otherTaxClassification: "string",
     *             hasIndirectForeignOwnership: true,
     *             exemptPayeeCode: Abound.W9FormFieldsSchemaFormFieldsExemptPayeeCode.One,
     *             exemptFatcaCode: Abound.W9FormFieldsSchemaFormFieldsExemptFatcaCode.A,
     *             accountNumbers: ["string"],
     *             isSubjectToBackupWithholding: true,
     *             certifiedAt: new Date("2024-01-15T09:30:00.000Z"),
     *             electronicSignature: {
     *                 signature: "string",
     *                 printedName: "string",
     *                 signedAt: new Date("2024-01-15T09:30:00.000Z"),
     *                 ipAddress: "string"
     *             }
     *         },
     *         userId: "string"
     *     })
     */
    public async create(request: Abound.W9RequestSchema, requestOptions?: FormW9.RequestOptions): Promise<unknown> {
        const { "Idempotency-Key": idempotencyKey, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Production,
                "documents/w-9"
            ),
            method: "POST",
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
            return _response.body;
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
     * Retrieves the details of an existing W-9 document.
     *
     * @param {string} documentId - The unique identifier for an existing document.
     * @param {FormW9.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.BadRequestError}
     * @throws {@link Abound.UnauthorizedError}
     * @throws {@link Abound.NotFoundError}
     * @throws {@link Abound.InternalServerError}
     *
     * @example
     *     await client.formW9.retrieve("string")
     */
    public async retrieve(documentId: string, requestOptions?: FormW9.RequestOptions): Promise<unknown> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Production,
                `documents/w-9/${encodeURIComponent(documentId)}`
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
            return _response.body;
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
