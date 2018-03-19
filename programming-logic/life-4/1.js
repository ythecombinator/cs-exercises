const {askUser, handleError} = require('../helpers');

const questions = ['Qual o valor de N? (e.x.: 9)'];

const generateList = (n) => new Array(n).fill().map((e, i) => i);

const printResult = (answers) => {
  const n = Number(answers[0]);
  const result = generateList(n);
  console.log(`\nOs ${n} primeiros naturais são: ${result}.`);
};

askUser(questions)
  .then(printResult)
  .catch(handleError);
