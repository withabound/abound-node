import Abound from "../../src/abound";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/base/AboundResponse";
import {
  AccountClass,
  AccountType,
  PaymentMethod,
} from "../../src/resources/PaymentMethods";
import { createAboundClient, randomNumberString, TEST_USER_ID } from "../utils";

describe("Abound Payment Methods", () => {
  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
  });

  describe("create", () => {
    it("returns a promise that resolves to a created payment method on success", async () => {
      const accountNumber = randomNumberString(10);
      const last4 = accountNumber.slice(-4);

      const createdPaymentMethod: AboundResponse<PaymentMethod> =
        await abound.paymentMethods.create(TEST_USER_ID, {
          accountNumber,
          routingNumber: "102001017",
          accountType: AccountType.PERSONAL,
          accountClass: AccountClass.CHECKING,
          notes: {
            preferredPaymentMethod: true,
          },
        });

      expect(createdPaymentMethod.data).toMatchInlineSnapshot(`
        Object {
          "accountClass": "checking",
          "accountNumberLast4": "${last4}",
          "accountType": "personal",
          "displayName": "(${last4}) personal checking",
          "paymentMethodId": "paymentMethodId_test32920837fa800382b7ee5676f281fbfc18cb",
          "status": "unverified",
        }
      `);
    });
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
