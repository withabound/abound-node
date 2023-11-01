export const invalidConfig = {
  environment: "SANDBOX" as const,
  appId: "appId_invalid_app_id",
  appSecret: "appSecret_invalid_app_secret",
};

export const sampleConfig = {
  environment: "SANDBOX" as const,
  appId: "appId_sampleqNhVcdYQYU",
  appSecret: "appSecret_sampleMz2Zbj3Hq",
};

export const matchers = {
  isoDatetimeRegex: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
};

export function singular(text: string) {
  return text.slice(-1).toLowerCase() === "s" ? text.slice(0, -1) : text;
}
