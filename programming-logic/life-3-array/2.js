const reverse = (arr) => arr.map((element, index, array) => array[array.length - 1 - index]);

const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = reverse(sample);

console.log(result);
