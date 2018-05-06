const fibonacci = (x) => (x > 2 ? fibonacci(x - 1) + fibonacci(x - 2) : 1);

const example = 15;

console.log(`O ${example} elemento da sequência de Fibonacci é: ${fibonacci(example)}.`);
