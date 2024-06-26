const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
function modifyString(str, num) {
    if (num > str.length) {
        console.log(`The number of letters to move exceeds the length of the word. Defaulting to 3 characters.`);
        num = 3;
    }

    let partToMove = str.slice(0, num);
    let remainingPart = str.slice(num);
    let modifiedStr = remainingPart + partToMove;

    return modifiedStr;
}

//Use a template literal to print the original and modified string in a descriptive phrase.
let initialNumToMove = 3;
let initialModifiedString = modifyString(str, initialNumToMove);
console.log(`Original string: ${str}`);
console.log(`Modified string: ${initialModifiedString}`);


//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("Enter the number of letters to relocate: ");
let numToMove = parseInt(userInput, 10);


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (isNaN(numToMove) || numToMove <= 0) {
    console.log(`Invalid input. Defaulting to 3 characters.`);
    numToMove = 3;
}

let modifiedString = modifyString(str, numToMove);



console.log(`Original string: ${str}`);
if (numToMove === 3) {
    console.log(`Invalid input provided. The string was modified by moving 3 characters to the end.`);
} else {
    console.log(`The string was modified by moving ${numToMove} characters to the end.`);
}
console.log(`Modified string: ${modifiedString}`);
