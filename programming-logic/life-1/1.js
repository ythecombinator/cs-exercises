// Notes:

// 1) Parsing time would be much easier and well-done with
// something like moment.js.

const {askUser, handleError} = require('./helpers');

const questions = ['Que horas são? (ex.: 14 horas e 37 minutos)'];

const hoursAndMinutes = /(0\d|1\d|2[0-3]) horas e (0\d|[12345]\d) minutos/;

const millisecondsToMinutes = ms => parseInt((ms / 1000) / 60, 10);

const parseHours = userInput => {
	const [_, hours, minutes] = userInput.match(hoursAndMinutes);
	return {hours: Number(hours), minutes: Number(minutes)};
};

const calcElapsedTime = ({hours, minutes}) => {
	const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setHours(hours, minutes, 0, 0);

  const elapsedTime = end.getTime() - start.getTime();
  return millisecondsToMinutes(elapsedTime);
};

const printResult = answers => {
	const [currentTime] = answers;
	const elapsedTime = calcElapsedTime(parseHours(currentTime));
  console.log(`\nPassaram-se ${elapsedTime} minutos desde o início do dia. \n`);
};

askUser(questions)
	.then(printResult)
	.catch(handleError);
