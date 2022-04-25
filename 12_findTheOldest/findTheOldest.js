const findTheOldest = (people) => {
    const currentYear = new Date().getFullYear();
    people.forEach(person => {
        if (!('yearOfDeath' in  person)) {
            person.age = currentYear - person.yearOfBirth;
        }else{
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
    });
    const oldest = people.reduce((max, curr) => {
        if ((curr.age) > (max.age)) {
            max = curr;
        }
        return max;
    });
    console.table(people);
    return oldest;
}
// Do not edit below this line
module.exports = findTheOldest;
