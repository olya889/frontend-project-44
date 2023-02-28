import readlineSync from 'readline-sync';

const startGame = (task, questionsAndRightAnswers) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);
  let i = 0;
  while (i < 3) {
    console.log(`Question: ${questionsAndRightAnswers[i][0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === questionsAndRightAnswers[i][1]) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionsAndRightAnswers[i][1]}'.\nLet's try again, ${name}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default startGame;
