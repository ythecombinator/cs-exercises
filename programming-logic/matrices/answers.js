const {Matrix} = require('./base');

// 1

const matrix1 = new Matrix(3, 3, (i, j) => i + j);

console.log('\n1)', matrix1.data);

// 3

const matrix2 = new Matrix(4, 4, (i, j) => i + j);

const matrix3 = new Matrix(4, 4, (i, j) => 5 * i + 2 * j);

const sum1 = matrix2.add(matrix3);

console.log('\n3)', sum1.data);

// 4

const product1 = matrix2.multiply(matrix3);

console.log('\n4)', product1.data);

// 5

const matrix4 = new Matrix(4, 3, (i, j) => i + j);

const matrix5 = new Matrix(3, 5, (i, j) => 7 * i + 2 * j);

const product2 = matrix4.multiply(matrix5);

console.log('\n5)', product2.data);

// 6

console.log('\n6)', sum1.data);
