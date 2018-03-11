const {askUser, handleError} = require('../helpers');

const questions = [1, 2, 3, 4].map(number => `Quanto você consumiu na sua ${number}° refeição? (Cal)`);

const calcTotalCalories = calories => calories
	.map(calorie => Number(calorie))
	.reduce((a, b) => a + b, 0);

const printResult = answers => {
	const totalCalories = calcTotalCalories(answers);
  console.log(`\nVocê consumiu um total de ${totalCalories} calorias.\n`);
};

askUser(questions)
	.then(printResult)
	.catch(handleError);
