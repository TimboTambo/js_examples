// var is the old way and caused many issues and traps for developers
// let is the new way and behaves much more predictably!
// See below for examples

// BLOCK SCOPE
// var is scoped to a function
// let is scoped to a code block ({})
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
// var declarations are "hoisted" to the top of a function block, so can be referenced before they are declared
// let declarations are not hoisted, so trying to reference them before they are declared in code causes an error
function hoisingWithVar() {
  console.log("HOISTING WITH VAR")
  console.log(foo) // undefined
  var foo = "Foo"
  console.log(foo) // Foo
}
hoisingWithVar()

function hoisingWithLet() {
  console.log("HOISTING WITH LET")
  // Uncomment the line below to generate an error
  // console.log(foo) // undefined
  let foo = "Foo"
  console.log(foo) // Foo
}
hoisingWithLet()

// REDECLARATION
// var can be re-declared without any issues
// let cannot be re-declared - trying to throws an error
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
  // Uncomment the line below to generate an error
  // let foo = "Bar"
  console.log(foo)
}
redeclarationLet()
