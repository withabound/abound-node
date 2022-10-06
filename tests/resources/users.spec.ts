import Abound from "../../src/abound";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/base/AboundResponse";
import { BaseUser, TaxClassification, User } from "../../src/resources/Users";
import { createAboundClient, TEST_USER_ID } from "../utils";

describe("Abound Users", () => {
  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
  });

  describe("create", () => {
    it("returns a promise that resolves to the created user on success", async () => {
      const createdUser: AboundResponse<User> = await abound.users.create({
        email: "test123test@example.com",
        foreignId: "tj_miller",
        metadata: {
          title: "Board member of Pied Piper",
        },
        notes: "Board member of Pied Piper",
        profile: {
          firstName: "Erlich",
          lastName: "Bachman",
          address: "3338 Thunder Road",
          city: "Palo Alto",
          state: "CA",
          zipcode: "94306",
          phoneNumber: "8773427222",
          dateOfBirth: "1981-04-06",
        },
        business: {
          ein: "950361345",
          name: "Aviato",
          taxClassification: TaxClassification.C_CORPORATION,
          address: "3338 Thunder Road",
          city: "Palo Alto",
          state: "CA",
          zipcode: "94306",
        },
      });

      expect(createdUser.data).toMatchInlineSnapshot(`
Object {
  "business": Object {
    "address": "3338 Thunder Road",
    "address2": "Suite 501",
    "city": "Palo Alto",
    "country": "US",
    "dbaName": "InGen",
    "name": "Aviato",
    "state": "CA",
    "taxClassification": "cCorporation",
    "zipcode": "94306",
  },
  "einVerification": Object {
    "status": "unverified",
  },
  "email": "test123test@example.com",
  "foreignId": "tj_miller",
  "metadata": Object {
    "title": "Board member of Pied Piper",
  },
  "notes": "Board member of Pied Piper",
  "profile": Object {
    "address": "3338 Thunder Road",
    "address2": "Suite 32",
    "city": "Palo Alto",
    "country": "US",
    "dateOfBirth": "1981-04-06",
    "firstName": "Erlich",
    "lastName": "Bachman",
    "phoneNumber": "8773427222",
    "state": "CA",
    "zipcode": "94306",
  },
  "userId": "userId_test24b05d761ff58b5931bd07778c67b4e818e4",
}
`);
    });
  });

  describe("retrieve", () => {
    it("returns a promise that resolves to the requested userId on success", async () => {
      const retrievedUser: AboundResponse<User> = await abound.users.retrieve(
        TEST_USER_ID
      );

      expect(retrievedUser.data).toMatchInlineSnapshot(`
Object {
  "business": Object {
    "address": "100 Farallon Road",
    "address2": "Suite 501",
    "city": "Palo Alto",
    "country": "US",
    "dbaName": "InGen",
    "name": "InGen Corporation",
    "state": "CA",
    "taxClassification": "cCorporation",
    "zipcode": "94306",
  },
  "einVerification": Object {
    "status": "unverified",
  },
  "email": "your_users_email@domain.com",
  "profile": Object {
    "address": "256 Byron Street",
    "address2": "Suite 32",
    "city": "Palo Alto",
    "country": "US",
    "dateOfBirth": "1815-12-10",
    "firstName": "Ada",
    "lastName": "Lovelace",
    "phoneNumber": "6505551010",
    "state": "CA",
    "zipcode": "94306",
  },
  "ssnVerification": Object {
    "status": "unverified",
  },
  "userId": "userId_test24b05d761ff58b5931bd07778c67b4e818e4",
}
`);
    });
  });

  describe("list", () => {
    it("returns a promise that resolves to the developer's users on success", async () => {
      const userList: AboundBulkResponse<BaseUser> = await abound.users.list();

      expect(userList.data).toMatchInlineSnapshot(`
Array [
  Object {
    "email": "your_users_email@domain.com",
    "userId": "userId_test24b05d761ff58b5931bd07778c67b4e818e4",
  },
]
`);
    });

    it("returns a promise that resolves to a list of filtered Users when querying by foreignId", async () => {
      const users: AboundBulkResponse<BaseUser> = await abound.users.list({
        foreignId: "29SMN2KD9",
      });

      expect(users.data).toMatchInlineSnapshot(`
Array [
  Object {
    "email": "your_users_email@domain.com",
    "foreignId": "29SMN2KD9",
    "userId": "userId_test24b05d761ff58b5931bd07778c67b4e818e4",
  },
]
`);
    });
  });

  describe("update", () => {
    it("returns a promise that resolves to the updated user on success", async () => {
      const updatedUser: AboundResponse<User> = await abound.users.update(
        TEST_USER_ID,
        {
          email: "test123test@example.com",
          profile: {
            phoneNumber: "1234567890",
          },
          business: {
            taxClassification: TaxClassification.S_CORPORATION,
          },
        }
      );

      expect(updatedUser.data).toMatchInlineSnapshot(`
Object {
  "business": Object {
    "address": "100 Farallon Road",
    "address2": "Suite 501",
    "city": "Palo Alto",
    "country": "US",
    "dbaName": "InGen",
    "name": "InGen Corporation",
    "state": "CA",
    "taxClassification": "sCorporation",
    "zipcode": "94306",
  },
  "email": "test123test@example.com",
  "profile": Object {
    "address": "256 Byron Street",
    "address2": "Suite 32",
    "city": "Palo Alto",
    "country": "US",
    "dateOfBirth": "1815-12-10",
    "firstName": "Ada",
    "lastName": "Lovelace",
    "phoneNumber": "1234567890",
    "state": "CA",
    "zipcode": "94306",
  },
  "userId": "userId_test24b05d761ff58b5931bd07778c67b4e818e4",
}
`);
    });
  });
});
