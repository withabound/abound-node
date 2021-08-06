import Abound, { environments } from "../src/abound";
import { AboundConfig } from "../src/AboundClient";

export const V2_SANDBOX_URL = "https://sandbox-api.withabound.com/v2";

function randomString(length = 13): string {
  return random(length, CharSet.ALPHANUMERIC_LOWER);
}

function randomEmail(length = 13): string {
  return `${randomString(length)}@example.com`;
}

function randomZip(length = 5): string {
  return random(length, CharSet.NUMERIC);
}

function randomDate(): string {
  const year = 1900 + Math.floor(Math.random() * 101); // 1900-2000
  const month = Math.ceil(Math.random() * 12);
  const day = Math.ceil(Math.random() * 28);

  const zeroPaddedMonth = `0${month}`.slice(-2);
  const zeroPaddedDay = `0${day}`.slice(-2);

  return `${year}-${zeroPaddedMonth}-${zeroPaddedDay}`;
}

function random(length: number, charset: CharSet): string {
  let result = "";

  for (let i = 0; i < length; i++) {
    const idx = Math.floor(Math.random() * charset.length);
    result += charset[idx];
  }

  return result;
}

function createAboundClient(): Abound {
  const config: AboundConfig = {
    apiVersion: "v2",
    environment: environments.sandbox,
    appId: randomString(),
    appSecret: randomString(),
  };

  return new Abound(config);
}

enum CharSet {
  NUMERIC = "0123456789",
  ALPHANUMERIC_LOWER = "0123456789abcdefghijklmnopqrstuvwxyz",
}

export { createAboundClient, randomDate, randomEmail, randomString, randomZip };
