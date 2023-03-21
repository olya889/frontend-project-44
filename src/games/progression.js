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
  const firstTerm = Math.round((getRandomNumber()));
  const gap = Math.ceil((getRandomNumber()));
  const min = 5;
  const max = 10;
  const numbersCount = Math.floor(getRandomNumber(min, max));
  const set = getRandomSet(firstTerm, gap, numbersCount);
  const randomItem = Math.floor(getRandomNumber(0, set.length - 1));
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
