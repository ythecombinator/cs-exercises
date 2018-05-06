const ascii = (str) =>
  String(str)
    .split('')
    .map((char) => String(char.charCodeAt(0)))
    .reduce((current, previous) => current + previous);

const sample = 'b';
const result = ascii(sample);

console.log(result);
