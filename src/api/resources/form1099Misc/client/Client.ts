/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Abound from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Form1099Misc {
    interface Options {
        environment?: core.Supplier<environments.AboundEnvironment | string>;
        apiKey: core.Supplier<core.BearerToken>;
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

export class Form1099Misc {
    constructor(protected readonly _options: Form1099Misc.Options) {}

    /**
     * Returns a list of 1099-MISC documents.
     *
     * @param {Abound.Form1099MiscListRequest} request
     * @param {Form1099Misc.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.types.BadRequestErrorSchema}
     * @throws {@link Abound.types.UnauthorizedErrorSchema}
     * @throws {@link Abound.types.NotFoundErrorSchema}
     * @throws {@link Abound.types.InternalServerErrorSchema}
     *
     * @example
     *     await client.form1099Misc.list()
     */
    public async list(
        request: Abound.Form1099MiscListRequest = {},
        requestOptions?: Form1099Misc.RequestOptions
    ): Promise<Abound.Form1099MiscSchema[]> {
        const { page, filingYear, payeeTinFingerprint, payerTinFingerprint, status, userId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (page != null) {
            _queryParams["page"] = page.toString();
        }

        if (filingYear != null) {
            _queryParams["filingYear"] = filingYear.toString();
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
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Sandbox,
                "/v4/documents/1099-misc"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@withabound/node-sdk",
                "X-Fern-SDK-Version": "6.0.25",
                "User-Agent": "@withabound/node-sdk/6.0.25",
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
            return _response.body as Abound.Form1099MiscSchema[];
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Abound.types.BadRequestErrorSchema(
                        _response.error.body as Abound.types.ErrorBadRequestSchema
                    );
                case 401:
                    throw new Abound.types.UnauthorizedErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
                case 404:
                    throw new Abound.types.NotFoundErrorSchema(_response.error.body as Abound.types.DefaultErrorSchema);
                case 500:
                    throw new Abound.types.InternalServerErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
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
     * Creates a 1099-MISC document and subsequently kicks off a TIN Verification, if the name and TIN combo has not been used before.
     *
     * @param {Abound.Form1099MiscRequest} request
     * @param {Form1099Misc.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.types.BadRequestErrorSchema}
     * @throws {@link Abound.types.UnauthorizedErrorSchema}
     * @throws {@link Abound.types.NotFoundErrorSchema}
     * @throws {@link Abound.types.InternalServerErrorSchema}
     *
     * @example
     *     await client.form1099Misc.create({
     *         body: {
     *             filingYear: 2023,
     *             payer: {
     *                 name: "Hooli",
     *                 tin: "111111111",
     *                 address: "256 Byron Street",
     *                 address2: "Suite 32",
     *                 city: "Palo Alto",
     *                 state: "CA",
     *                 postalCode: "94306",
     *                 country: "US",
     *                 phoneNumber: "+16501014096"
     *             },
     *             payee: {
     *                 name: "Ada Lovelace",
     *                 tin: "000000000",
     *                 address: "1401 N Shoreline Blvd",
     *                 address2: "Suite 1",
     *                 city: "Mountain View",
     *                 state: "CA",
     *                 postalCode: "94043",
     *                 country: "US"
     *             },
     *             formFields: {
     *                 cropInsuranceProceeds: 97109,
     *                 excessGoldenParachutePayments: 97109,
     *                 federalIncomeTaxWithheld: 0,
     *                 fishPurchasedForResale: 97109,
     *                 fishingBoatProceeds: 97109,
     *                 grossProceedsPaidToAnAttorney: 97109,
     *                 hasDirectSalesOver5000: false,
     *                 hasFatcaFilingRequirement: true,
     *                 medicalAndHealthCarePayments: 97109,
     *                 nonqualifiedDeferredCompensation: 97109,
     *                 substitutePaymentsInLieuOfDividendsOrInterest: 97109,
     *                 otherIncome: 97109,
     *                 rents: 97109,
     *                 royalties: 97109,
     *                 section409ADeferrals: 97109,
     *                 accountNumber: "A00AskD1ZTO4YB8oBHav",
     *                 stateTaxInfo: [{
     *                         filingState: "CA",
     *                         stateIncome: 345543,
     *                         stateTaxWithheld: 0
     *                     }]
     *             }
     *         }
     *     })
     */
    public async create(
        request: Abound.Form1099MiscRequest,
        requestOptions?: Form1099Misc.RequestOptions
    ): Promise<Abound.Form1099MiscSchema> {
        const { "Idempotency-Key": idempotencyKey, body: _body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Sandbox,
                "/v4/documents/1099-misc"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@withabound/node-sdk",
                "X-Fern-SDK-Version": "6.0.25",
                "User-Agent": "@withabound/node-sdk/6.0.25",
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
            return _response.body as Abound.Form1099MiscSchema;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Abound.types.BadRequestErrorSchema(
                        _response.error.body as Abound.types.ErrorBadRequestSchema
                    );
                case 401:
                    throw new Abound.types.UnauthorizedErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
                case 404:
                    throw new Abound.types.NotFoundErrorSchema(_response.error.body as Abound.types.DefaultErrorSchema);
                case 500:
                    throw new Abound.types.InternalServerErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
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
     * Mails a 1099-MISC document.
     *
     * @param {Abound.types.DocumentId} documentId
     * @param {Abound.Form1099MiscMailingRequest} request
     * @param {Form1099Misc.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.types.BadRequestErrorSchema}
     * @throws {@link Abound.types.UnauthorizedErrorSchema}
     * @throws {@link Abound.types.NotFoundErrorSchema}
     * @throws {@link Abound.types.InternalServerErrorSchema}
     *
     * @example
     *     await client.form1099Misc.mail("documentId_sampleGNPOKNmIgF", {
     *         body: {
     *             to: {
     *                 address: "1401 N Shoreline Blvd",
     *                 address2: "Suite 1",
     *                 city: "Mountain View",
     *                 state: "CA",
     *                 postalCode: "94043",
     *                 country: "US",
     *                 name: "Ada Lovelace"
     *             },
     *             from: {
     *                 address: "256 Byron Street",
     *                 address2: "Suite 32",
     *                 city: "Palo Alto",
     *                 state: "CA",
     *                 postalCode: "94306",
     *                 country: "US",
     *                 name: "Hooli"
     *             }
     *         }
     *     })
     */
    public async mail(
        documentId: Abound.types.DocumentId,
        request: Abound.Form1099MiscMailingRequest,
        requestOptions?: Form1099Misc.RequestOptions
    ): Promise<Abound.MailingSchema> {
        const { "Idempotency-Key": idempotencyKey, body: _body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Sandbox,
                `/v4/documents/1099-misc/${encodeURIComponent(documentId)}/mail`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@withabound/node-sdk",
                "X-Fern-SDK-Version": "6.0.25",
                "User-Agent": "@withabound/node-sdk/6.0.25",
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
                    throw new Abound.types.BadRequestErrorSchema(
                        _response.error.body as Abound.types.ErrorBadRequestSchema
                    );
                case 401:
                    throw new Abound.types.UnauthorizedErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
                case 404:
                    throw new Abound.types.NotFoundErrorSchema(_response.error.body as Abound.types.DefaultErrorSchema);
                case 500:
                    throw new Abound.types.InternalServerErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
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
     * Files a 1099-MISC document.
     *
     * @param {Abound.types.DocumentId} documentId
     * @param {Abound.Form1099MiscFileRequest} request
     * @param {Form1099Misc.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.types.BadRequestErrorSchema}
     * @throws {@link Abound.types.UnauthorizedErrorSchema}
     * @throws {@link Abound.types.NotFoundErrorSchema}
     * @throws {@link Abound.types.InternalServerErrorSchema}
     *
     * @example
     *     await client.form1099Misc.file("documentId_sampleGNPOKNmIgF")
     */
    public async file(
        documentId: Abound.types.DocumentId,
        request: Abound.Form1099MiscFileRequest = {},
        requestOptions?: Form1099Misc.RequestOptions
    ): Promise<Abound.Form1099MiscSchema> {
        const { "Idempotency-Key": idempotencyKey } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Sandbox,
                `/v4/documents/1099-misc/${encodeURIComponent(documentId)}/file`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@withabound/node-sdk",
                "X-Fern-SDK-Version": "6.0.25",
                "User-Agent": "@withabound/node-sdk/6.0.25",
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
            return _response.body as Abound.Form1099MiscSchema;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Abound.types.BadRequestErrorSchema(
                        _response.error.body as Abound.types.ErrorBadRequestSchema
                    );
                case 401:
                    throw new Abound.types.UnauthorizedErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
                case 404:
                    throw new Abound.types.NotFoundErrorSchema(_response.error.body as Abound.types.DefaultErrorSchema);
                case 500:
                    throw new Abound.types.InternalServerErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
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
     * Files a new corrected 1099-MISC and relates it to the original document. A 1099-MISC can be corrected only after it has reached the `FILED` status. Automatically handles both one-transaction and two-transaction corrections.
     *
     * @param {Abound.types.DocumentId} documentId
     * @param {Abound.Form1099MiscCorrectRequest} request
     * @param {Form1099Misc.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.types.BadRequestErrorSchema}
     * @throws {@link Abound.types.UnauthorizedErrorSchema}
     * @throws {@link Abound.types.NotFoundErrorSchema}
     * @throws {@link Abound.types.InternalServerErrorSchema}
     *
     * @example
     *     await client.form1099Misc.correct("documentId_sampleGNPOKNmIgF", {
     *         body: {
     *             payee: {
     *                 name: "Ada Lovelace",
     *                 tin: "000000000",
     *                 address: "1401 N Shoreline Blvd",
     *                 address2: "Suite 1",
     *                 city: "Mountain View",
     *                 state: "CA",
     *                 postalCode: "94043",
     *                 country: "US"
     *             },
     *             formFields: {
     *                 cropInsuranceProceeds: 97109,
     *                 excessGoldenParachutePayments: 97109,
     *                 federalIncomeTaxWithheld: 0,
     *                 fishPurchasedForResale: 97109,
     *                 fishingBoatProceeds: 97109,
     *                 grossProceedsPaidToAnAttorney: 97109,
     *                 hasDirectSalesOver5000: false,
     *                 hasFatcaFilingRequirement: true,
     *                 medicalAndHealthCarePayments: 97109,
     *                 nonqualifiedDeferredCompensation: 97109,
     *                 substitutePaymentsInLieuOfDividendsOrInterest: 97109,
     *                 otherIncome: 97109,
     *                 rents: 10000,
     *                 royalties: 97109,
     *                 section409ADeferrals: 97109,
     *                 accountNumber: "A00AskD1ZTO4YB8oBHav",
     *                 stateTaxInfo: [{
     *                         filingState: "CA",
     *                         stateIncome: 258434
     *                     }]
     *             }
     *         }
     *     })
     */
    public async correct(
        documentId: Abound.types.DocumentId,
        request: Abound.Form1099MiscCorrectRequest,
        requestOptions?: Form1099Misc.RequestOptions
    ): Promise<Abound.Form1099MiscSchema> {
        const { "Idempotency-Key": idempotencyKey, body: _body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Sandbox,
                `/v4/documents/1099-misc/${encodeURIComponent(documentId)}/correct`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@withabound/node-sdk",
                "X-Fern-SDK-Version": "6.0.25",
                "User-Agent": "@withabound/node-sdk/6.0.25",
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
            return _response.body as Abound.Form1099MiscSchema;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Abound.types.BadRequestErrorSchema(
                        _response.error.body as Abound.types.ErrorBadRequestSchema
                    );
                case 401:
                    throw new Abound.types.UnauthorizedErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
                case 404:
                    throw new Abound.types.NotFoundErrorSchema(_response.error.body as Abound.types.DefaultErrorSchema);
                case 500:
                    throw new Abound.types.InternalServerErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
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
     * Files a new voided 1099-MISC and relates it to the original document. A 1099-MISC can be voided only after it has reached the `FILED` status.
     *
     * @param {Abound.types.DocumentId} documentId
     * @param {Abound.Form1099MiscVoidRequest} request
     * @param {Form1099Misc.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.types.BadRequestErrorSchema}
     * @throws {@link Abound.types.UnauthorizedErrorSchema}
     * @throws {@link Abound.types.NotFoundErrorSchema}
     * @throws {@link Abound.types.InternalServerErrorSchema}
     *
     * @example
     *     await client.form1099Misc.void("documentId_sampleGNPOKNmIgF")
     */
    public async void(
        documentId: Abound.types.DocumentId,
        request: Abound.Form1099MiscVoidRequest = {},
        requestOptions?: Form1099Misc.RequestOptions
    ): Promise<Abound.Form1099MiscSchema> {
        const { "Idempotency-Key": idempotencyKey } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Sandbox,
                `/v4/documents/1099-misc/${encodeURIComponent(documentId)}/void`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@withabound/node-sdk",
                "X-Fern-SDK-Version": "6.0.25",
                "User-Agent": "@withabound/node-sdk/6.0.25",
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
            return _response.body as Abound.Form1099MiscSchema;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Abound.types.BadRequestErrorSchema(
                        _response.error.body as Abound.types.ErrorBadRequestSchema
                    );
                case 401:
                    throw new Abound.types.UnauthorizedErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
                case 404:
                    throw new Abound.types.NotFoundErrorSchema(_response.error.body as Abound.types.DefaultErrorSchema);
                case 500:
                    throw new Abound.types.InternalServerErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
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
     * Retrieves the details of an existing 1099-MISC document.
     *
     * @param {Abound.types.DocumentId} documentId
     * @param {Form1099Misc.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.types.BadRequestErrorSchema}
     * @throws {@link Abound.types.UnauthorizedErrorSchema}
     * @throws {@link Abound.types.NotFoundErrorSchema}
     * @throws {@link Abound.types.InternalServerErrorSchema}
     *
     * @example
     *     await client.form1099Misc.retrieve("documentId_sampleGNPOKNmIgF")
     */
    public async retrieve(
        documentId: Abound.types.DocumentId,
        requestOptions?: Form1099Misc.RequestOptions
    ): Promise<Abound.Form1099MiscSchema> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Sandbox,
                `/v4/documents/1099-misc/${encodeURIComponent(documentId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@withabound/node-sdk",
                "X-Fern-SDK-Version": "6.0.25",
                "User-Agent": "@withabound/node-sdk/6.0.25",
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
            return _response.body as Abound.Form1099MiscSchema;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Abound.types.BadRequestErrorSchema(
                        _response.error.body as Abound.types.ErrorBadRequestSchema
                    );
                case 401:
                    throw new Abound.types.UnauthorizedErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
                case 404:
                    throw new Abound.types.NotFoundErrorSchema(_response.error.body as Abound.types.DefaultErrorSchema);
                case 500:
                    throw new Abound.types.InternalServerErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
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
     * Deletes a 1099-MISC document. Once an action (`/file`, `/correct`, `/void`) has been executed on a 1099-MISC, it cannot be deleted.
     *
     * @param {Abound.types.DocumentId} documentId
     * @param {Form1099Misc.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Abound.types.BadRequestErrorSchema}
     * @throws {@link Abound.types.UnauthorizedErrorSchema}
     * @throws {@link Abound.types.NotFoundErrorSchema}
     * @throws {@link Abound.types.InternalServerErrorSchema}
     *
     * @example
     *     await client.form1099Misc.delete("documentId_sampleGNPOKNmIgF")
     */
    public async delete(
        documentId: Abound.types.DocumentId,
        requestOptions?: Form1099Misc.RequestOptions
    ): Promise<Abound.types.OkSchema> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AboundEnvironment.Sandbox,
                `/v4/documents/1099-misc/${encodeURIComponent(documentId)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@withabound/node-sdk",
                "X-Fern-SDK-Version": "6.0.25",
                "User-Agent": "@withabound/node-sdk/6.0.25",
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
            return _response.body as Abound.types.OkSchema;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Abound.types.BadRequestErrorSchema(
                        _response.error.body as Abound.types.ErrorBadRequestSchema
                    );
                case 401:
                    throw new Abound.types.UnauthorizedErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
                case 404:
                    throw new Abound.types.NotFoundErrorSchema(_response.error.body as Abound.types.DefaultErrorSchema);
                case 500:
                    throw new Abound.types.InternalServerErrorSchema(
                        _response.error.body as Abound.types.DefaultErrorSchema
                    );
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
        return `Bearer ${await core.Supplier.get(this._options.apiKey)}`;
    }
}
