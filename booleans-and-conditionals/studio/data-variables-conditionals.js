// Initializing variables
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

// Conditional statements to check if the shuttle is ready for lift-off
let conditionsMet = true;

if (astronautCount > 7) {
    console.log("Too many astronauts on board. Abort mission.");
    conditionsMet = false;
}

if (astronautStatus !== "ready") {
    console.log("Astronauts are not ready. Abort mission.");
    conditionsMet = false;
}

if (totalMassKg >= maximumMassLimit) {
    console.log("Total mass exceeds the maximum limit. Abort mission.");
    conditionsMet = false;
}

if (fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp) {
    console.log("Fuel temperature is out of the safe range. Abort mission.");
    conditionsMet = false;
}

if (fuelLevel !== "100%") {
    console.log("Fuel level is not at 100%. Abort mission.");
    conditionsMet = false;
}

if (weatherStatus !== "clear") {
    console.log("Weather is not clear. Abort mission.");
    conditionsMet = false;
}

// Verifying if the shuttle is cleared for lift-off
if (conditionsMet) {
    console.log(`Shuttle is ready for lift-off!
Date: ${date}
Time: ${time}
Astronaut Count: ${astronautCount}
Crew Mass: ${crewMassKg} kg
Fuel Mass: ${fuelMassKg} kg
Shuttle Mass: ${shuttleMassKg} kg
Total Mass: ${totalMassKg} kg
Fuel Temperature: ${fuelTempCelsius}°C
Weather Status: ${weatherStatus}

Have a safe trip astronauts!`);
} else {
    console.log("Launch aborted. Shuttle is not ready for lift-off.");
}
