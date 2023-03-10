import startGame from '../index.js';

const getQuestionsAndRightAnswers = () => {
  const question = Math.round((Math.random() * 10));
  const rightAns = question % 2 === 0 ? 'yes' : 'no';
  const questionsAndRightAnswers = [question, rightAns];
  return questionsAndRightAnswers;
};

const evenGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  startGame(task, getQuestionsAndRightAnswers);
};

export default evenGame;
