const palindromes = function (str) {
 let noSpaceAndChars = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
 let newString = noSpaceAndChars.toLowerCase();
 let reverseStr = newString.split("").reverse().join("");
 
 let isPalindrome = false;
 if (reverseStr === newString) {
      isPalindrome = true;
      return isPalindrome;
 }else{
     return isPalindrome
 }
};

// Do not edit below this line
module.exports = palindromes;
