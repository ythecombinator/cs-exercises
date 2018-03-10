const {askUser, handleError} = require('./helpers');

const questions = ['Quanto está a gasolina? (R$)', 'Qual o consumo médio do seu carro? (Km/L)', 'Qual é a distância a ser percorrida? (Km)'];

const calcExpenses = (gasPrice, gasConversionRate, distance) => (distance / gasConversionRate * gasPrice);

const printResult = answers => {
	const [gasPrice, gasConversionRate, distance] = answers;
	const result = calcExpenses(Number(gasPrice), Number(gasConversionRate), Number(distance));
  console.log(`\nVocê gastará R$${result.toFixed(2)}.\n`);
};

askUser(questions)
	.then(printResult)
	.catch(handleError);
