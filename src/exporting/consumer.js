// Destructures the exported object to functions. Use ":" to rename the functions
const { add, multiply: multiplyTogether } = require("./module_1.js")

// "module_2" exports a single function so we can assign it directly to a variable named whatever we want
const subtract = require("./module_2.js")

function do_some_maths() {
  console.log(add(1, 4))
  console.log(multiplyTogether(5, 6))
  console.log(subtract(20, 13))
}

do_some_maths()
