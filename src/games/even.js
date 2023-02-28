import startGame from '../index.js';

const evenGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getQuestionsAndRightAnswers = () => {
    const questionsAndRightAnswers = [];
    for (let i = 0; i <= 2; i += 1) {
      const randomNumber = Math.round((Math.random() * 10));
      const rightAns = randomNumber % 2 === 0 ? 'yes' : 'no';
      questionsAndRightAnswers.push([randomNumber, rightAns]);
    }
    return questionsAndRightAnswers;
  };
  const questionsAndRightAnswers = getQuestionsAndRightAnswers();
  startGame(task, questionsAndRightAnswers);
};

export default evenGame;
