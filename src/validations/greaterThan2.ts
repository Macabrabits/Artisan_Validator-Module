import { Validation } from "../Validation";

const rule = (someVar: any) => {
  const varName = Object.keys(someVar)[0];
  const subject =
    typeof someVar[varName] === "string"
      ? someVar[varName].length
      : someVar[varName];
  return subject > 2;
};

const msg = (x: Object) => {  
  x = Object.keys(x)[0];
  return `${x} is greater than 2`;
};

module.exports = new Validation("gt2", msg, rule);
