export enum PasswordErrors {
  SHORT = "PASSWORD IS TOOO SHORT",
  NO_UPPER_CASE = "ATLEAST 1 UPPERCASE IS REQUIRED",
  NO_LOWER_CASE = "ATLEAST 1 LOWERCASE IS REQUIRED",
  NO_NUMBER = "ATLEAST 1 NUMBER IS REQUIRED",
  ALL_GOOD = "YOUR PASSWORD CLEARED ALL THE REQUIRED",
}

export interface CheckResult {
  valid: boolean;
  reasons: string[];
}

export default function PasswordChecker(password: string): CheckResult {
  const hasNumber = /\d/;

  if (password.length < 8) {
    return {
      valid: false,
      reasons: [PasswordErrors.SHORT],
    };
  }

  if (password === password.toLowerCase()) {
    return {
      valid: false,
      reasons: [PasswordErrors.NO_UPPER_CASE],
    };
  }

  if (password == password.toUpperCase()) {
    return {
      valid: false,
      reasons: [PasswordErrors.NO_LOWER_CASE],
    };
  }

  if (hasNumber.test(password)) {
    return {
      valid: false,
      reasons: [PasswordErrors.NO_NUMBER],
    };
  }

  return {
    valid: true,
    reasons: [PasswordErrors.ALL_GOOD],
  };
}
