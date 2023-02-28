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
    const questionsAndRightAnswers = [];
    const operators = ['+', '-', '*'];
    for (let i = 0; i <= 2; i += 1) {
      const firstRandomNumb = Math.round((Math.random() * 10));
      const SecondRandomNumb = Math.round((Math.random() * 10));
      const randomOperator = getRandomOperator(operators);
      const randomOperation = `${firstRandomNumb} ${randomOperator} ${SecondRandomNumb}`;
      const rightAns = String(getRightAnswer(firstRandomNumb, randomOperator, SecondRandomNumb));
      questionsAndRightAnswers.push([randomOperation, rightAns]);
    }
    return questionsAndRightAnswers;
  };

  const questionsAndRightAnswers = getQuestionsAndRightAnswers();

  startGame(task, questionsAndRightAnswers);
};

export default calculatorGame;
