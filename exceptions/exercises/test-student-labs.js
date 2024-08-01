function gradeLabs(labs) {
  for (let i = 0; i < labs.length; i++) {
    let lab = labs[i];
    let result;

    try {
      // Attempt to call the runLab function
      result = lab.runLab(3);

      // Check if the result is as expected
      console.log(`${lab.student} code worked: ${result === 27}`);
    } catch (error) {
      // If an error occurs, set result to "Error thrown" and log it
      result = "Error thrown";
      console.log(`${lab.student} code worked: ${result}`);
    }
  }
}

let studentLabs = [
  {
    student: 'Carly',
    runLab: function (num) {
      return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
      return num * num;
    }
  }
];

let studentLabs2 = [
  {
    student: 'Blake',
    myCode: function (num) {
      return Math.pow(num, num);
    }
  },
  {
    student: 'Jessica',
    runLab: function (num) {
      return Math.pow(num, num);
    }
  },
  {
    student: 'Mya',
    runLab: function (num) {
      return num * num;
    }
  }
];

gradeLabs(studentLabs);   // Testing with valid runLab methods
gradeLabs(studentLabs2);  // Testing with missing runLab method

