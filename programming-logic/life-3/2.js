const {askUser, handleError} = require('../helpers');

const questions = ['Quais são os números? (e.x.: 1, 2, 3, 4)'];

const biggerThan10 = (el) => el > 10;
const smallerOrEqualTo10 = (el) => el <= 10;

const slice = (arr) => ({
  bigger: arr.filter(biggerThan10),
  smaller: arr.filter(smallerOrEqualTo10),
});

const printResult = (answers) => {
  const list = answers[0].split(', ');
  const numbers = list.map((item) => Number(item));
  const {bigger, smaller} = slice(numbers);
  console.log(
    `\nHá ${bigger.length} maior(es). Eles são: ${bigger}.`,
    `\nHá ${smaller.length} menor(es) ou igual(is). Eles são: ${smaller}.`,
  );
};

askUser(questions)
  .then(printResult)
  .catch(handleError);
