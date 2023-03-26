import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomOperator = (operatorsList) => {
  const min = 0;
  const max = operatorsList.length - 1;
  return operatorsList[Math.floor(getRandomNumber(min, max))];
};

const getCalculationResult = (firstNumber, operator, seconNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + seconNumber;
    case '-':
      return firstNumber - seconNumber;
    case '*':
      return firstNumber * seconNumber;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getQuestionsAndRightAnswers = () => {
  const operators = ['+', '-', '*'];
  const firstNumber = Math.round(getRandomNumber());
  const secondNumber = Math.round(getRandomNumber());
  const operator = getRandomOperator(operators);
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const rightAnswer = String(
    getCalculationResult(firstNumber, operator, secondNumber),
  );
  return [question, rightAnswer];
};

const calculatorGame = () => {
  const task = 'What is the result of the expression?';
  startGame(task, getQuestionsAndRightAnswers);
};

export default calculatorGame;
