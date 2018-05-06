const exclude = (target, array) => {
  const i = array.indexOf(target);
  if (i != -1) {
    array.splice(i, 1);
  }
};

const sample = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const n = 10;

exclude(n, sample);

console.log(sample);
