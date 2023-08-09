const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function getUserInput(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function calculator() {
  console.log('Welcome to the Node.js Calculator!');
  while (true) {
    console.log('Select operation:');
    console.log('1. Addition');
    console.log('2. Subtraction');
    console.log('3. Multiplication');
    console.log('4. Division');
    console.log('5. Exit');
    
    const choice = await getUserInput('Enter your choice (1-5): ');
    
    if (choice === '5') {
      console.log('Exiting calculator...');
      break;
    }
    
    const num1 = parseFloat(await getUserInput('Enter the first number: '));
    const num2 = parseFloat(await getUserInput('Enter the second number: '));
    
    let result;
    
    switch (choice) {
      case '1':
        result = num1 + num2;
        break;
      case '2':
        result = num1 - num2;
        break;
      case '3':
        result = num1 * num2;
        break;
      case '4':
        if (num2 === 0) {
          console.log('Error: Division by zero');
          continue;
        }
        result = num1 / num2;
        break;
      default:
        console.log('Invalid choice');
        continue;
    }
    
    console.log(`Result: ${result}`);
  }
  
  rl.close();
}

calculator();
