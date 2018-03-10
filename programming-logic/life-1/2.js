const {askUser, handleError} = require('./helpers');

const questions = ['Qual o montante inicial? (R$)'];

const numbers = /[-.0-9]+/;

const parseInitialAmount = userInput => {
	const [value] = userInput.match(numbers);
	return Number(value);
};

const calcSavingsIncome = (initialAmount, duration) => {
	const results = [];

	for (let i = 0; i < duration; i++) {
		if (i === 0) {
      results.push({month: i, amount: initialAmount});
		}

    results.push({month: i, amount: results[i].amount + (results[i].amount * 0.008)});
	}
	return results.slice(1);
};

const printResult = answers => {
	const [userInput] = answers;
	const results = calcSavingsIncome(parseInitialAmount(userInput), 6);
  results.forEach(({month, amount}) => {
    console.log(`\nApós ${month + 1} mes(es), haverá R$${amount.toFixed(2)}.\n`);
  });
};

askUser(questions)
	.then(printResult)
	.catch(handleError);
