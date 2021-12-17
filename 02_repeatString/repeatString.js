const repeatString = function(str, num) {
    let echoNum = "";
    let i = 0;
    
    if (num < 0) {
        return "ERROR"
    } else {
        while (i < num) {
            echoNum += str
            i++
        }
        return echoNum;
    }

};

// Do not edit below this line
module.exports = repeatString;
