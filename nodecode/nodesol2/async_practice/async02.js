function factorial(n) {
    return new Promise((resolve, reject) => {
      if (n === 0 || n === 1) {
        resolve(1);
      } else {
        factorial(n - 1)
          .then(result => resolve(n * result))
          .catch(reject);
      }
    });
  }
  
  const num = 5;
  factorial(num)
    .then(result => console.log(`Factorial of ${num} is ${result}`))
    .catch(error => console.error('Error calculating factorial:', error));
  