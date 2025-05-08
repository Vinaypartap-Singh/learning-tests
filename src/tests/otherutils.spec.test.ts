import {
  calulateComplexity,
  toUpperCaseWithCb,
} from "../app/doubles/OtherUtils";

describe("Other Utils Test", () => {
  describe("Tracking Callbacks", () => {
    let cbArgs = [];
    let timeCalled = 0;

    const callbackArgs = jest.fn();

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("ToUpperCase - calls callback for invalid argument", () => {
      const result = toUpperCaseWithCb("", callbackArgs);
      expect(callbackArgs).toHaveBeenCalledWith("Invalid Argument");
      expect(callbackArgs).toHaveBeenCalledTimes(1);
    });

    it("ToUpperCase - calls callback for valid argument", () => {
      const result = toUpperCaseWithCb("abc", callbackArgs);
      expect(callbackArgs).toHaveBeenCalledWith("Called Function With abc");
      expect(callbackArgs).toHaveBeenCalledTimes(1);
    });
  });

  it("Calculate Complexity", () => {
    // Stubs are helper objects to help with our tests
    const someInfo = {
      length: 10,
      extraInfo: {
        name: "testing utils",
        type: "jest testing",
      },
    };
    const result = calulateComplexity(someInfo as any);

    expect(result).toBe(20);
  });
});
