import { URL } from "url";

import Abound, { Environment } from "../src/abound";

export function randomString(length = 13): string {
  return random(length, CharSet.ALPHANUMERIC_LOWER);
}

export function randomBase64EncodedString(length = 13): string {
  return Buffer.from(randomString(length), "binary").toString("base64");
}

export function randomEmail(length = 13): string {
  return `${randomString(length)}@example.com`;
}

export function randomNumberString(length = 13): string {
  return random(length, CharSet.NUMERIC);
}

export function randomZip(): string {
  return randomNumberString(5);
}

export function randomDate(): string {
  const year = 1900 + Math.floor(Math.random() * 101); // 1900-2000
  const month = Math.ceil(Math.random() * 12);
  const day = Math.ceil(Math.random() * 28);

  const zeroPaddedMonth = `0${month}`.slice(-2);
  const zeroPaddedDay = `0${day}`.slice(-2);

  return `${year}-${zeroPaddedMonth}-${zeroPaddedDay}`;
}

/**
 * Returns today's date in the format YYYY-MM-DD in UTC.
 * Single digit days/months are zero-padded; e.g. 2022/02/08.
 */
export function todayYYYYMMDD(): string {
  const now = new Date();

  return now.toISOString().split("T")[0];
}

function random(length: number, charset: CharSet): string {
  let result = "";

  for (let i = 0; i < length; i++) {
    const idx = Math.floor(Math.random() * charset.length);
    result += charset[idx];
  }

  return result;
}

// two decimal precision
export function randomCurrencyAmount(max: number): number {
  const amount: string = (Math.random() * max).toFixed(2);

  return Number.parseFloat(amount);
}

export function removeQueryParameters(rawUrl: string) {
  const url: URL = new URL(rawUrl);

  return url.origin + url.pathname;
}

export const TEST_APP_ID = "appId_test48e7eaa3175a66354e00626542d2";
export const TEST_APP_SECRET = "appSecret_testf54672359db6693429e1d3e14e2c";

/**
 * These test credentials ensure consistent data is returned from Abound's APIs, and they do not persist
 * additional data.
 */
export function createAboundClient(): Abound {
  return new Abound({
    apiVersion: "v2",
    environment: Environment.SANDBOX,
    appId: TEST_APP_ID,
    appSecret: TEST_APP_SECRET,
  });
}

/**
 * These test credentials ensure consistent data is returned from Abound's APIs, and they do not persist
 * additional data.
 */
export function createAboundClients(): Abound[] {
  return [
    new Abound({
      apiVersion: "v2",
      environment: Environment.SANDBOX,
      appId: TEST_APP_ID,
      appSecret: TEST_APP_SECRET,
    }),
    new Abound({
      apiVersion: "v3",
      environment: Environment.SANDBOX,
      appId: TEST_APP_ID,
      appSecret: TEST_APP_SECRET,
    }),
  ];
}

/**
 * The test credentials referenced above have one User
 */
export const TEST_USER_ID = "userId_test24b05d761ff58b5931bd07778c67b4e818e4";

export const PUBLIC_BANK_LOGO_URL =
  "https://www.chase.com/etc/designs/chase-ux/css/img/newheaderlogo.svg";

enum CharSet {
  NUMERIC = "0123456789",
  ALPHANUMERIC_LOWER = "0123456789abcdefghijklmnopqrstuvwxyz",
}
