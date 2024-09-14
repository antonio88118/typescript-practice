import { hi } from "./module1";

function sum(a: number, b: number): number {
  return a + b;
}

const obj: { name: string; age: number } = { name: "andy", age: 10 };
obj.age = 18;

console.log(sum(123, 456));
console.log(hi);
console.log(obj);
