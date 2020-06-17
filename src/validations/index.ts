import { Validation } from "../Validation";

const validations: {
  greaterThan2: Validation;
} = {
  greaterThan2: require("./greaterThan2"),
};

module.exports = validations;
