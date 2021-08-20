import Abound, { environments } from "../src/abound";
import { AboundConfig } from "../src/AboundClient";

export const V2_SANDBOX_URL = "https://sandbox-api.withabound.com/v2";

function randomString(length = 13): string {
  return random(length, CharSet.ALPHANUMERIC_LOWER);
}

function randomBase64EncodedString(length = 13): string {
  return Buffer.from(randomString(length), "binary").toString("base64");
}

function randomEmail(length = 13): string {
  return `${randomString(length)}@example.com`;
}

function randomNumberString(length = 13): string {
  return random(length, CharSet.NUMERIC);
}

function randomZip(): string {
  return randomNumberString(5);
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
    // appId: "appId_f2d3c91d03c4b96a7a721f02edb07cfe",
    // appSecret: "appSecret_bf3e2255bff0395ae4c69ecb9f1a6157",
    appId: randomString(),
    appSecret: randomString(),
  };

  return new Abound(config);
}

enum CharSet {
  NUMERIC = "0123456789",
  ALPHANUMERIC_LOWER = "0123456789abcdefghijklmnopqrstuvwxyz",
}

export {
  createAboundClient,
  randomBase64EncodedString,
  randomDate,
  randomEmail,
  randomNumberString,
  randomString,
  randomZip,
};
