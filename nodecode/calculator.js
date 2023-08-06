const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function dummyCalculator() {
  rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
      rl.question('Choose an operation (+, -, *, /): ', (operator) => {
        const num1Parsed = parseFloat(num1);
        const num2Parsed = parseFloat(num2);

        if (isNaN(num1Parsed) || isNaN(num2Parsed)) {
          console.log('Invalid input. Please enter valid numbers.');
          rl.close();
          return;
        }

        let result;
        switch (operator) {
          case '+':
            result = num1Parsed + num2Parsed;
            break;
          case '-':
            result = num1Parsed - num2Parsed;
            break;
          case '*':
            result = num1Parsed * num2Parsed;
            break;
          case '/':
            if (num2Parsed === 0) {
              console.log('Cannot divide by zero.');
              rl.close();
              return;
            }
            result = num1Parsed / num2Parsed;
            break;
          default:
            console.log('Invalid operator. Please choose +, -, *, or /.');
            rl.close();
            return;
        }

        console.log(`Result: ${result}`);
        rl.close();
      });
    });
  });
}

dummyCalculator();
