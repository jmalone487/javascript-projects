//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.
function findMinValue(arr) {
    if (arr.length === 0) return undefined; // Handle empty array case
    let minValue = arr[0]; // Assume the first element is the minimum
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i]; // Update minValue if a smaller value is found
        }
    }
    return minValue;
}

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.
console.log(findMinValue(nums1));
console.log(findMinValue(nums2));
console.log(findMinValue(nums3));

