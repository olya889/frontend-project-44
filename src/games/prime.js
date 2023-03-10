import startGame from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return true;
  }
  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return 'yes';
};
const getQuestionsAndRightAnswers = () => {
  const question = Math.ceil(Math.random() * 10);
  const rightAns = isPrime(question) ? 'yes' : 'no';
  const questionsAndRightAnswers = [question, rightAns];
  return questionsAndRightAnswers;
};
const primeGame = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  startGame(task, getQuestionsAndRightAnswers);
};

export default primeGame;
