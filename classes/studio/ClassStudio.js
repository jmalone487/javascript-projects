//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

// Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores.

class CrewCandidate {
    // Constructor to initialize the class properties
    constructor(name, mass, scores) {
        this.name = name;          // The candidate's name
        this.mass = mass;          // The candidate's mass
        this.scores = scores;      // The array of test scores
    }

    // Method to add a new score
    addScore(newScore) {
        if (newScore >= 0 && newScore <= 100) { // Ensure the score is between 0 and 100
            this.scores.push(newScore);
        } else {
            console.log('Score must be between 0 and 100.');
        }
    }

    // Method to calculate the average score
    average() {
        const total = this.scores.reduce((acc, score) => acc + score, 0);
        return Math.round((total / this.scores.length) * 10) / 10; // Round to 1 decimal place
    }

    // Method to determine the candidate's status
    status() {
        const avg = this.average();
        if (avg >= 90) return 'Accepted';
        if (avg >= 80) return 'Reserve';
        if (avg >= 70) return 'Probationary';
        return 'Rejected';
    }
}

// Create objects for the candidates
let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

// Log each object to verify correctness
console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);

// Test the addScore method
bubbaBear.addScore(83);
console.log(bubbaBear.scores); // Verify the new score

// Test the average and status methods
console.log(`Merry Maltese average score: ${merryMaltese.average()}`);
console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}.`);

console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`);
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`);

// Boost Glad Gator’s status
function boostStatus(candidate, targetStatus) {
    let count = 0;
    while (candidate.status() !== targetStatus) {
        candidate.addScore(100); // Add a maximum score of 100
        count++;
        if (candidate.average() > 100) break; // To prevent exceeding max score
    }
    return count;
}

// Calculate tests needed for Glad Gator to reach Reserve and Accepted status
let testsToReserve = boostStatus(gladGator, 'Reserve');
console.log(`Tests needed to reach Reserve status: ${testsToReserve}`);

gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]); // Reset scores
let testsToAccepted = boostStatus(gladGator, 'Accepted');
console.log(`Tests needed to reach Accepted status: ${testsToAccepted}`);

