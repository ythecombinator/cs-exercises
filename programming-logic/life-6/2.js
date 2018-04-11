const {askUser, handleError} = require('../helpers');

const questions = ['Qual o tanque?', 'Quantos litros?', 'Quantos kilometros percorridos?'];

const calc = (fuelCapacity, lastRefuel, lastKm) => {
  const consumed = lastRefuel / lastKm;
  const autonomy = lastKm * (fuelCapacity - lastRefuel);
  return {consumed, autonomy};
};

const handleUserInput = (answers) => {
  const values = answers.map((answer) => Number(answer));
  const [fuelCapacity, lastRefuel, km] = values;
  const {consumed, autonomy} = calc(fuelCapacity, lastRefuel, km);
  console.log(`\nConsumo efetuado: ${consumed}l \nAutonomia: ${autonomy}km`);
};

askUser(questions)
  .then(handleUserInput)
  .catch(handleError);
