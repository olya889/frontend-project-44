import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomOperator = (operatorsList) => {
  const min = 0;
  const max = operatorsList.length;
  return operatorsList[Math.floor(getRandomNumber() * (max - min) + min)];
};

const getCalculationResult = (firstNumber, operator, seconNumber) => {
  if (operator === '+') {
    return firstNumber + seconNumber;
  } if (operator === '-') {
    return firstNumber - seconNumber;
  } return firstNumber * seconNumber;
};

const getQuestionsAndRightAnswers = () => {
  const operators = ['+', '-', '*'];
  const firstRandomNumber = Math.round((getRandomNumber() * 10));
  const secondRandomNumber = Math.round((getRandomNumber() * 10));
  const randomOperator = getRandomOperator(operators);
  const question = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
  // eslint-disable-next-line max-len
  const rightAnswer = String(getCalculationResult(firstRandomNumber, randomOperator, secondRandomNumber));
  const questionsAndRightAnswers = [question, rightAnswer];
  return questionsAndRightAnswers;
};

const calculatorGame = () => {
  const task = 'What is the result of the expression?';
  startGame(task, getQuestionsAndRightAnswers);
};

export default calculatorGame;
