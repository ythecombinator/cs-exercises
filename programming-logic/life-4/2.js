const {askUser, handleError} = require('../helpers');

const questions = [
  'Qual o montante inicial? (R$)',
  'Qual a taxa de juros? (%/mês)',
  'Por quantos meses? (ex.: 6)',
];

const numbers = /[-.0-9]+/;

const parseInitialAmount = (userInput) => {
  const [value] = userInput.match(numbers);
  return Number(value);
};

const calcSavingsIncome = (initialAmount, duration, rate) => {
  const results = [];

  for (let i = 0; i < duration; i++) {
    if (i === 0) {
      results.push({month: i, amount: initialAmount});
    }

    results.push({month: i, amount: results[i].amount + results[i].amount * rate * 0.001});
  }
  return results.slice(1);
};

const printResult = (answers) => {
  const [amount, rate, duration] = answers;
  const results = calcSavingsIncome(parseInitialAmount(amount), duration, rate);
  results.forEach(({month, amount}) => {
    console.log(`\nApós ${month + 1} mes(es), haverá R$${amount.toFixed(2)}.\n`);
  });
};

askUser(questions)
  .then(printResult)
  .catch(handleError);
