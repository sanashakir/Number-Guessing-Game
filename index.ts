#! /usr/bin/env node

import inquirer from "inquirer"

// generate random number between 1 and 6  for the game to guess.

// Implement the game logic here.

const randomNumber = Math.floor(Math.random()*6+1);
console.log("Welcome to number Guessing Game");
const answer = await inquirer.prompt
(
 [
    {
     name:"Your_guessed_number",
     type: "number",
     message:"Please guess a number between 1-6",
    },
 ]
);

console.log(answer);

if(answer.Your_guessed_number === randomNumber)
    {
        console.log ("Congratulations!you guessed right number")
    }else 
{
        console.log("you guessed wrong number")
}