const findTheOldest = function (people) {
    people.sort((a,b) => {
        (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? 1 : -1
    })
}
// Do not edit below this line
module.exports = findTheOldest;
