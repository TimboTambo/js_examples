//Closures is a way to  invoke a function. Thge the function is invoked a new scope is create for that call.

function buildName(name) {
    var greeting = "Hello, " + name + "!"
    var sayName = function () {
      var welcome = greeting + " Welcome!"
      console.log(greeting)
    }
    return sayName
  }
  
  var sayMyName = buildName("Simone")
  sayMyName() // Hello, Simone. Welcome!
  sayMyName() // Hello, Simone. Welcome!
  sayMyName() // Hello, Simone. Welcome!
  
  function buildCounter(i) {
    var contor = i
    var displayCounter = function () {
      console.log(contor++)
      contor++
    }
    return displayCounter
  }
  
  var myCounter = buildCounter(1)
  myCounter() // 1
  myCounter() // 3
  myCounter() // 5
  
  // new closure - new outer scope - new contor variable
  var myOtherCounter = buildCounter(10)
  myOtherCounter() // 10
  myOtherCounter() // 12
  
  // myContor was not affected
  myCounter() // 7


