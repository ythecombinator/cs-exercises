const includes = (target, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
  }

  return false;
};

const sample = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const n1 = 10;
const n2 = 15;

const example1 = includes(n1, sample);
const example2 = includes(n2, sample);

console.log(example1, example2);
