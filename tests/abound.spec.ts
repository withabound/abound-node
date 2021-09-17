import Abound, { Environment } from "../src/abound";
import { AboundConfig } from "../src/AboundClient";
import { randomString } from "./utils";

describe("Abound Client constructor", () => {
  describe("when config is invalid", () => {
    it("throws an error when required properties are missing", () => {
      const partialConfig = {
        apiVersion: "v2",
        environment: Environment.SANDBOX,
        appId: randomString(),
      } as unknown as AboundConfig;

      expect(() => new Abound(partialConfig)).toThrow(
        "Missing appSecret in Abound config"
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
