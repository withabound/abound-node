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
      const validConfig: AboundConfig = generateValidConfig();

      const abound = new Abound(validConfig);

      expect(abound).toBeTruthy();
    });
  });

  describe("Axios config overrides", () => {
    it("allows SDK users to specify Axios config overrides", () => {
      const validConfig: AboundConfig = generateValidConfig();

      const abound = new Abound(validConfig, { timeout: 5000 });

      expect(abound).toBeTruthy();
    });
  });
});

function generateValidConfig(): AboundConfig {
  const appId = randomString();
  const appSecret = randomString();

  return {
    apiVersion: "v2",
    environment: environments.sandbox,
    appId,
    appSecret,
  };
}
