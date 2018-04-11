const {askUser, handleError} = require('../helpers');

const questions = ['Quantos litros?', 'Qual o combustível?'];

const fuels = {
  1: '1',
  2: '2',
  3: '3',
};

const fuelMapping = {
  '1': {
    value: 3.1,
    required: 25,
    below: 0.03,
    above: 0.05,
  },
  '2': {
    value: 3.9,
    required: 30,
    below: 0.06,
    above: 0.08,
  },
  '3': {
    value: 3.3,
    required: 50,
    below: 0.07,
    above: 0.1,
  },
};

const calcFinalTax = {
  [fuels['1']]: (quantity) =>
    quantity <= fuelMapping['1'].required
      ? fuelMapping['1'].value * quantity - fuelMapping['1'].value * fuelMapping['1'].below
      : fuelMapping['1'].value * quantity - fuelMapping['1'].value * fuelMapping['1'].above,
  [fuels['2']]: (quantity) =>
    quantity <= fuelMapping['2'].required
      ? fuelMapping['2'].value * quantity - fuelMapping['2'].value * fuelMapping['2'].below
      : fuelMapping['2'].value * quantity - fuelMapping['2'].value * fuelMapping['2'].above,
  [fuels['3']]: (quantity) =>
    quantity <= fuelMapping['3'].required
      ? fuelMapping['3'].value * quantity - fuelMapping['3'].value * fuelMapping['3'].below
      : fuelMapping['3'].value * quantity - fuelMapping['3'].value * fuelMapping['3'].above,
};

const handleUserInput = (answers) => {
  const values = answers.map((answer) => Number(answer));
  const [amount, type] = values;
  console.log(`\nVocê deve: R$${calcFinalTax[type](amount).toFixed(2)}.`);
};

askUser(questions)
  .then(handleUserInput)
  .catch(handleError);
