function randomString(length = 13): string {
  let result = "";

  for (let i = 0; i < length; i++) {
    const idx = Math.floor(Math.random() * ALPHANUMERIC_LOWER.length);
    result += ALPHANUMERIC_LOWER[idx];
  }

  return result;
}

const ALPHANUMERIC_LOWER = "0123456789abcdefghijklmnopqrstuvwxyz";

export { randomString };
