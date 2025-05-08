import { getStringInfo, StringUtils, toUpperCase } from "../app/utils";

describe("Utils Test Suite", () => {
  describe("StringUtils test", () => {
    it("should return valid uppercase string class method", () => {
      const result = new StringUtils();
      expect(result.toUpperCase("sandhu")).toBe("SANDHU");
    });

    it("should throw error for not passing argument to function", () => {
      const result = new StringUtils();
      expect(() => result.toUpperCase("")).toThrow();
      expect(() => result.toUpperCase("")).toThrowError("Invalid argument");
    });
  });

  describe("toUpperCase function", () => {
    it("should return uppercase of a valid string", () => {
      const input = "abc";
      const expectedOutput = "ABC";

      const result = toUpperCase(input);

      expect(result).toBe(expectedOutput);
    });
  });

  //   Pass Multiple Params in test

  describe("should return uppercase", () => {
    it.each([
      { input: "abc", expected: "ABC" },
      { input: "developer", expected: "DEVELOPER" },
      { input: "learning", expected: "LEARNING" },
    ])("$input should be $expected", ({ input, expected }) => {
      expect(toUpperCase(input)).toBe(expected);
    });
  });

  describe("getStringInfo function", () => {
    const input = "Vinay-Sandhu";
    const result = getStringInfo(input);

    it("should return lowercase version of the string", () => {
      expect(result.lowercase).toBe("vinay-sandhu");
    });

    it("should return uppercase version of the string", () => {
      expect(result.uppercase).toBe("VINAY-SANDHU");
    });

    it("should return character array of correct length", () => {
      expect(result.characters).toHaveLength(12);
    });

    it("should return correct character array", () => {
      expect(result.characters).toEqual([
        "V",
        "i",
        "n",
        "a",
        "y",
        "-",
        "S",
        "a",
        "n",
        "d",
        "h",
        "u",
      ]);
    });

    it("should contain specific character", () => {
      expect(result.characters).toContain("V");
    });

    it("should return character array with expected elements", () => {
      expect(result.characters).toEqual(
        expect.arrayContaining([
          "V",
          "i",
          "n",
          "a",
          "y",
          "-",
          "S",
          "a",
          "n",
          "d",
          "h",
          "u",
        ])
      );
    });

    it("should have defined extraInfo object", () => {
      expect(result.extraInfo).toBeDefined();
      expect(result.extraInfo).not.toBeUndefined();
    });

    it("should return empty extraInfo object", () => {
      expect(result.extraInfo).toEqual({});
    });
  });
});
