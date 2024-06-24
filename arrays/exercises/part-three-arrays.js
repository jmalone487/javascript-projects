let cargoHold = [1138, 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether', '20 meters'];

// 1. Insert 'keys' at index 3
cargoHold.splice(3, 0, 'keys');
console.log(cargoHold); // Prints: [1138, 'space suits', 'parrot', 'keys', 'instruction manual', 'meal packs', 'space tether', '20 meters']

// 2. Remove 'instruction manual'
let index = cargoHold.indexOf('instruction manual');
if (index !== -1) {
    cargoHold.splice(index, 1);
}
console.log(cargoHold); // Prints: [1138, 'space suits', 'parrot', 'keys', 'meal packs', 'space tether', '20 meters']

// 3. Replace elements at indexes 2 - 4 with 'cat', 'fob', and 'string cheese'
cargoHold.splice(2, 3, 'cat', 'fob', 'string cheese');
console.log(cargoHold); // Prints: [1138, 'space suits', 'cat', 'fob', 'string cheese', 'space tether', '20 meters']
