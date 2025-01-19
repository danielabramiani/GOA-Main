
// Task 1

// forEach

// Using the forEach method, create a new array where each element is multiplied by 2.
// Output the new array to the console.

let numbers = [2, 5, 8, 10, 12];

let newNumbers = [];

numbers.forEach(curValue => {
    newNumbers.push(curValue * 2);
})

console.log(newNumbers);

// map

// Using the map method, create a new array where all strings are converted to uppercase.

const words = ['apple', 'banana', 'cherry', 'date'];

const upperCaseWords = words.map(curValue => curValue.toUpperCase());

console.log(upperCaseWords);

// filter

// Using the filter method, create a new array that contains only even numbers.

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(curValue => curValue % 2 === 0);

console.log(evenNumbers);

// reduce

// Using the reduce method, calculate the sum of all numbers in the array and output it to the console.

numbers = [1, 3, 5, 7, 9];

const sumOfNumbers = numbers.reduce((acc, curValue) => acc + curValue, 0);

console.log(sumOfNumbers);