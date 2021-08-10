import nock from "nock";

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
import {
  createAboundClient,
  randomNumberString,
  V2_SANDBOX_URL,
} from "../utils";

describe("Abound Payment Methods", () => {
  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
    initMocks();
  });

  afterAll(() => {
    nock.restore();
  });

  describe("create", () => {
    it("returns a promise that resolves to a created payment method on success", async () => {
      const createdPaymentMethod: AboundResponse<PaymentMethod> =
        await abound.paymentMethods.create(
          "userId_509948c18e95c0462cad5db54a18888cd2779b72",
          {
            accountNumber: randomNumberString(10),
            routingNumber: "102001017",
            accountType: AccountType.PERSONAL,
            accountClass: AccountClass.CHECKING,
            notes: {
              preferredPaymentMethod: true,
            },
          }
        );

      expect(createdPaymentMethod).toMatchInlineSnapshot(`
        Object {
          "data": Object {
            "accountClass": "checking",
            "accountNumberLast4": "4672",
            "accountType": "personal",
            "displayName": "(4672) personal checking",
            "notes": Object {
              "preferredPaymentMethod": true,
            },
            "paymentMethodId": "paymentMethodId_9617a3b0648f2a501f9e89b7ed2796ead736fd03",
            "status": "unverified",
          },
          "request": Object {
            "requestId": "requestId_c9895b8f4e4c6903874836d9",
            "timestamp": 1628519416460,
          },
        }
      `);
    });
  });

  describe("list", () => {
    it("returns a promise that resolves to a user's payment methods on success", async () => {
      const paymentMethods: AboundBulkResponse<PaymentMethod> =
        await abound.paymentMethods.list(
          "userId_509948c18e95c0462cad5db54a18888cd2779b72"
        );

      expect(paymentMethods).toMatchInlineSnapshot(`
        Object {
          "count": 2,
          "data": Array [
            Object {
              "accountClass": "checking",
              "accountNumberLast4": "4429",
              "accountType": "personal",
              "displayName": "(4429) personal checking",
              "notes": Object {
                "preferredPaymentMethod": true,
              },
              "paymentMethodId": "paymentMethodId_27849a2a5b3135486c4860dc437ba026d6294ad4",
              "status": "unverified",
            },
            Object {
              "accountClass": "checking",
              "accountNumberLast4": "4672",
              "accountType": "personal",
              "displayName": "(4672) personal checking",
              "paymentMethodId": "paymentMethodId_49c94dd920351aa2d81260ea9552c73a0cedabee",
              "status": "unverified",
            },
          ],
          "request": Object {
            "requestId": "requestId_dd13a0e2f8a9ee884133ec57",
            "timestamp": 1628519960841,
          },
        }
      `);
    });
  });

  describe("retrieve", () => {
    it("returns a promise that resolves to a single payment method on success", async () => {
      const paymentMethod: AboundResponse<PaymentMethod> =
        await abound.paymentMethods.retrieve(
          "userId_509948c18e95c0462cad5db54a18888cd2779b72",
          "paymentMethodId_27849a2a5b3135486c4860dc437ba026d6294ad4"
        );

      expect(paymentMethod).toMatchInlineSnapshot(`
        Object {
          "data": Object {
            "accountClass": "checking",
            "accountNumberLast4": "4429",
            "accountType": "personal",
            "displayName": "(4429) personal checking",
            "notes": Object {
              "preferredPaymentMethod": true,
            },
            "paymentMethodId": "paymentMethodId_27849a2a5b3135486c4860dc437ba026d6294ad4",
            "status": "unverified",
          },
          "request": Object {
            "requestId": "requestId_912295cb415ea571e6b0a450",
            "timestamp": 1628520504488,
          },
        }
     `);
    });
  });

  function initMocks() {
    nock(V2_SANDBOX_URL)
      .post(
        "/users/userId_509948c18e95c0462cad5db54a18888cd2779b72/paymentMethods"
      )
      .reply(200, {
        data: {
          paymentMethodId:
            "paymentMethodId_9617a3b0648f2a501f9e89b7ed2796ead736fd03",
          status: "unverified",
          displayName: "(4672) personal checking",
          accountNumberLast4: "4672",
          accountType: "personal",
          accountClass: "checking",
          notes: {
            preferredPaymentMethod: true,
          },
        },
        request: {
          timestamp: 1628519416460,
          requestId: "requestId_c9895b8f4e4c6903874836d9",
        },
      });

    nock(V2_SANDBOX_URL)
      .get(
        "/users/userId_509948c18e95c0462cad5db54a18888cd2779b72/paymentMethods"
      )
      .reply(200, {
        data: [
          {
            paymentMethodId:
              "paymentMethodId_27849a2a5b3135486c4860dc437ba026d6294ad4",
            status: "unverified",
            displayName: "(4429) personal checking",
            accountNumberLast4: "4429",
            accountType: "personal",
            accountClass: "checking",
            notes: {
              preferredPaymentMethod: true,
            },
          },
          {
            paymentMethodId:
              "paymentMethodId_49c94dd920351aa2d81260ea9552c73a0cedabee",
            status: "unverified",
            displayName: "(4672) personal checking",
            accountNumberLast4: "4672",
            accountType: "personal",
            accountClass: "checking",
          },
        ],
        count: 2,
        request: {
          timestamp: 1628519960841,
          requestId: "requestId_dd13a0e2f8a9ee884133ec57",
        },
      });

    nock(V2_SANDBOX_URL)
      .get(
        "/users/userId_509948c18e95c0462cad5db54a18888cd2779b72/paymentMethods/paymentMethodId_27849a2a5b3135486c4860dc437ba026d6294ad4"
      )
      .reply(200, {
        data: {
          paymentMethodId:
            "paymentMethodId_27849a2a5b3135486c4860dc437ba026d6294ad4",
          status: "unverified",
          displayName: "(4429) personal checking",
          accountNumberLast4: "4429",
          accountType: "personal",
          accountClass: "checking",
          notes: {
            preferredPaymentMethod: true,
          },
        },
        request: {
          timestamp: 1628520504488,
          requestId: "requestId_912295cb415ea571e6b0a450",
        },
      });

    nock(V2_SANDBOX_URL)
      .put(
        "/users/userId_509948c18e95c0462cad5db54a18888cd2779b72/paymentMethods/paymentMethodId_27849a2a5b3135486c4860dc437ba026d6294ad4"
      )
      .reply(200, {
        data: {
          paymentMethodId:
            "paymentMethodId_27849a2a5b3135486c4860dc437ba026d6294ad4",
          status: "unverified",
          displayName: "(4429) personal checking",
          accountNumberLast4: "4429",
          accountType: "personal",
          accountClass: "checking",
          notes: {
            preferredPaymentMethod: true,
          },
        },
        request: {
          timestamp: 1628520548767,
          requestId: "requestId_1cbaf47fe5ce06e21aa48734",
        },
      });
  }
});
