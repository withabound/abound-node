/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../../../errors/index";
import * as Abound from "../../../../../index";

export class BadRequestErrorSchema extends errors.AboundError {
    constructor(body: Abound.types.ErrorBadRequestSchema) {
        super({
            message: "BadRequestErrorSchema",
            statusCode: 400,
            body: body,
        });
        Object.setPrototypeOf(this, BadRequestErrorSchema.prototype);
    }
}
