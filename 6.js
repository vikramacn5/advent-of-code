const fs = require("fs");

const input = fs.readFileSync("input5,6.txt", "utf-8");

const inputArr = input.split("\n").map((el) => el.trim());

let o2GeneratorArr = [...inputArr];
let co2ScrubberArr = [...inputArr];

const giveRating = function (inputArr, isO2) {
  let ratingArr = [...inputArr];
  let pos = 0;
  while (ratingArr.length > 1) {
    const oneStartArr = [];
    const zeroStartArr = [];

    for (let i = 0; i < ratingArr.length; i++) {
      if (ratingArr[i][pos] === "0") zeroStartArr.push(ratingArr[i]);
      else oneStartArr.push(ratingArr[i]);
    }

    if (isO2) {
      if (oneStartArr.length >= zeroStartArr.length) ratingArr = oneStartArr;
      else ratingArr = zeroStartArr;
    } else {
      if (oneStartArr.length < zeroStartArr.length) ratingArr = oneStartArr;
      else ratingArr = zeroStartArr;
    }
    pos++;
  }
  return ratingArr[0];
};

const convertToDecimal = (binary) => {
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") decimal += 2 ** (binary.length - 1 - i);
  }
  return decimal;
};

console.log(
  convertToDecimal(giveRating(o2GeneratorArr, true)) *
    convertToDecimal(giveRating(co2ScrubberArr, false))
);
