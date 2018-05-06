const unique = (array) => array.filter((item, index, arr) => arr.indexOf(item) === index);

const hasDuplicates = (array) => array.length !== unique(array).length;

const arr = [12, 12, 10, 9];

console.log(hasDuplicates(arr));
