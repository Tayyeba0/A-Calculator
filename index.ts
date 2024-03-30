#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first Number", type: "number", name: "firstNumber" },
  { message: "Enter your second Number", type: "number", name: "secondNumber" },
  {
    message: "select one operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction","Multiplication","Division"],
  },
]);
if(answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}
else if(answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}
else if(answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if(answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
}
else{
    console.log("Choose a valid operator");
}