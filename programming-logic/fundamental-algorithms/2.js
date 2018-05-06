const generateList = () => Math.floor(Math.random() * (100 - 0 + 1) + 0);

const grades = Array.apply(null, {length: 100}).map(Function.call, generateList);

const approved = grades.filter((grade) => grade >= 50);

const result = approved.length;

console.log(`Passaram: ${result} alunos.`);
