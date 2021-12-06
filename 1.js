const fs = require("fs");

const input = fs.readFileSync("input1.txt", "utf-8");
const inputArray = input.split("\n").map((el) => Number(el));

let previousMeasurement = 0;
let increased = -1;
inputArray.forEach((e) => {
  if (e > previousMeasurement) increased++;
  previousMeasurement = e;
});

console.log(increased);
