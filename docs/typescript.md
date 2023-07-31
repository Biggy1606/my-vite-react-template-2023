# Typescript knowledge base

## What is better `typeof notification === "undefined"` or `notification === undefined`?

Using `typeof notification === "undefined"` is more specific and safer, while `notification === undefined` is more concise and traditional.

## What it `nullish coalescing`?

The `??` operator is the nullish coalescing operator. It checks if the value of `foo` is either `null` or `undefined`. If it is, the expression evaluates to the value of `bar()`. Otherwise, it evaluates to the value of `foo`.

Example:

```typescript
let x = foo ?? bar();
```