import startGame from '../index.js';

const getRandomSet = () => {
  const term = Math.round((Math.random() * 10));
  const randomSet = [];
  const gap = Math.ceil((Math.random() * 10));
  const numbersQuantity = Math.floor(Math.random() * (10 - 5 + 1) + 5);
  for (let i = 1; i <= numbersQuantity; i += 1) {
    const nextTerm = term + gap * i;
    randomSet.push(nextTerm);
  }
  return randomSet;
};

const getQuestionsAndRightAnswers = () => {
  const set = getRandomSet();
  const randomItem = Math.floor(Math.random() * set.length);
  const rightAns = String(set[randomItem]);
  set[randomItem] = '..';
  const question = set.join(' ');
  const questionsAndRightAnswers = [question, rightAns];
  return questionsAndRightAnswers;
};

const progressionGame = () => {
  const task = 'What number is missing in the progression?';

  startGame(task, getQuestionsAndRightAnswers);
};

export default progressionGame;
