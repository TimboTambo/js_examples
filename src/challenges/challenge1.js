// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function multiplesOf(limitNumber, multipleNumber, list) {
  let result = 0

  let i = 1
  while (result < limitNumber) {
    result = multipleNumber * i
    console.log(result, i)
    if (result < limitNumber) {
      if (!list.includes(result)) {
        list.push(result)
      }
    }
    i++
  }
  return list
}

let numbersList = []

// numbersList = multiplesOf(1000, 5, numbersList)
// numbersList = multiplesOf(1000, 3, numbersList)
// console.log(numbersList.reduce((a, b) => a + b, 0))

function multiplesOfAlternative(limitNumber, multiples) {
  let sum = 0
  for (let i = 0; i < limitNumber; i++) {
    if (i % multiple === 0 || i % multiple2 === 0) {
      sum += i
    }
  }
  return sum
}

console.log(multiplesOfAlternative(1000, 5, 3))
