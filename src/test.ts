import { Validator } from "./Validator";
import rules from "./rules";

const vldt = new Validator([
    { rule: rules.greaterThan2("fafa"), code: "FOO" },
    { rule: rules.greaterThan2("fa"), code: "FOO" },
    { rule: rules.greaterThan2("fa")},
    { rule: rules.greaterThan2(3), msg: 'campo inferior ou igual a 2'},
    { rule: rules.greaterThan2(1), msg: 'campo inferior ou igual a 2'},
    
    
  ]);

vldt.validate();
