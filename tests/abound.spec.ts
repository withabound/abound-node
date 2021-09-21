import Abound, { Environment } from "../src/abound";
import { AboundConfig } from "../src/AboundClient";
import { randomString } from "./utils";

describe("Abound Client constructor", () => {
  describe("when config is invalid", () => {
    it("throws an error when required properties are missing", () => {
      const partialConfig = {
        apiVersion: "v2",
        appId: randomString(),
        appSecret: randomString(),
      } as unknown as AboundConfig;

      expect(() => new Abound(partialConfig)).toThrow(
        "Missing environment in Abound config"
      );
    });

    it("throws an error when authentication properties are missing", () => {
      const partialConfig = {
        apiVersion: "v2",
        environment: Environment.SANDBOX,
      } as unknown as AboundConfig;

      expect(() => new Abound(partialConfig)).toThrow(
        "Missing apiKey or appId/appSecret in Abound config"
      );
    });

    it("throws an error when appId is provided and appSecret is missing", () => {
      const partialConfig = {
        apiVersion: "v2",
        environment: Environment.SANDBOX,
        appId: randomString(),
      } as unknown as AboundConfig;

      expect(() => new Abound(partialConfig)).toThrow(
        "Missing appSecret in Abound config"
      );
    });

    it("throws an error when appSecret is provided and appIs is missing", () => {
      const partialConfig = {
        apiVersion: "v2",
        environment: Environment.SANDBOX,
        appSecret: randomString(),
      } as unknown as AboundConfig;

      expect(() => new Abound(partialConfig)).toThrow(
        "Missing appId in Abound config"
      );
    });
  });

  describe("when config is valid", () => {
    it("sets instance variables on client", () => {
      const appId = randomString();
      const appSecret = randomString();

      const validConfig: AboundConfig = {
        apiVersion: "v2",
        environment: Environment.SANDBOX,
        appId,
        appSecret,
      };

      const abound = new Abound(validConfig);

      expect(abound).toBeTruthy();
    });
  });
});
