import { AccessToken } from "../../src/resources/AccessTokens";
import { AboundResponse } from "../../src/resources/base/AboundResponse";
import { createAboundClients, TEST_USER_ID } from "../utils";

describe("Abound Access Tokens", () => {
  for (const abound of createAboundClients()) {
    describe("create", () => {
      it("returns a promise that resolves to the created access token on success", async () => {
        const createdAccessToken: AboundResponse<AccessToken> =
          await abound.accessTokens.create({
            userId: TEST_USER_ID,
          });

        expect(createdAccessToken.data).toMatchInlineSnapshot(`
Object {
  "accessToken": "accessToken_testeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiJhcHBJZF90ZXN0NDhlN2VhYTMxNzVhNjYzNTRlMDA2MjY1NDJkMiIsImNyZWF0ZWRfdGltZXN0YW1wIjoxNjU1MDk2NDAwMDAwLCJlbnZpcm9ubWVudCI6Imh0dHBzOi8vc2FuZGJveC1hcGkud2l0aGFib3VuZC5jb20vdjIiLCJleHBpcmF0aW9uX3RpbWVzdGFtcCI6MzI1MDM3MDE2MDAwMDAsInN0YXR1cyI6IkFjdGl2ZSIsInVzZXJfaWQiOiJ1c2VySWRfdGVzdDI0YjA1ZDc2MWZmNThiNTkzMWJkMDc3NzhjNjdiNGU4MThlNCIsImlhdCI6MTY1NTEzMDMxM30.dOUIyxTRV0QDmrFiy-GoyhKc8qru3pymIcPS5cGTaNk",
  "expirationTimestamp": 32503701600000,
}
`);
      });
    });
  }
});
