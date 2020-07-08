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

// The order of console statements might not be what you expect
doThing1(function () {
  console.log("Executing anonymous callback")
})
doThing2()

// Passing an anonymous function is fine, but passing a named function makes it easier to read
function aBetterWayToPassACallback() {
  console.log("Executing named function callback")
}

doThing1(aBetterWayToPassACallback)
