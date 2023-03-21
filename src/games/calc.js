import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomOperator = (operatorsList) => {
  const min = 0;
  const max = operatorsList.length;
  return operatorsList[Math.floor(getRandomNumber() * (max - min) + min)];
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
  const firstRandomNumber = Math.round((getRandomNumber() * 10));
  const secondRandomNumber = Math.round((getRandomNumber() * 10));
  const randomOperator = getRandomOperator(operators);
  const question = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
  const rightAnswer = String(
    getCalculationResult(firstRandomNumber, randomOperator, secondRandomNumber),
  );
  return [question, rightAnswer];
};

const calculatorGame = () => {
  const task = 'What is the result of the expression?';
  startGame(task, getQuestionsAndRightAnswers);
};

export default calculatorGame;
