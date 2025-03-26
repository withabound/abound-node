/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type MailingStatusEnum =
    | "CREATED"
    | "PROCESSING_FOR_DELIVERY"
    | "IN_TRANSIT"
    | "DELIVERED"
    | "RETURNED_TO_SENDER";
export const MailingStatusEnum = {
    Created: "CREATED",
    ProcessingForDelivery: "PROCESSING_FOR_DELIVERY",
    InTransit: "IN_TRANSIT",
    Delivered: "DELIVERED",
    ReturnedToSender: "RETURNED_TO_SENDER",
} as const;
