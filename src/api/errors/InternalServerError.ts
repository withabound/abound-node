/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";
import * as Abound from "../index";

export class InternalServerError extends errors.AboundError {
    constructor(body: Abound.ErrorSchema) {
        super({
            message: "InternalServerError",
            statusCode: 500,
            body: body,
        });
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
}
