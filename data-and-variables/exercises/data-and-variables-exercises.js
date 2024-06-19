// Declaring and assigning variables
let spaceShuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
let milesPerKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttleName);  // string
console.log(typeof shuttleSpeedMph);   // number
console.log(typeof distanceToMarsKm);  // number
console.log(typeof distanceToMoonKm);  // number
console.log(typeof milesPerKilometer); // number

// Calculate miles to Mars
let distanceToMarsMiles = distanceToMarsKm * milesPerKilometer;
console.log("Distance to Mars (miles):", distanceToMarsMiles);

// Calculate hours to Mars
let hoursToMars = distanceToMarsMiles / shuttleSpeedMph;
console.log("Hours to Mars:", hoursToMars);

// Calculate days to Mars
let daysToMars = hoursToMars / 24;
console.log("Days to Mars:", daysToMars);

// Print the results of the space mission calculations below
console.log(spaceShuttleName + " will take " + daysToMars.toFixed(2) + " days to reach Mars.");

// Calculate a trip to the moon below
let distanceToMoonMiles = distanceToMoonKm * milesPerKilometer;
console.log("Distance to the Moon (miles):", distanceToMoonMiles);

// Calculate hours to the Moon
let hoursToMoon = distanceToMoonMiles / shuttleSpeedMph;
console.log("Hours to the Moon:", hoursToMoon);

// Calculate days to the Moon
let daysToMoon = hoursToMoon / 24;
console.log("Days to the Moon:", daysToMoon);

// Print the results of the trip to the moon below
console.log(spaceShuttleName + " will take " + daysToMoon.toFixed(2) + " days to reach the Moon.");