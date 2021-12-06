const fs = require("fs");

const input = fs.readFileSync("input5,6.txt", "utf-8");

const inputArr = input.split("\n").map((el) => el.trim());

const inputObj = {};

inputArr.forEach((line) => {
  for (let i = 0; i < line.length; i++) {
    // if (!inputObj[`bit${i}`]) inputObj[`bit${i}`] = [];
    // inputObj[`bit${i}`].push(Number(line[i]));

    if (!inputObj[`bit${i}`])
      inputObj[`bit${i}`] = { zeroCount: 0, oneCount: 0 };
    line[i] === "0"
      ? inputObj[`bit${i}`].zeroCount++
      : inputObj[`bit${i}`].oneCount++;
  }
});

// console.log(inputObj);

let mostCommonBit = "";
let mostUncommonBit = "";

for (let i = 0; i < inputArr[0].length; i++) {
  if (inputObj[`bit${i}`].zeroCount > inputArr.length / 2) {
    mostCommonBit += "0";
    mostUncommonBit += "1";
  } else {
    mostCommonBit += "1";
    mostUncommonBit += "0";
  }
}

console.log(mostCommonBit, mostUncommonBit);

const convertToDecimal = (binary) => {
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") decimal += 2 ** (binary.length - 1 - i);
  }
  return decimal;
};

console.log(
  convertToDecimal(mostCommonBit) * convertToDecimal(mostUncommonBit)
);
