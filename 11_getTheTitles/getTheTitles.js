const getTheTitles = (arr) => {
    // let bookTitles = [];

    // for (let i = 0; i < arr.length; i++) {
    //     bookTitles.push(arr[i].title);
    // }
    // return bookTitles;
    let bookTitles = arr.map((item) => item.title)
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
