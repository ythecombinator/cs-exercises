// Notes

// 1) Things would be much better if we tried to parse context-free expressions into an abstract syntax tree.
// We'd need a context-free grammar to be able to do so. But we are not going to create a parser now.

// 2) No error handling at all here.

const {askUser, handleError} = require('../helpers');

const questions = ['Qual a operação? (ex.: 5+5)'];

const numericExpressions = /([-+]?[0-9]*\.?[0-9]+)+([\/\+\-\*])+([-+]?[0-9]*\.?[0-9]+)/;

const parseNumericExpression = (userInput) => {
  const [_, first, operation, second] = userInput.match(numericExpressions);
  return {firstOperand: Number(first), operation, secondOperand: Number(second)};
};

const calculations = new Map([
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
  ['/', (a, b) => a / b],
]);

const printResult = (answers) => {
  const desiredOperation = answers[0];
  const {firstOperand, secondOperand, operation} = parseNumericExpression(desiredOperation);
  const result = calculations.get(operation)(firstOperand, secondOperand);
  console.log(`\nA resposta é ${result}.`);
};

askUser(questions)
  .then(printResult)
  .catch(handleError);
