import { buildQueryString } from "../../src/util/http";
import { randomString } from "../utils";

describe("http", () => {
  describe("buildQueryString", () => {
    it("returns an empty string when passed parameters are empty", () => {
      const queryString = buildQueryString({});

      expect(queryString).toEqual("");
    });

    it("returns one query param when parameters contains one entry", () => {
      const queryString = buildQueryString({
        year: 2021,
      });

      expect(queryString).toEqual("?year=2021");
    });

    it("delimits multiple query params with an = symbol", () => {
      const foreignId = randomString();

      const queryString = buildQueryString({
        year: 2020,
        foreignId,
      });

      expect(queryString).toEqual(`?year=2020&foreignId=${foreignId}`);
    });
  });
});
