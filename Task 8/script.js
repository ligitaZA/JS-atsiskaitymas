/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  constructor() {}
  sum(a,b) {
    return a + b;
  }
  subtraction(a, b){
    return a - b;
  }
  multiplication(a,b){
    return a * b;
  }
  division(a, b){
    return a / b;
  }
}

const calculate = new Calculator();

console.log(calculate.sum(4, 27)); 
console.log(calculate.subtraction(64, 23));
console.log(calculate.multiplication(22, 12)); 
console.log(calculate.division(500, 45)); 