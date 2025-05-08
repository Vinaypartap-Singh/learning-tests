export class StringUtils {
  public toUpperCase(str: string) {
    if (!str) {
      throw new Error("Invalid argument");
    }
    return str.toUpperCase();
  }
}

export function toUpperCase(str: string) {
  return str.toUpperCase();
}

interface stringInfo {
  lowercase: string;
  uppercase: string;
  characters: string[];
  length: number;
  extraInfo: object | undefined;
}

export function getStringInfo(arg: string): stringInfo {
  return {
    lowercase: arg.toLowerCase(),
    uppercase: arg.toUpperCase(),
    characters: Array.from(arg),
    length: arg.length,
    extraInfo: {},
  };
}
