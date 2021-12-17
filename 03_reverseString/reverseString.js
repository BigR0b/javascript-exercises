const reverseString = function(str) {
    let newString = "";
    let char = str.length - 1;

    while(char >= 0) {
        newString += str[char];
        char--
    }
    return newString
};

// Do not edit below this line
module.exports = reverseString;
