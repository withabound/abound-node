import Abound from "../../src/abound";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/base/AboundResponse";
import { User } from "../../src/resources/Users";
import {
  createAboundClient,
  randomDate,
  randomEmail,
  randomString,
  randomZip,
  TEST_USER_ID,
} from "../utils";

describe("Abound Users", () => {
  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
  });

  describe("create", () => {
    it("returns a promise that resolves to the created user on success", async () => {
      const email = randomEmail();

      const createdUser: AboundResponse<User> = await abound.users.create({
        email,
        foreignId: randomString(),
        profile: {
          firstName: randomString(),
          lastName: randomString(),
          address: randomString(),
          city: randomString(),
          state: randomString(),
          zipcode: randomZip(),
          phoneNumber: randomString(),
          dateOfBirth: randomDate(),
          socialSecurityNumber: randomString(),
        },
      });

      expect(createdUser.data).toMatchInlineSnapshot(`
        Object {
          "email": "${email}",
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
          "email": "your_users_email@domain.com",
          "foreignId": "your_foreign_id",
          "profile": Object {
            "address": "1500 Pennsylvania Ave NW",
            "address2": "Suite 1776",
            "city": "Washington",
            "dateOfBirth": "1776-07-04",
            "firstName": "Sam",
            "ipAddress": null,
            "lastName": "Wilson",
            "phoneNumber": "2026229979",
            "state": "DC",
            "zipcode": "20220",
          },
          "userId": "userId_test24b05d761ff58b5931bd07778c67b4e818e4",
        }
      `);
    });
  });

  describe("list", () => {
    it("returns a promise that resolves to the developer's users on success", async () => {
      const userList: AboundBulkResponse<User> = await abound.users.list();

      expect(userList.data).toMatchInlineSnapshot(`
        Array [
          Object {
            "email": "your_users_email@domain.com",
            "foreignId": "your_foreign_id",
            "profile": Object {
              "address": "1500 Pennsylvania Ave NW",
              "address2": "Suite 1776",
              "city": "Washington",
              "dateOfBirth": "1776-07-04",
              "firstName": "Sam",
              "ipAddress": null,
              "lastName": "Wilson",
              "phoneNumber": "2026229979",
              "state": "DC",
              "zipcode": "20220",
            },
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
        }
      );

      expect(updatedUser.data).toMatchInlineSnapshot(`
        Object {
          "email": "test123test@example.com",
          "foreignId": "your_foreign_id",
          "profile": Object {
            "address": "1500 Pennsylvania Ave NW",
            "address2": "Suite 1776",
            "city": "Washington",
            "dateOfBirth": "1776-07-04",
            "firstName": "Sam",
            "ipAddress": null,
            "lastName": "Wilson",
            "phoneNumber": "2026229979",
            "state": "DC",
            "zipcode": "20220",
          },
          "userId": "userId_test24b05d761ff58b5931bd07778c67b4e818e4",
        }
      `);
    });
  });
});
