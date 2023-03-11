import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};
const getQuestionsAndRightAnswers = () => {
  const question = Math.round(getRandomNumber() * 10);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  const questionsAndRightAnswers = [question, rightAnswer];
  return questionsAndRightAnswers;
};
const primeGame = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  startGame(task, getQuestionsAndRightAnswers);
};

export default primeGame;
