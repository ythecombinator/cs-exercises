const {askUser, handleError} = require('../helpers');

const questions = ['Quais são os números? (e.x.: 1, 7, 8, 9)'];

const isSorted = arr => arr.every((val, i, arr) => !i || (val >= arr[i - 1]));

const printResult = answers => {
	const list = answers[0].split(', ');
	const result = isSorted(list);
	(result) ?
    console.log('\nEstão em ordem.\n') :
    console.log('\nNão estão em ordem.\n');
};

askUser(questions)
	.then(printResult)
	.catch(handleError);
