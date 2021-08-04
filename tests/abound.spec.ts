import Abound, { environments } from "../src/abound";
import { AboundConfig } from "../src/AboundClient";
import { randomString } from "./utils";

describe("Abound Client constructor", () => {
  describe("when config is invalid", () => {
    it("throws an error when required properties are missing", () => {
      const partialConfig = {
        apiVersion: "v2",
        environment: environments.sandbox,
        appId: randomString(),
      } as unknown as AboundConfig;

      expect(() => new Abound(partialConfig)).toThrow(
        "Missing appSecret in Abound config"
      );
    });

    it("throws an error when environment is invalid", () => {
      const invalidEnvConfig = {
        apiVersion: "v2",
        environment: "https://incorrect.abound.com",
        appId: randomString(),
        appSecret: randomString(),
      } as unknown as AboundConfig;

      expect(() => new Abound(invalidEnvConfig)).toThrow(
        "Invalid Abound environment"
      );
    });
  });

  describe("when config is valid", () => {
    it("sets instance variables on client", () => {
      const appId = randomString();
      const appSecret = randomString();

      const validConfig: AboundConfig = {
        apiVersion: "v2",
        environment: environments.sandbox,
        appId,
        appSecret,
      };

      const abound = new Abound(validConfig);

      expect(abound).toBeTruthy();
      expect(abound.baseUrl).toEqual("https://sandbox-api.withabound.com/v2");
      expect(abound.appId).toEqual(appId);
      expect(abound.appSecret).toEqual(appSecret);
    });
  });
});
