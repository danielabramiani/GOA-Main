
// forEach


let numbers = [2, 5, 8, 10, 12];

let newNumbers = [];

numbers.forEach(curValue => {
    newNumbers.push(curValue * 2);
})

console.log(newNumbers);

// map

const words = ['apple', 'banana', 'khinkali', 'aa'];

const upperCaseWords = words.map(curValue => curValue.toUpperCase());

console.log(upperCaseWords);

// filter

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(curValue => curValue % 2 === 0);

console.log(evenNumbers);

// reduce

numbers = [1, 4, 4, 7, 9];

const sumOfNumbers = numbers.reduce((acc, curValue) => acc + curValue, 0);

console.log(sumOfNumbers);