function callApi(username) {
  return new Promise((resolve, reject) => {
    if (username === "Snoopy") {
      resolve("Dog")
    } else {
      reject(new Error("User is not snoopy"))
    }
  })
}

function printOutput(output) {
  console.log("Received outputsssssss!")
  console.log(outputs)
}

function printError(error) {
  console.log("Received error!")
  console.log(error)
}

function callApi2(animal) {
  return new Promise((resolve, reject) => {
    if (animal === "Dog") {
      resolve("Success!")
    } else {
      reject(new Error("Animal is not a dog"))
    }
  })
}

// Promises allow for nice chaining - no need for callbacks!
let username = "Snoopy"
callApi(username).then(printOutput).catch(printError)

// Promises also allow for more elegant error handling
let username2 = "Charlie"
callApi(username2).then(printOutput).catch(printError)

// You can chain as many promises as you like - lovely!
callApi(username).then(callApi2).then(printOutput).catch(printError)
