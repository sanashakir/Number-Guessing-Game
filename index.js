#! /usr/bin/env node
import inquirer from "inquirer";
//1) Computer will generate a random number.
//2) Take user input for guessing number.
//3) Compare user input with computer generated number. 
//4) Show result.
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to number Guessing Game");
const answer = await inquirer.prompt([
    {
        name: "Your_guessed_number",
        type: "number",
        message: "Please guess a number between 1-6",
    },
]);
console.log(answer);
if (answer.Your_guessed_number === randomNumber) {
    console.log("Congratulations!you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
