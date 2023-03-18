import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomSet = () => {
  const term = Math.round((getRandomNumber() * 10));
  const randomSet = [];
  const gap = Math.ceil((getRandomNumber() * 10));
  const minNumbersCount = 5;
  const maxNumbersCount = 11;
  const interval = maxNumbersCount - minNumbersCount;
  const numbersQuantity = Math.floor(getRandomNumber() * (interval) + minNumbersCount);
  for (let i = 1; i <= numbersQuantity; i += 1) {
    const nextTerm = term + gap * i;
    randomSet.push(nextTerm);
  }
  return randomSet;
};

const getQuestionsAndRightAnswers = () => {
  const set = getRandomSet();
  const randomItem = Math.floor(getRandomNumber() * set.length);
  const rightAnswer = String(set[randomItem]);
  set[randomItem] = '..';
  const question = set.join(' ');
  return [question, rightAnswer];
};

const progressionGame = () => {
  const task = 'What number is missing in the progression?';

  startGame(task, getQuestionsAndRightAnswers);
};

export default progressionGame;
