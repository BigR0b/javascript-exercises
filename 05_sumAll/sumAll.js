const sumAll = function(num1, num2) {
    let startNum = Math.min(num1, num2);
    let endNum = Math.max(num1, num2);
    let total = 0;
    if ((startNum < 0) || (typeof(num1) !== "number") || (typeof(num2) !== "number")) {
        return "ERROR";
    }else{
        while (startNum <= endNum) {
            total += startNum;
            startNum++;        
        }
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
