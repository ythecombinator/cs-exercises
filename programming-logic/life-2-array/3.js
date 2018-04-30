const grades = [10, 8, 10, 9, 5];

const max = (array) => {
  array.sort((a, b) => a - b);
  return array[array.length - 1];
};

const mean = (array) => array.reduce((p, c) => p + c, 0) / array.length;

console.log(`Média: ${mean(grades)}`, `Maior valor: ${max(grades)}`);
