const {askUser, handleError} = require('../helpers');

const questions = ['Quais são os números? (e.x.: 1, 2, 3, 4)'];

const printResult = (answers) => {
  const list = answers[0].split(', ');
  const numbers = list.map((item) => Number(item)).sort((a, b) => a - b);
  const last = [...numbers].pop();
  console.log(`\nVocê disse ${numbers.length} números. O maior deles é: ${last}.`);
};

askUser(questions)
  .then(printResult)
  .catch(handleError);
