// Define the selectionSortRecursive function
function selectionSortRecursive(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }

    [arr[0], arr[minIndex]] = [arr[minIndex], arr[0]];

    return [arr[0]].concat(selectionSortRecursive(arr.slice(1)));
}

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
nums1.sort((a, b) => a - b);
nums2.sort((a, b) => a - b);
nums3.sort((a, b) => a - b);

console.log("Increasing Order:");
console.log(nums1);
console.log(nums2);
console.log(nums3);

//Sort each array in descending order.
nums1.sort((a, b) => b - a);
nums2.sort((a, b) => b - a);
nums3.sort((a, b) => b - a);

console.log("Decreasing Order:");
console.log(nums1);
console.log(nums2);
console.log(nums3);

console.log("Altered Arrays:");
console.log(nums1);
console.log(nums2);
console.log(nums3);

let originalNums1 = [5, 10, 2, 42];
let sortedNums1 = selectionSortRecursive(originalNums1.slice());
console.log("Original Array:", originalNums1);
console.log("Sorted Array:", sortedNums1);


