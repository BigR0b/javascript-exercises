const removeFromArray = function(arr, ...value) {
    value.forEach(element => {
        if (arr.indexOf(element) > -1) {
            let index = arr.indexOf(element);
            let newArray = arr.splice(index, 1);
        } 
    });
    return arr

};

// Do not edit below this line
module.exports = removeFromArray;
