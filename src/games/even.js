import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const getQuestionsAndRightAnswers = () => {
  const question = Math.round((getRandomNumber()));
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const evenGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  startGame(task, getQuestionsAndRightAnswers);
};

export default evenGame;
