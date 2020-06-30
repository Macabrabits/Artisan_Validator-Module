import { Rule } from "./Rule";
import rules from "./rules";

class Validator {
  rules: { rule: Rule; msg?: string; code?: string }[];
  errors: { code: string; msg: string }[];

  constructor(rules: { rule: Rule; msg?: string; code?: string }[] = []) {
    this.rules = rules;
    this.errors = [];
  }

  addError(error: { code: string; msg: string }): void {
    this.errors.push(error);
  }

  addRule(rule: { rule: Rule; msg?: string; code?: string }): void {
    this.rules.push(rule);
  }

  get getRules(): { rule: Rule; msg?: string; code?: string }[] {
    return this.rules;
  }

  set setRules(rules: { rule: Rule; msg?: string; code?: string }[]) {
    this.rules = rules;
  }

  get getErrors(): { code: string; msg: string }[] {
    return this.errors;
  }

  set setErrors(errors: { code: string; msg: string }[]) {
    this.errors = errors;
  }

  clearRules(): void {
    this.rules = [];
  }

  clearErrors(): void {
    this.errors = [];
  }  

  validateSync(): void {
    this.rules.map((f) => {
      const rule: Rule = f.rule;

      if (!rule.passed)
        this.addError({
          code: f.code || rule.code,
          msg: f.msg || rule.msgFunction(rule.msgData) || "No message",
        });
    });

    if (this.errors.length > 0){ throw { errors: this.errors }};
  }

  async validate(): Promise<void> {
    return this.validateSync()
  }
}

export { Validator };
export { rules };
export { Rule };
