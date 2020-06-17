class Validation {
  code: string;
  msg: (...args: any[]) => string = () => "No message";
  rule: (...args: any[]) => boolean;

  constructor(
    code: string = "",
    msg: (...args: any[]) => string = () => "No message",
    rule: (...args: any[]) => boolean
  ) {
    this.code = code;
    this.msg = msg;
    this.rule = rule;
  }
}
export { Validation };
