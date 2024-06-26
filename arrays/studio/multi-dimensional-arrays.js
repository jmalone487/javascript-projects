let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinet1 = food.split(',').sort();
let cabinet2 = equipment.split(',').sort();
let cabinet3 = pets.split(',').sort();
let cabinet4 = sleepAids.split(',').sort();


//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [cabinet1, cabinet2, cabinet3, cabinet4];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let cabinetIndex = input.question("Select a cabinet (0-3): ");
cabinetIndex = parseInt(cabinetIndex, 10);


//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (isNaN(cabinetIndex) || cabinetIndex < 0 || cabinetIndex >= cargoHold.length) {
    console.log("Invalid cabinet number.");
} else {
    console.log(`Contents of cabinet ${cabinetIndex}: ${cargoHold[cabinetIndex].join(', ')}`);
}


//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let item = input.question("Enter an item to check: ");

if (isNaN(cabinetIndex) || cabinetIndex < 0 || cabinetIndex >= cargoHold.length) {
    console.log("Invalid cabinet number.");
} else {
    if (cargoHold[cabinetIndex].includes(item)) {
        console.log(`Cabinet ${cabinetIndex} DOES contain ${item}.`);
    } else {
        console.log(`Cabinet ${cabinetIndex} DOES NOT contain ${item}.`);
    }
}