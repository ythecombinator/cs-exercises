const {askUser, handleError} = require('../helpers');

const questions = ['Qual a sua primeira nota?', 'Qual a sua segunda nota?'];

const isValidGrade = (grade) => grade >= 0 && grade <= 10;

const calcMean = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;

const printResult = (answers) => {
  const grades = answers.map((grade) => Number(grade));

  if (!grades.every(isValidGrade)) {
    console.log('\nPor favor, insira apenas valores válidos (0 - 10).');
    process.exit();
  }

  const result = calcMean(grades);

  console.log(`\nSua média é: ${result}.`);
};

askUser(questions)
  .then(printResult)
  .catch(handleError);
