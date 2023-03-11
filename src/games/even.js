import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  } return false;
};

const getQuestionsAndRightAnswers = () => {
  const question = Math.round((getRandomNumber() * 10));
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  const questionsAndRightAnswers = [question, rightAnswer];
  return questionsAndRightAnswers;
};

const evenGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  startGame(task, getQuestionsAndRightAnswers);
};

export default evenGame;
