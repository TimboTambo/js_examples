function doThing1(callback) {
  console.log("Executing function 1")
  // Simulating some delay like calling an API or getting user input
  setTimeout(function () {
    callback()
  }, 500)
}

function doThing2() {
  console.log("Executing function 2")
}

doThing1(function () {
  console.log("Executing callback")
})

doThing2()
