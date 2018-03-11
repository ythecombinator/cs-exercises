const {askUser, handleError} = require('../helpers');

const questions = ['Quais são os números? (e.x.: 1, 2, 3, 4, 5)'];

const calcMedian = arr => (arr.length % 2 === 0) ?
	(arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2 :
	arr[(arr.length - 1) / 2];

const printResult = answers => {
	const list = answers[0].split(', ');
	const numbers = list
		.map(item => Number(item))
		.sort((a, b) => a - b);
  console.log(`\nA mediana é ${calcMedian(numbers)}.\n`);
};

askUser(questions)
	.then(printResult)
	.catch(handleError);
