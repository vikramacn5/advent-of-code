const fs = require("fs");

const input = fs.readFileSync("input3,4.txt", "utf-8");

const inputArr = input.split("\n").map((e) => e.trim());

console.log(inputArr);

let horizontal = 0;
let depth = 0;

inputArr.forEach((pos) => {
  const [direction, distance] = pos.split(" ");
  if (direction === "forward") horizontal += Number(distance);
  if (direction === "down") depth += Number(distance);
  if (direction === "up") depth -= Number(distance);
});

console.log(horizontal, depth, horizontal * depth);
