const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8");

// Convert the input to an array of arrays
const elves = input.split("\n\r").map((elf) => elf.split("\n").map(Number));

const caloriesPerElf = elves
  .map((calories) => calories.reduce((sum, element) => sum + element, 0))
  .sort((a, b) => b - a);

const [firstElfCalories, secondElfCalories, thirdElfCalories] = caloriesPerElf

const sumOfTopThreeCalories = firstElfCalories + secondElfCalories + thirdElfCalories


console.log(`Elf with the most calories is carrying ${firstElfCalories} Calories.`);
console.log(`Sum of the top 3 carried calories is ${sumOfTopThreeCalories}`)
