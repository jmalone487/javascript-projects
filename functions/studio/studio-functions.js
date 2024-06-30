//We want to COMPLETELY reverse an array by flipping the order of the entries AND flipping the order of characters in each element.

// Function to reverse characters in a string or digits in a number
function reverseCharacters(input) {
    if (typeof input === 'string') {
        return input.split('').reverse().join('');
    } else if (typeof input === 'number') {
        return parseInt(input.toString().split('').reverse().join(''), 10);
    }
    return input;
}

// Function to reverse the order of elements in an array and their characters
function reverseArrayElements(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(reverseCharacters(arr[i]));
    }
    return reversedArray;
}

// Testing reverseCharacters function
let myVariableName = 'apple';
console.log(reverseCharacters(myVariableName)); // Output: elppa

console.log(reverseCharacters('LC101')); // Output: 101CL
console.log(reverseCharacters('Capitalized Letters')); // Output: sretteL dezilatipaC
console.log(reverseCharacters('I love the smell of code in the morning.')); // Output: .gninrom eht ni edoc fo llems eht evol I
console.log(reverseCharacters(1234)); // Output: 4321
console.log(reverseCharacters(8675309)); // Output: 9035768
console.log(reverseCharacters('radar')); // Output: radar

// Testing reverseArrayElements function
let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];

console.log(reverseArrayElements(arrayTest1)); // Output: ['sdroW dezilatipaC', 'otatop', 'elppa']
console.log(reverseArrayElements(arrayTest2)); // Output: [9035768, 8611, 24, 7988, 321]
console.log(reverseArrayElements(arrayTest3)); // Output: ['egnaro', 321, 'dlrow', 'olleh']

// Bonus: Function to create a fun phrase
function funPhrase(str) {
    let modifiedStr;
    if (str.length <= 3) {
        modifiedStr = str.slice(-1);
    } else {
        modifiedStr = str.slice(0, 3);
    }
    return `We put the '${modifiedStr}' in '${str}'.`;
}

// Testing funPhrase function
let str = 'Functions rock!';
console.log(funPhrase(str)); // Output: We put the 'Fun' in 'Functions rock!'

// Bonus: Function to calculate the area of a rectangle
function calculateArea(length, width = length) {
    return length * width;
}

// Testing calculateArea function
let length1 = 2, width1 = 4;
let length2 = 14, width2 = 7;
let length3 = 20;

console.log(`The area is ${calculateArea(length1, width1)} cm^2.`); // Output: The area is 8 cm^2.
console.log(`The area is ${calculateArea(length2, width2)} cm^2.`); // Output: The area is 98 cm^2.
console.log(`The area is ${calculateArea(length3)} cm^2.`); // Output: The area is 400 cm^2.
