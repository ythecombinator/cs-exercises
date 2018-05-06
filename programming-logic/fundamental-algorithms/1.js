const swap = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;

  return {a, b};
};

const [a, b] = [10, 15];

console.log(`Antes era ${a} e ${b}.`);

const result = swap(a, b);

console.log(`\nAgora é ${result.a} e ${result.b}.`);
