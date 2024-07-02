let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};


// After you have created the other object literals, add the astronautID property to each one.
superChimpOne.astronautID = 1;
salamander.astronautID = 2;
superChimpTwo.astronautID = 3;
dog.astronautID = 4;
waterBear.astronautID = 5;


// Add a move method to each animal object
superChimpOne.move = function () { return Math.floor(Math.random() * 11); };
salamander.move = function () { return Math.floor(Math.random() * 11); };
superChimpTwo.move = function () { return Math.floor(Math.random() * 11); };
dog.move = function () { return Math.floor(Math.random() * 11); };
waterBear.move = function () { return Math.floor(Math.random() * 11); };


// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, dog, waterBear];


// Print out the relevant information about each animal.
function crewReports(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
}

crew.forEach(animal => {
   console.log(crewReports(animal));
});


// Start an animal race!
function fitnessTest(candidates) {
   let results = [];

   for (let i = 0; i < candidates.length; i++) {
      let numSteps = 0;
      let turns = 0;

      while (numSteps < 20) {
         numSteps += candidates[i].move();
         turns++;
      }

      results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }

   return results;
}

let testResults = fitnessTest(crew);
for (let result of testResults) {
   console.log(result);
}

