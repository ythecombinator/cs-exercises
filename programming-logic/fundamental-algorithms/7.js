const reverse = (number) => {
  for (var r = 0; number; number = Math.floor(number / 10)) {
    r *= 10;
    r += number % 10;
  }
  return r;
};

const sample = 27953;

const result = reverse(sample);

console.log(result);
