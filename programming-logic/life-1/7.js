const {askUser, handleError} = require('./helpers');

const questions = ['Qual a parte com letras? (ex.: ABCD)', 'Qual a parte com números? (ex.: 999)'];

const isValid = (letters, numbers) => (!/\d/.test(letters || !/[a-z]/i.test(numbers)));

const printResult = answers => {
	const [letters, numbers] = answers;
  isValid(letters, numbers) ?
    console.log(`\nA placa do carro é ${letters.toUpperCase()}-${numbers}.\n`) :
    console.log('\nPor favor, digite valores válidos. \n');
};

askUser(questions)
	.then(printResult)
	.catch(handleError);
