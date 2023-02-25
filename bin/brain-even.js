#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let i = 0;
while (i < 3) {
  const randomNumber = Math.round((Math.random() * 10));
  console.log(`Question: ${randomNumber}`);
  const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const answer = readlineSync.question('Your answer: ');
  if (answer === rightAnswer) {
    console.log('Correct!');
    i += 1;
  } else {
    /* if (answer === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      break;
    } */
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
    break;
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
