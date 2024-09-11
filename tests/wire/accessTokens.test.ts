/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { AboundClient } from "../../src/Client";

const client = new AboundClient({
    environment: process.env.TESTS_BASE_URL || "test",
    apiKey: process.env.TESTS_AUTH || "test",
});

describe("AccessTokens", () => {
    test("create", async () => {
        const response = await client.accessTokens.create({
            expiresIn: 900,
        });
        expect(response).toEqual({
            accessToken:
                "accessToken_sampleeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTY5ODczNTcsImV4cCI6MTY5Njk4NzY1NywiYXVkIjoiYXBwSWRfc2FtcGxlcU5oVmNkWVFZVSIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hcGkud2l0aGFib3VuZC5jb20vdjQiLCJzdWIiOiJ1c2VySWRfc2FtcGxlWEdNRm5oT3BlUiJ9.-NrPVQvsnM8vJouyuP5yeFGlYb1xGgR-gS3v87p5BQk",
            createdAt: "2024-01-01T00:00:00.000Z",
            expiresAt: "2024-01-01T00:15:00.000Z",
        });
    });
});