import { Validator, rules } from "./Validator";

const name = "Victor Hugo";

const vldt = new Validator([
  { rule: rules.greaterThan("fafa", 3), code: "FOO" },
  { rule: rules.greaterThan("fa", 3), code: "FOO" },
  { rule: rules.greaterThan("fa", 2) },
  { rule: rules.greaterThan("abc", 3), msg: "campo inferior ou igual a 3" },
  { rule: rules.greaterThan(1, 2), msg: "campo inferior ou igual a 2" },

  { rule: rules.smallerThan("fafa", 3), code: "FOO" },
  { rule: rules.smallerThan("fa", 3), code: "FOO" },
  { rule: rules.smallerThan("fa", 2) },
  { rule: rules.smallerThan("abc", 3), msg: "campo inferior ou igual a 3" },
  { rule: rules.smallerThan(1, 2), msg: "campo inferior ou igual a 2" },

  { rule: rules.min("fafa", 5), msg: "personal msg" },
  { rule: rules.min({ name }, 12) },
  { rule: rules.min(4, 5) },
  { rule: rules.min({ myArray: ["4"] }, 2) },

  { rule: rules.max("fafa", 3) },
  { rule: rules.max({ name }, 10) },
  { rule: rules.max(4, 3) },
  { rule: rules.max({ myArray: ["a", "b"] }, 1) },
]);

// console.log(vldt.getRules)

vldt.validate().catch((errors) => console.log(errors));

vldt.setRules = [
  { rule: rules.greaterThan("fa", 3), code: "FOO" },
  { rule: rules.greaterThan("fa", 2) },
];



const vldt2 = new Validator();

vldt2.setErrors = [
  {code: 'fa', msg: 'erro fafa'}
]

vldt2.addError({code: 'fa', msg: 'erro fafa'})
console.log(vldt2.getErrors)
vldt2.clearErrors()
console.log(vldt2.getErrors)

// vldt2.validate().catch(errors => console.log(errors))




vldt2;
