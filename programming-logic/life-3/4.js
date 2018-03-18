const {askUser, handleError} = require('../helpers');

const questions = ['Qual mês deseja saber? (ex.: 5)'];

const daysPerMonth = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const printResult = (answers) => {
  const desiredMonth = answers[0];
  console.log(`\nNo ${desiredMonth}° mês do ano há ${daysPerMonth[`${desiredMonth}`]} dias.`);
};

askUser(questions)
  .then(printResult)
  .catch(handleError);
