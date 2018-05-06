const factorial = (x, acum = 1) => (x ? factorial(x - 1, x * acum) : acum);

const example = 5;

console.log(`O fatorial de ${example} é: ${factorial(example)}.`);
