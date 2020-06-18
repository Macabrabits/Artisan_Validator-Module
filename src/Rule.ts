class Rule {
  passed:boolean;
  code?: string;
  msg?:string = "No message";
  

  constructor(
    passed:boolean,
    code: string = "",
    msg: string = "No message",    
  ) {
    this.code = code;
    this.msg = msg;
    this.passed = passed;
  }
}

// const ruleFactory:(...args: any[]) => {code:string, msg:string, passed:boolean} = () => {
//   return {code: 'fafa', msg: 'fafa', passed: true}
// } 
export { Rule };
