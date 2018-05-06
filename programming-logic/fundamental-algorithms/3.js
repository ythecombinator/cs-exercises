const numbers = [10, 5, 3, 5, 60, 90, 50];

const sum = (array) => array.reduce((a, b) => a + b, 0);

const result = sum(numbers);

console.log(`A soma é: ${result}.`);
