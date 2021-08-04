import Abound = require("../lib/abound");
import { randomString } from "./utils";

describe("Abound Client constructor", () => {
  describe("when config is invalid", () => {
    it("throws an error when required properties are missing", () => {
      const partialConfig = {
        apiVersion: "v1",
        environment: Abound.environments.sandbox,
        appId: randomString(),
      } as unknown as AboundConfig;

      expect(() => new Abound.Client(partialConfig)).toThrow(
        "Missing appSecret in Abound config"
      );
    });

    it("throws an error when environment is invalid", () => {
      const invalidEnvConfig = {
        apiVersion: "v1",
        environment: "https://incorrect.abound.com",
        appId: randomString(),
        appSecret: randomString(),
      } as unknown as AboundConfig;

      expect(() => new Abound.Client(invalidEnvConfig)).toThrow(
        "Invalid Abound environment"
      );
    });
  });

  describe("when config is valid", () => {
    it("sets instance variables on client", () => {
      const appId = randomString();
      const appSecret = randomString();

      const validConfig: AboundConfig = {
        apiVersion: "v1",
        environment: Abound.environments.sandbox,
        appId,
        appSecret,
      };

      const client = new Abound.Client(validConfig);

      expect(client).toBeTruthy();
      expect(client.baseUrl).toEqual("https://sandbox-api.withabound.com/v1");
      expect(client.appId).toEqual(appId);
      expect(client.appSecret).toEqual(appSecret);
    });
  });
});
