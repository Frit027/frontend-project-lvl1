import readlineSync from 'readline-sync';
import greeting from './cli.js';

export default (taskText, getQuestionWithAnswer) => {
  const countRounds = 3;
  const userName = greeting();
  console.log(taskText);

  for (let i = 0; i < countRounds; i += 1) {
    const [expression, correctAnswer] = getQuestionWithAnswer();
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
