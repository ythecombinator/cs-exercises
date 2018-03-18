const {askUser, handleError} = require('../helpers');

const questions = [
  'Qual alternativa é a correta? \n a) Certa \n b) Errada \n c) Errada \n d) Errada',
];

const correct = 'a';
const options = ['a', 'b', 'c', 'd'];

const isValid = (answer) => options.includes(answer);
const isCorrect = (answer) => answer === correct;

const printResult = (answers) => {
  const answer = answers[0];

  if (!isValid(answer)) {
    console.log(`Opção inválida. Da próxima vez, escolha uma dessas: ${options}.`);
    process.exit();
  }

  if (isCorrect(answer)) {
    console.log('Parabéns! Você acertou!');
  } else {
    console.log(`Opção errada. A certa era: ${correct}.`);
  }
};

askUser(questions)
  .then(printResult)
  .catch(handleError);
