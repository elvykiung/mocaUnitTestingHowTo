// require operation function
const operations = require('./operation.js');
//require built in node commman line interface
const readline = require('readline');

//use readline to create command line interface
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// initial welcome when run the command line

console.log(`
Calc.js

Welcome to the Node.js Calculator app! 
Version: 1.0.0.

Usage: The user will be prompted for two numbers, 
then asked to select their operation of choice.
`);

//take user input
r1.question('Enter the first number: ', x => {
  r1.question('Enter the second number: ', y => {
    r1.question(
      `
      [1] Additions (+)
      [2] Subtraction (-)
      [3] Multiplication (*)
      [4] Division (/)
      
      Enter your choice: `,
      choice => {
        //
        if (!operations.validateNumbers(x, y)) {
          console.log('Only numbers are allowed! Please restart the program.');
        } else {
          switch (choice) {
            case '1':
              console.log(`The sum of ${x} and ${y} is ${operations.add(x, y)}.`);
              break;
            case '2':
              console.log(`The difference of ${x} and ${y} is ${operations.subtract(x, y)}.`);
              break;
            case '3':
              console.log(`The product of ${x} and ${y} is ${operations.multiply(x, y)}.`);
              break;
            case '4':
              console.log(`The quotient of ${x} and ${y} is ${operations.divide(x, y)}.`);
              break;
            default:
              console.log('Please restart the program and select a number between 1 and 4.');
              break;
          }
        }
        // exits the command line
        r1.close();
      }
    );
  });
});
