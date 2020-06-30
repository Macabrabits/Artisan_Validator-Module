## Short introduction

Artisan validator is meant to be a simple and elegant valdation library, inspired on the Laravel Validator, but simplier, without all that string interpolation for defining the validations and its parameters, keeping it also a little faster and standardized, and preserving IDE intellisense.

## How to run the example
```console
npm i typescript -g 
```
```console
tsc && node dist/test
```

## Use example


```javascript
import { Validator, rules } from "./Validator";

const name = "Victor Hugo";
const age = 24;
const friends = ["Camila", "Dante"];

const vldt = new Validator([
  { rule: rules.min({ age }, 25) },
  { rule: rules.min(age, 25), msg: "This dude must be elder than 24" },
  { rule: rules.min(age, 24), msg: "This dude must be elder than 24" },
  { rule: rules.min(age, 25), code: "age" },
  { rule: rules.min({ friends }, 3) },
  { rule: rules.min({ friends }, 2) }, //The only one that doesn't fail
]);

vldt.validate().catch((err) => console.log(err));

```
<b>Output</b>:

```console
{
  errors: [
    { code: 'min', msg: 'age must be at least 25' },
    { code: 'min', msg: 'This dude must be elder than 24' },
    { code: 'age', msg: 'number must be at least 25' },
    { code: 'min', msg: 'friends must have at least 3 elements' }
  ]
}
```

## Custom rules

Artisan validator is also meant to be scalable, that means you can easily add your own custom rules like this!

```javascript
import { Validator, Rule } from "./Validator";

const smallerThan: (subject: number, max: number) => Rule = (subject, max) => {
  const condition: boolean = subject < max;
  const defaultCode = 'st'
  const callbackData = max  
  const msgCallback = (max:number):string => `Field must be smaller than ${max}`;
  
  return new Rule(condition, defaultCode, msgCallback, callbackData);
};

const age = 14

const vldt = new Validator([
  { rule: smallerThan(age, 14) },  
]);

vldt.validate().catch(err => console.log(err))
```
<b>Output</b>:

```console
{ errors: [ { code: 'st', msg: 'Field must be smaller than 14' } ] }
```


# THIS PROJECT IS STILL JUST A PROTOTYPE, AND IT IS FAR FROM READY!
