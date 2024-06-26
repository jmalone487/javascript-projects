let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
const combinedCabinet = holdCabinet1.concat(holdCabinet2);
console.log(combinedCabinet);
console.log(holdCabinet1);

//2) Print a slice of two elements from each array. Does slice alter the original arrays?
const slice1 = holdCabinet1.slice(0, 2);
const slice2 = holdCabinet2.slice(1, 3);
console.log('Slice of holdCabinet1:', slice1);
console.log('Slice of holdCabinet2:', slice2);
console.log('Original holdCabinet1 after slice:', holdCabinet1);
console.log('Original holdCabinet2 after slice:', holdCabinet2);

//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
holdCabinet1.reverse();
console.log(holdCabinet1);

holdCabinet2.sort();
console.log(holdCabinet2);
