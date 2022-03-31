#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import { isEqual, showMessage, getRandomInteger } from '../src/index.js';

(function () {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomInt = getRandomInteger(1, 100);
    console.log(`Question: ${randomInt}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = randomInt % 2 ? 'no' : 'yes';
    const result = isEqual(answer, correctAnswer);

    showMessage(result, userName, answer, correctAnswer);
    if (!result) return;
  }
  console.log(`Congratulations, ${userName}!`);
}());
