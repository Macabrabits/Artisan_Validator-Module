import { Rule } from "../Rule";

const ruleFactory: (subject: any, min: number) => Rule = (subject, min) => {
  const strategy: any = {
    string: subject.length > min,
    number: subject > min,
    array: subject.length > min,
  };

  const result: boolean = strategy[typeof subject];

  const msg = result ? undefined : `Field must be greater than ${min}`;

  return new Rule(result, "gt", msg);
};

export = ruleFactory;
