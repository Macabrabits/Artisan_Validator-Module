import { Validator } from "./Validator";

const text = "fafa";
const text2 = "fa";
const number = 3;
const number2 = 1;
const vldt = new Validator([
  { rule: "greaterThan2", obj: { text }, code: "FOO" },
  { rule: "greaterThan2", obj: { text }, msg : 'text is too large' },
  { rule: "greaterThan2", obj: { text2 } },
  { rule: "greaterThan2", obj: { number } },
  { rule: "greaterThan2", obj: { number2 } },
]);

vldt.validate();
