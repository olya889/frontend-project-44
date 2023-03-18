import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomSet = (firstTerm, gap, numbersCount) => {
  const randomSet = [];
  for (let i = 1; i <= numbersCount; i += 1) {
    const nextTerm = firstTerm + gap * i;
    randomSet.push(nextTerm);
  }
  return randomSet;
};

const getQuestionsAndRightAnswers = () => {
  const firstTerm = Math.round((getRandomNumber() * 10));
  const gap = Math.ceil((getRandomNumber() * 10));
  const minNumbersCount = 5;
  const maxNumbersCount = 11;
  const interval = maxNumbersCount - minNumbersCount;
  const numbersCount = Math.floor(getRandomNumber() * (interval) + minNumbersCount);
  const set = getRandomSet(firstTerm, gap, numbersCount);
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
