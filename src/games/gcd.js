import startGame from '../index.js';

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
  const firstRandomNumb = Math.ceil((Math.random() * 10));
  const secondRandomNumb = Math.ceil((Math.random() * 10));
  const question = `${firstRandomNumb} ${secondRandomNumb}`;
  const rightAns = String(getGCD(firstRandomNumb, secondRandomNumb));
  const questionsAndRightAnswers = [question, rightAns];
  return questionsAndRightAnswers;
};

const gcdGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';

  startGame(task, getQuestionsAndRightAnswers);
};

export default gcdGame;
