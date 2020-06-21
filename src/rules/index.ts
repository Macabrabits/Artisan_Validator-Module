import { Rule } from "../Rule";

const rules: {
  greaterThan: (subject: any, min: number) => Rule;  
  smallerThan: (subject: any, max: number) => Rule;
  min: (subject: any, min: number) => Rule;
  max: (subject: any, max: number) => Rule;
} = {
  greaterThan: require("./greaterThan"),  
  smallerThan: require("./smallerThan"),
  min: require("./min"),
  max: require("./max"),
  
};

export = rules;
