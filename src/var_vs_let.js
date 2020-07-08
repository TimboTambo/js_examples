// BLOCK SCOPE
function blockScopeVar() {
  console.log("BLOCK SCOPE WITH VAR")
  var funcs = []
  for (var i = 0; i < 3; i++) {
    funcs[i] = function () {
      console.log("My value: " + i)
    }
  }
  for (var j = 0; j < 3; j++) {
    funcs[j]()
  }
}
blockScopeVar()

function blockScopeLet() {
  console.log("BLOCK SCOPE WITH LET")
  var funcs = []
  for (let i = 0; i < 3; i++) {
    funcs[i] = function () {
      console.log("My value: " + i)
    }
  }
  for (var j = 0; j < 3; j++) {
    funcs[j]()
  }
}
blockScopeLet()

// HOISTING
function hoisingWithVar() {
  console.log("HOISTING WITH VAR")
  console.log(foo) // undefined
  var foo = "Foo"
  console.log(foo) // Foo
}
hoisingWithVar()

function hoisingWithLet() {
  console.log("HOISTING WITH LET")
  // console.log(foo) // undefined
  let foo = "Foo"
  console.log(foo) // Foo
}
hoisingWithLet()

// REDECLARATION
function redeclarationVar() {
  console.log("REDECLARATION WITH VAR")
  var foo = "Foo"
  var foo = "Bar"
  console.log(foo)
}
redeclarationVar()

function redeclarationLet() {
  console.log("REDECLARATION WITH LET")
  let foo = "Foo"
  // let foo = "Bar"
  console.log(foo)
}
redeclarationLet()
