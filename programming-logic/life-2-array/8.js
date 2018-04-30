const calcBMI = (personData) => personData.weight / Math.pow(personData.height / 100, 2);

const peopleData = [
  {height: 120, weight: 50},
  {height: 45, weight: 40},
  {height: 78, weight: 20},
  {height: 97, weight: 50},
  {height: 195, weight: 78},
  {height: 120, weight: 190},
  {height: 60, weight: 85},
  {height: 120, weight: 90},
];

const result = peopleData.map((person) => calcBMI(person));

console.log(result);
