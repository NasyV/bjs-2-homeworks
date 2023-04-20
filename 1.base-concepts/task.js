"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;
  if (d < 0) {
    arr;
  } else if (d === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
    console.log(arr)
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = (percent/100)/12; 
  let s = amount - contribution; 
  let paymentOnMonth = s * (p + (p / (((1 + p) ** countMonths) - 1))); 
  let totalDebt = (countMonths * paymentOnMonth).toFixed(2); 
  return Number(totalDebt);
}
calculateTotalMortgage(10, 0, 20000, 24);