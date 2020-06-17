import { Validation } from "./Validation";

const validations = require("./validations");

class Validator {
  rules: { rule: string; msg?: string; code?: string; obj: Object }[];

  constructor(
    rules: { rule: string; msg?: string; code?: string; obj: Object }[]
  ) {
    this.rules = rules;
  }

  validate(): any {
    this.rules.map((f) => {
      const validation: Validation = validations[f.rule];

      if (!validation.rule(f.obj)) console.log("ok");
      else {
        console.log({
          code: f.code || validation.code,
          msg: f.msg || validation.msg(f.obj),
        });
      }
    });
  }
}
export { Validator };
