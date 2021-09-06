import { URL } from "url";

import Abound, { environments } from "../src/abound";
import { AboundConfig } from "../src/AboundClient";

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

function removeQueryParameters(rawUrl: string) {
  const url: URL = new URL(rawUrl);

  return url.origin + url.pathname;
}

/**
 * These test credentials ensure consistent data is returned from Abound's APIs, and they do not persist
 * additional data.
 */
function createAboundClient(): Abound {
  const config: AboundConfig = {
    apiVersion: "v2",
    environment: environments.sandbox,
    appId: "appId_test48e7eaa3175a66354e00626542d2",
    appSecret: "appSecret_testf54672359db6693429e1d3e14e2c",
  };

  return new Abound(config);
}

/**
 * The test credentials referenced above have one User
 */
const TEST_USER_ID = "userId_test24b05d761ff58b5931bd07778c67b4e818e4";

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
  removeQueryParameters,
  TEST_USER_ID,
};
