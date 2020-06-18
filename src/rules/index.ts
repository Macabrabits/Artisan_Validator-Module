import { Rule } from "../Rule";

const rules: {
  greaterThan2: (variable:any) => Rule;
} = {
  greaterThan2: require("./greaterThan2Rule"),
};

export = rules;
