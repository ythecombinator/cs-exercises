const splitName = (name) => name.split(' ');
const getFirstLetters = (names) => names.map((name) => name[0]);

const sample = 'Matheus Albuquerque Brasil';
const splitSample = splitName(sample);
const result = getFirstLetters(splitSample);

console.log(result);
