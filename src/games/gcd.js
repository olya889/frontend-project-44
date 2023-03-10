import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const getGCD = (a, b) => {
  let maxNumber = Math.max(a, b);
  let minNumber = Math.min(a, b);
  let greatestCommonDivisor;
  while (minNumber >= 1) {
    const dividend = maxNumber;
    const divisor = minNumber;
    const modulo = dividend % divisor;
    if (modulo === 0) {
      greatestCommonDivisor = minNumber;
    }
    maxNumber = divisor;
    minNumber = modulo;
  }
  return greatestCommonDivisor;
};

const getQuestionsAndRightAnswers = () => {
  const firstRandomNumber = Math.ceil((getRandomNumber() * 10));
  const secondRandomNumber = Math.ceil((getRandomNumber() * 10));
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const rightAnswer = String(getGCD(firstRandomNumber, secondRandomNumber));
  const questionsAndRightAnswers = [question, rightAnswer];
  return questionsAndRightAnswers;
};

const gcdGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';

  startGame(task, getQuestionsAndRightAnswers);
};

export default gcdGame;
