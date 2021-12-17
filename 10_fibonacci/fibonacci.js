const fibonacci = function(num) {
    let fibArr = [];
    let fibOne = 0;
    let fibTwo = 1;
    let fibEnd = 0;
    let fibNum = parseInt(num);
    
    if (fibNum < 0) {
        return "OOPS"
    } else {
        for (let i = 0; i <= num; i++) {
            fibEnd = fibOne + fibTwo;
            fibOne = fibTwo;
            fibTwo = fibEnd;
            
    
            fibArr.push(fibOne);
        }
        return fibArr[fibNum-1];
    }

};

// Do not edit below this line
module.exports = fibonacci;
