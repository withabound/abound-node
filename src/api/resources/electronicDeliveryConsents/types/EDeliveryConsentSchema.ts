/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../index";

export interface EDeliveryConsentSchema {
    /** The unique identifier for this electronic delivery consent. */
    id: string;
    /** The creation date and time of the electronic delivery consent in `ISO 8601` format. */
    createdAt: string;
    /** The status of the electronic delivery consent. */
    status: Abound.EDeliveryConsentStatusEnum;
    /** The email address associated with the electronic delivery consent. Abound assume's you have taken the proper steps to verify the ownership of this email address. */
    email: string;
    /** The TIN fingerprint for this electronic delivery consent. */
    tinFingerprint: Abound.types.TinFingerprint;
}
