const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

// const sum = function(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
// 	return sum;
// };

const sum =  (array) => {
  let arraySum = array.reduce((preVal, curVal) =>{
  return preVal + curVal
  }, 0)
  return arraySum;
}

// const multiply = function(arr) {
//   let product = 1;
//   for (let i = 0; i < arr.length; i++) {
//     product *= arr[i];
//   }
//   return product;
// };

const multiply = (array) => {
  let arrayMultiply = array.reduce((preVal, curVal) => {
    return preVal * curVal;
  });
  return arrayMultiply;
}

const power = (base, exponent) => Math.pow(base, exponent);


const factorial = (num) => {
	let total = 1;
  if (num === 0) {
    return 1
  } else {
    for (num; num > 0; num--){
      total *= num;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
