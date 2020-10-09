// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

//Below is my initial solution, it does work however it is very inefficient and slow when used on larger numbers
//I have left a console.log so that you can see why it is so inefficient
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function largestPrimeInefficient(num) {
  for (let k = num - 1; k >= 2; k--) {
    console.log("checking if " + k + " is prime");
    if (num % k === 0) {
      if (isPrime(k)) {
        return k;
      }
    }
  }
  return 0;
}

//Here is a version i found on stackOverflow that is much more efficient
function largestPrimeEfficient(num) {
  let factors = [];
  let divisor = 2;

  while (num >= 2) {
    if (num % divisor == 0) {
      factors.push(divisor);
      num = num / divisor;
    } else {
      divisor++;
    }
  }
  return factors[factors.length - 1];
}

console.log(largestPrimeEfficient(600851475143));
// console.log(largestPrimeInefficient(600851475143));
