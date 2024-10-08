/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { AboundClient } from "../../src/Client";

const client = new AboundClient({
    environment: process.env.TESTS_BASE_URL || "test",
    apiKey: process.env.TESTS_AUTH || "test",
});

describe("TaxTreaties", () => {
    test("list", async () => {
        const response = await client.taxTreaties.list();
        expect(response).toEqual([
            {
                taxTreatyCode: "GB_17_INDEPENDENT_PERSONAL_SERVICES",
                residentCountry: "GB",
                rateOfWithholding: 0,
                description: "Independent personal services performed in the US",
            },
        ]);
    });
});
