import nock from "nock";
import Abound from "../../src/abound";
import {
  AboundBulkResponse,
  AboundResponse,
} from "../../src/resources/AboundResponse";
import { User, UserProfile } from "../../src/resources/Users";
import {
  createAboundClient,
  randomDate,
  randomEmail,
  randomString,
  randomZip,
  V2_SANDBOX_URL,
} from "../utils";

describe("Abound Users", () => {
  let abound: Abound;

  beforeAll(() => {
    abound = createAboundClient();
    initMocks();
  });

  afterAll(() => {
    nock.restore();
  });

  describe("create", () => {
    it("returns a promise that resolves to the created user on success", async () => {
      const createdUser: AboundResponse<User> = await abound.users.create({
        user: {
          email: randomEmail(),
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
        },
      });

      expect(createdUser).toBeTruthy();
      expect(createdUser.data).toBeTruthy();
      expect(createdUser.data.userId).toEqual(
        "userId_509948c18e95c0462cad5db54a18888cd2779b72"
      );
      expect(createdUser.data.email).toEqual("7elmombtzsw24@example.com");
      expect(createdUser.request).toBeTruthy();
      expect(createdUser.request.timestamp).toEqual(1628216420494);
      expect(createdUser.request.requestId).toEqual(
        "requestId_0a0fa02134463484f3a6ec22"
      );
    });
  });

  describe("retrieve", () => {
    it("returns a promise that resolves to the requested userId on success", async () => {
      const retrievedUser: AboundResponse<User> = await abound.users.retrieve(
        "userId_509948c18e95c0462cad5db54a18888cd2779b72"
      );

      expect(retrievedUser).toBeTruthy();
      expect(retrievedUser.data).toBeTruthy();
      expect(retrievedUser.data.email).toEqual("7elmombtzsw24@example.com");
      expect(retrievedUser.data.canWithhold).toBe(false);

      expect(retrievedUser.data.profile).toBeDefined();

      const profile = retrievedUser.data.profile as unknown as UserProfile;
      expect(profile.ipAddress).toBeNull();
      expect(profile.lastName).toEqual("5oefwmin27xuy");
    });
  });

  describe("list", () => {
    it("returns a promise that resolves to the developer's users on success", async () => {
      const userList: AboundBulkResponse<User> = await abound.users.list();

      expect(userList).toBeTruthy();
      expect(userList.count).toEqual(2);
      expect(userList.data.length).toEqual(2);
      expect(userList.data[0].userId).toEqual(
        "userId_924d93f64b66f255fb3e6f1662192781c2915f29"
      );
    });
  });
});

function initMocks() {
  nock(V2_SANDBOX_URL)
    .post("/users")
    .reply(200, {
      data: {
        userId: "userId_509948c18e95c0462cad5db54a18888cd2779b72",
        email: "7elmombtzsw24@example.com",
      },
      request: {
        timestamp: 1628216420494,
        requestId: "requestId_0a0fa02134463484f3a6ec22",
      },
    });

  nock(V2_SANDBOX_URL)
    .get("/users/userId_509948c18e95c0462cad5db54a18888cd2779b72")
    .reply(200, {
      data: {
        userId: "userId_509948c18e95c0462cad5db54a18888cd2779b72",
        email: "7elmombtzsw24@example.com",
        foreignId: "kl6mo5okpo7t3",
        canWithhold: false,
        profile: {
          firstName: "cxlzkro854hnk",
          lastName: "5oefwmin27xuy",
          address: "1gwil3euuymny",
          address2: null,
          city: "1g0gq5kbnds9k",
          state: "6t31ruf292x00",
          zipcode: "71549",
          phoneNumber: "2reblv72x769e",
          dateOfBirth: "1950-10-02",
          ipAddress: null,
        },
      },
      request: {
        timestamp: 1628218203035,
        requestId: "requestId_517c1281d907a2ebe0a46950",
      },
    });

  nock(V2_SANDBOX_URL)
    .get("/users")
    .reply(200, {
      data: [
        {
          userId: "userId_924d93f64b66f255fb3e6f1662192781c2915f29",
          email: "wymig76srzdz8@example.com",
          foreignId: "is5navld6id8p",
          canWithhold: false,
          profile: {
            firstName: "ua15juawbtfps",
            lastName: "ljeg7k3th7alh",
            address: "s3e42wp0ef65t",
            address2: null,
            city: "qrd0k7cohd9tk",
            state: "4xatwpex4mbmi",
            zipcode: "12547",
            phoneNumber: "hbgwkv74etscz",
            dateOfBirth: "1998-09-07",
            ipAddress: null,
          },
        },
        {
          userId: "userId_509948c18e95c0462cad5db54a18888cd2779b72",
          email: "7elmombtzsw24@example.com",
          foreignId: "kl6mo5okpo7t3",
          canWithhold: false,
          profile: {
            firstName: "cxlzkro854hnk",
            lastName: "5oefwmin27xuy",
            address: "1gwil3euuymny",
            address2: null,
            city: "1g0gq5kbnds9k",
            state: "6t31ruf292x00",
            zipcode: "71549",
            phoneNumber: "2reblv72x769e",
            dateOfBirth: "1950-10-02",
            ipAddress: null,
          },
        },
      ],
      count: 2,
      request: {
        timestamp: 1628219799447,
        requestId: "requestId_d85916f29b1e761dadc5c323",
      },
    });
}
