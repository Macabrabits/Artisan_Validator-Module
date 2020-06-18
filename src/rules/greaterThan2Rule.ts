import { Rule } from "../Rule";

const ruleFactory:(variable:any) => Rule = (variable) => {
  const strategy:any = {
    string: variable.length > 2,
    number: variable > 2,
    array: variable.length > 2,    
  }
  
  const result:boolean = strategy[typeof variable]

  const msg = result ? undefined : 'Field is not greater than 2'
  
  return new Rule(result, 'ngt2', msg )
}

export = ruleFactory

