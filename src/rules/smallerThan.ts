import { Rule } from "../Rule";

const ruleFactory: (subject: any, max: number) => Rule = (subject, max) => {
  const strategy: any = {
    string: subject.length < max,
    number: subject < max,
    array: subject.length < max,
  };

  const result: boolean = strategy[typeof subject];

  const msg = (max:number):string => `Field must be smaller than ${max}`;

  return new Rule(result, "st", msg, max);
};

export = ruleFactory;
