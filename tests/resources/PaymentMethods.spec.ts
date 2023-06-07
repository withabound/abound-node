import Abound from "../../src/abound";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/base/AboundResponse";
import { PaymentMethod } from "../../src/resources/PaymentMethods";
import { createAboundClient, TEST_USER_ID } from "../utils";

describe("Abound Payment Methods", () => {
  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
  });

  describe("list", () => {
    it("returns a promise that resolves to a user's payment methods on success", async () => {
      const paymentMethods: AboundBulkResponse<PaymentMethod> =
        await abound.paymentMethods.list(TEST_USER_ID);

      expect(paymentMethods.data).toMatchInlineSnapshot(`
        Array [
          Object {
            "accountClass": "checking",
            "accountNumberLast4": "7890",
            "accountType": "personal",
            "displayName": "(7890) personal checking",
            "paymentMethodId": "paymentMethodId_test32920837fa800382b7ee5676f281fbfc18cb",
            "status": "unverified",
          },
        ]
      `);
    });

    it("returns a promise that resolves to a list of filtered payment methods when querying by foreignId", async () => {
      const paymentMethods: AboundBulkResponse<PaymentMethod> =
        await abound.paymentMethods.list(TEST_USER_ID, {
          foreignId: "29SMN2KD9",
        });

      expect(paymentMethods.data).toMatchInlineSnapshot(`
Array [
  Object {
    "accountClass": "checking",
    "accountNumberLast4": "7890",
    "accountType": "personal",
    "displayName": "(7890) personal checking",
    "paymentMethodId": "paymentMethodId_test32920837fa800382b7ee5676f281fbfc18cb",
    "status": "unverified",
  },
]
`);
    });
  });

  describe("retrieve", () => {
    it("returns a promise that resolves to a single payment method on success", async () => {
      const paymentMethod: AboundResponse<PaymentMethod> =
        await abound.paymentMethods.retrieve(
          TEST_USER_ID,
          "paymentMethodId_test32920837fa800382b7ee5676f281fbfc18cb"
        );

      expect(paymentMethod.data).toMatchInlineSnapshot(`
        Object {
          "accountClass": "checking",
          "accountNumberLast4": "7890",
          "accountType": "personal",
          "displayName": "(7890) personal checking",
          "paymentMethodId": "paymentMethodId_test32920837fa800382b7ee5676f281fbfc18cb",
          "status": "unverified",
        }
      `);
    });
  });
});
