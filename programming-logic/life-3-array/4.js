const calc = (annualIncome, dependents) => {
  let result;
  switch (true) {
    case annualIncome < 22847.76:
      result = 0;
      break;
    case annualIncome > 22847.77 && annualIncome < 33919.8:
      result = annualIncome * 0.075 - 1713.58;
      break;
    case annualIncome > 33919.81 && annualIncome < 45012.6:
      result = annualIncome * 0.15 - 4257.57;
      break;
    case annualIncome > 45012.61 && annualIncome < 55976.16:
      result = annualIncome * 0.225 - 7633.51;
      break;
    case annualIncome > 55976.16:
      result = annualIncome * 0.275 - 10432.32;
      break;
  }
  return result.toFixed(2);
};

const result = calc(30000);

console.log(`O valor a ser pago é R$${result}.`);
