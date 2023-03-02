import startGame from '../index.js';

const gcdGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const getGCB = (a, b) => {
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
    const questionsAndRightAnswers = [];
    for (let i = 0; i < 3; i += 1) {
      const firstRandomNumb = Math.ceil((Math.random() * 10));
      const secondRandomNumb = Math.ceil((Math.random() * 10));
      const question = `${firstRandomNumb} ${secondRandomNumb}`;
      const rightAns = String(getGCB(firstRandomNumb, secondRandomNumb));
      questionsAndRightAnswers.push([question, rightAns]);
    }
    return questionsAndRightAnswers;
  };
  const questionsAndRightAnswers = getQuestionsAndRightAnswers();

  startGame(task, questionsAndRightAnswers);
};

export default gcdGame;
