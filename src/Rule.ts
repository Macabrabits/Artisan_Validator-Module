class Rule {
  passed:boolean;
  code: string;
  msgFunction:(...args: any[]) => string;
  msgData?:any;
  

  constructor(
    passed:boolean,
    code: string = "",
    msgFunction: (...args: any[]) => string,    
    msgData?:any    
  ) {        
    this.passed = passed;
    this.code = code;
    this.msgFunction = msgFunction;
    this.msgData = msgData
  }
}

export { Rule };
