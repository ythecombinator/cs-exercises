const weights = [98, 90, 89, 100, 88, 97, 99, 101];

const calcDifferences = (element, index, array) =>
  index !== array.length - 1 ? element - array[index + 1] : null;

const calcBiggestLoss = (arr) => {
  const differences = arr.map(calcDifferences).filter((el) => el !== null);
  const biggest = Math.max(...differences);
  return differences.indexOf(biggest) + 1;
};

const result = calcBiggestLoss(weights);

console.log(`A maior perda se deu na semana ${result}.`);
