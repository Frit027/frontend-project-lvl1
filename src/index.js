export const isEqual = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

export const showMessage = (result, userName, userAnswer, correctAnswer) => {
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  }
};

export const getRandomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
