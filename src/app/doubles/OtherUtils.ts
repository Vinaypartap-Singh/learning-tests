interface stringInfo {
  lowercase: string;
  uppercase: string;
  characters: string[];
  length: number;
  extraInfo: object | undefined;
}

type LoggerServiceCallback = (arg: string) => void;

export function calulateComplexity(string: stringInfo) {
  return Object.keys(string.extraInfo).length * string.length;
}

export function toUpperCaseWithCb(
  str: string,
  callback: LoggerServiceCallback
) {
  if (!str) {
    return callback("Invalid Argument");
  }

  callback(`Called Function With ${str}`);

  return str.toUpperCase();
}
