import startGame from '../index.js';

const calculatorGame = () => {
  const task = 'What is the result of the expression?';

  const getRandomOperator = (operatorsList) => {
    const min = 0;
    const max = operatorsList.length;
    return operatorsList[Math.floor(Math.random() * (max - min) + min)];
  };

  const getRightAnswer = (firstNumber, operator, seconNumber) => {
    let result;
    if (operator === '+') {
      result = firstNumber + seconNumber;
    } else if (operator === '-') {
      result = firstNumber - seconNumber;
    } else if (operator === '*') {
      result = firstNumber * seconNumber;
    }
    return result;
  };

  const getQuestionsAndRightAnswers = () => {
    const operators = ['+', '-', '*'];
    const firstRandomNumb = Math.round((Math.random() * 10));
    const secondRandomNumb = Math.round((Math.random() * 10));
    const randomOperator = getRandomOperator(operators);
    const question = `${firstRandomNumb} ${randomOperator} ${secondRandomNumb}`;
    const rightAns = String(getRightAnswer(firstRandomNumb, randomOperator, secondRandomNumb));
    const questionsAndRightAnswers = [question, rightAns];
    return questionsAndRightAnswers;
  };

  startGame(task, getQuestionsAndRightAnswers);
};

export default calculatorGame;
