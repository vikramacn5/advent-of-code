const fs = require("fs");

const input = fs
  .readFileSync("input1.txt", "utf-8")
  .split("\n")
  .map((el) => Number(el));

let previousMeasurement = 0;
let increased = -1;
for (let i = 0; i < input.length; i++) {
  if (!input[i + 2]) break;
  let sum = 0;
  for (let j = i; j < i + 3; j++) {
    sum += input[j];
  }
  if (sum > previousMeasurement) increased++;
  previousMeasurement = sum;
}

console.log(increased);
