const {askUser, handleError} = require('../helpers');

const questions = ['Qual o valor de N? (e.x.: 5)'];

const repeatString = (string, times) => (times > 0 ? string.repeat(times) : '');

const generateTriangle = (n) =>
  new Array(n + 1)
    .fill()
    .map((e, i) => repeatString(' * ', i))
    .slice(1);

const printResult = (answers) => {
  const n = Number(answers[0]);
  const result = generateTriangle(n);
  result.forEach((line) => {
    console.log(line);
  });
};

askUser(questions)
  .then(printResult)
  .catch(handleError);
