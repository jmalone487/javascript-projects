// Write a function called 'divide' that takes two parameters: a numerator and a denominator.
function divide(numerator, denominator) {
    // Check if the denominator is zero
    if (denominator === 0) {
        // Throw an error with the specified message if the denominator is zero
        throw new Error('Attempted to divide by zero.');
    }

    // Return the result of the division
    return numerator / denominator;
}
