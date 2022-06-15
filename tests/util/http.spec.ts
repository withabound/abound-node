import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";

import { AboundConfig, Environment } from "../../src/AboundClient";
import { buildQueryString, initAxios } from "../../src/util/http";
import {
  randomString,
  TEST_APP_ID,
  TEST_APP_SECRET,
  TEST_USER_ID,
} from "../utils";
import { Users } from "../../src/resources";
import { version } from "../../package.json";

describe("http", () => {
  describe("buildQueryString", () => {
    it("returns an empty string when passed parameters are empty", () => {
      const queryString = buildQueryString({});

      expect(queryString).toEqual("");
    });

    it("returns one query param when parameters contains one entry", () => {
      const queryString = buildQueryString({
        year: 2021,
      });

      expect(queryString).toEqual("?year=2021");
    });

    it("delimits multiple query params with an = symbol", () => {
      const foreignId = randomString();

      const queryString = buildQueryString({
        year: 2020,
        foreignId,
      });

      expect(queryString).toEqual(`?year=2020&foreignId=${foreignId}`);
    });
  });

  /**
   * NB: nock is ergonomically easier-to-use and higher level than axios-mock-adapter, but nock will never record
   * User-Agent headers (https://github.com/nock/nock#enable_reqheaders_recording-option)
   */
  describe("axios client", () => {
    it("injects a Abound-SDK header into each request with a value that includes the SDK's version", () => {
      const axios: AxiosInstance = buildAxiosInstance();
      const mockAxios = new MockAdapter(axios);

      const mockUsersClient = new Users(axios);

      expect(mockAxios.history.get.length).toBe(0);
      mockAxios.onGet(`/users/${TEST_USER_ID}`).replyOnce(200, { data: {} });

      // many `any` types in the libraries used; just silence lint here
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      mockUsersClient.retrieve(TEST_USER_ID).then(() => {
        expect(mockAxios.history.get.length).toBe(1);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const requestHeaders: Record<string, string> =
          mockAxios.history.get[0].headers;

        const aboundSDK: string = requestHeaders["Abound-SDK"];
        expect(aboundSDK).toEqual(`NodeSDK/${version}`);
      });
    });
  });
});

function buildAxiosInstance(): AxiosInstance {
  const validConfig: AboundConfig = {
    appId: TEST_APP_ID,
    appSecret: TEST_APP_SECRET,
    environment: Environment.SANDBOX,
    apiVersion: "v2",
  };

  return initAxios(validConfig);
}
