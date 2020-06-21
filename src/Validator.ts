import { Rule } from "./Rule";
import rules from "./rules";

class Validator {
  rules: { rule: Rule; msg?: string; code?: string; }[];

  constructor(
    rules: { rule: Rule; msg?: string; code?: string; }[]
  ) {
    this.rules = rules;
  }

  validate(): any {
    this.rules.map((f) => {
      const rule: Rule = f.rule;

      if (rule.passed) console.log("ok");
      else {        
        console.log({
          code: f.code || rule.code,
          msg: f.msg || rule.msg,
        });
      }
    });
  }
}

export { Validator };
export { rules };
