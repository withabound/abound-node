/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";
import * as AboundApi from "../index";

export class BadRequestError extends errors.AboundApiError {
    constructor(body: AboundApi.ErrorBadRequestSchema) {
        super({
            message: "BadRequestError",
            statusCode: 400,
            body: body,
        });
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}
