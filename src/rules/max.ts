import { Rule } from "../Rule";

const msgStrategy = (type:string, max: number, name?:string) => {  
  const msgStrategy:any = {
    string: `${name || 'text'} must have at maximun ${max} characters`,
    number: `${name || 'number'} must be at maximun ${max}`,
    array: `${name || 'array'} must have at maximun ${max} elements`
  }

  return msgStrategy[type]
};

const ruleFactory: (subject: any, max: number) => Rule = (subject, max) => {    
  let name, type

  type = Array.isArray(subject) ? 'array' : typeof subject    

  if(type === 'object'){
    name = Object.keys(subject)[0]
    subject = subject[name]
    type = Array.isArray(subject) ? 'array' : typeof subject
  }
    
   

  const validationStrategy: any = {
    string: subject.length <= max,
    number: subject <= max,
    array: subject.length <= max,
  };

  
  

  const result: boolean = validationStrategy[type];  

  const msg = result ? undefined : msgStrategy(type, max, name);

  return new Rule(result, "max", msg);
};

export = ruleFactory;
