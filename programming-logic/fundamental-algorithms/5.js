const factorial = (x, acum = 1) => (x ? factorial(x - 1, x * acum) : acum);

const odd = (arr) => arr.filter((val) => !(val % 2 === 0));

const oddNumbers = (n) => {
  const numbers = Array.apply(null, {length: n}).map(Number.call, Number);
  return odd(numbers);
};

const sin = (x, n) => {
  const base = oddNumbers(n + 1);
  const values = base.map((value) => Math.pow(x, value) / factorial(value));
  const result = values.reduce((acc, val) => {
    return values.indexOf(val) % 2 === 0 ? acc + val : acc - val;
  });
  return result;
};

const sample = sin(5, 5);
console.log(sample);
