#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const game = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomInt = randomInteger(1, 1000);
    console.log(`Question: ${randomInt}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = randomInt % 2 ? 'no' : 'yes';

    if (String(answer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

game();
