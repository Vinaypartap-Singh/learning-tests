import PasswordChecker, { PasswordErrors } from "../app/passwordChecker";

describe("password checker suite", () => {
  it("Password with less than 8 chars is invalid", () => {
    const result = PasswordChecker("sandhu");
    expect(result.valid).toBe(false);
    expect(result.reasons).toContain(PasswordErrors.SHORT);
  });

  it("Password with more than 8 chars is ok", () => {
    const result = PasswordChecker("SandhuSaab");
    expect(result.valid).toBe(true);
    expect(result.reasons).toContain(PasswordErrors.ALL_GOOD);
  });

  it("Password with no uppercase letter is invalid", () => {
    const result = PasswordChecker("sandhusaab");
    expect(result.valid).toBe(false);
    expect(result.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
  });

  it("Password with no lowercase letter is invalid", () => {
    const result = PasswordChecker("SANDHUSAAB");
    expect(result.valid).toBe(false);
    expect(result.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
  });

  it("Password with no number is invalid", () => {
    const result = PasswordChecker("SANDHUSaaB12");
    expect(result.valid).toBe(false);
    expect(result.reasons).toContain(PasswordErrors.NO_NUMBER);
  });

  it("Correct Password no need to return error", () => {
    const result = PasswordChecker("SandhuSaab");
    expect(result.valid).toBe(true);
    expect(result.reasons).toContain(PasswordErrors.ALL_GOOD);
  });
});
