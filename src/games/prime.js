import startGame from '../index.js';

const primeGame = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const isPrime = (number) => {
    if (number < 2) {
      return 'yes';
    }
    let divider = 2;
    while (divider <= number / 2) {
      if (number % divider === 0) {
        return 'no';
      }
      divider += 1;
    }
    return 'yes';
  };
  const getQuestionsAndRightAnswers = () => {
    const questionsAndRightAnswers = [];
    for (let i = 0; i < 3; i += 1) {
      const randomNumber = Math.ceil((Math.random() * 10));
      const question = randomNumber;
      const rightAns = (isPrime(question));
      questionsAndRightAnswers.push([question, rightAns]);
    }
    return questionsAndRightAnswers;
  };
  const questionsAndRightAnswers = getQuestionsAndRightAnswers();
  startGame(task, questionsAndRightAnswers);
};

export default primeGame;
