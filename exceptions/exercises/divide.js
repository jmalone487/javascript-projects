// Write a function called 'divide' that takes two parameters: a numerator and a denominator.
function divide(numerator, denominator) {

    // Your function should return the result of numerator / denominator.
    if (denominator === 0) {

        // However, if the denominator is zero you should throw the error, "Attempted to divide by zero."
        throw new Error('Attempted to divide by zero.');
    }
    // Code your divide function here:
    return numerator / denominator;
}
