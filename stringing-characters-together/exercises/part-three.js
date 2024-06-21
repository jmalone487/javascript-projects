let language = 'JavaScript';

// 1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
let abbreviation = language.slice(0, 1) + language.slice(4, 5);
console.log(abbreviation); // Prints 'JS'

// 2. Without using slice(), use method chaining to accomplish the same thing
abbreviation = language.charAt(0) + language.charAt(4);
console.log(abbreviation); // Prints 'JS'

// 3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
abbreviation = `${language[0]}${language[4]}`;
console.log(`The abbreviation for '${language}' is '${abbreviation}'.`);
// Prints: The abbreviation for 'JavaScript' is 'JS'.

// 4. Just for fun, try chaining 3 or more methods together, and then print the result
let result = language.toLowerCase().replace('java', 'J').replace('script', 'S').toUpperCase();
console.log(result); // Prints 'JS'


//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let titleCase = notTitleCase.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
console.log(titleCase);

