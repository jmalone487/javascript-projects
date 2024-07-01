// Function to find the minimum value in an array
function findMinValue(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Function to sort an array using selection sort (recursive approach)

function selectionSortRecursive(arr) {

  if (arr.length === 0) {
    return [];
  }

  // Find the minimum value in the array
  let minValue = findMinValue(arr);

  // Remove the minimum value from the old array
  arr.splice(arr.indexOf(minValue), 1);

  // Recursively sort the remaining array and add the minimum value to the front
  return [minValue].concat(selectionSortRecursive(arr));
}

// Sample arrays for testing
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

// Using the function to sort the sample arrays and print the results
console.log(selectionSortRecursive(nums1));
console.log(selectionSortRecursive(nums2));
console.log(selectionSortRecursive(nums3));
