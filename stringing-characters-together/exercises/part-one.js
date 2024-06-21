let num = 123.45;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
let numString = String(num);

if (String(num).includes('.')) {
    console.log(String(num).length - 1);

    console.log(numString.length - 1);

    //Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
} else {
    console.log(String(num).length);
}
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
