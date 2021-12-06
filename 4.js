const fs = require("fs");

const input = fs.readFileSync("input3,4.txt", "utf-8");

const inputArr = input.split("\n").map((el) => el.trim());

let horizontal = 0;
let depth = 0;
let aim = 0;

inputArr.forEach((pos) => {
  const [direction, dist] = pos.split(" ");
  const distance = Number(dist);
  if (direction === "down") aim += distance;
  if (direction === "up") aim -= distance;
  if (direction === "forward") {
    horizontal += distance;
    depth += distance * aim;
  }
});

console.log(horizontal, depth, horizontal * depth);
