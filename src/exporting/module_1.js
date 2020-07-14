function addNumbers(a, b) {
  return a + b
}

function multiplyNumbers(a, b) {
  return a * b
}

// Exports an object, containing both these functions
// { add: addNumbers, multiply: multiplyNumbers }
exports.add = addNumbers
exports.multiply = multiplyNumbers
