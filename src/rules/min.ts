import { Rule } from "../Rule";

const ruleFactory: (subject: any, min: number) => Rule = (subject, min) => {
  let name, type;

  type = Array.isArray(subject) ? "array" : typeof subject;

  if (type === "object") {
    name = Object.keys(subject)[0];
    subject = subject[name];
    type = Array.isArray(subject) ? "array" : typeof subject;
  }

  const validationStrategy: any = {
    string: subject.length >= min,
    number: subject >= min,
    array: subject.length >= min,
  };

  const result: boolean = validationStrategy[type];




  const msgFunctionData = { type, min, name }

  const msgFunction: (data: {
    type: string;
    min: number;
    name?: string;
  }) => string = ({ type, min, name }) => {    
    const msgStrategy: any = {
      string: `${name || "text"} must have at least ${min} characters`,
      number: `${name || "number"} must be at least ${min}`,
      array: `${name || "array"} must have at least ${min} elements`,
    };
  
    return msgStrategy[type];
  };

  return new Rule(result, "min", msgFunction, msgFunctionData );
};

export = ruleFactory;
