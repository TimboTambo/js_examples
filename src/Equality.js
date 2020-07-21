console.log("Equality (==)");

console.log(1 == 1);
// expected output: true

console.log('hello' == 'hello');
// expected output: true

console.log('1' ==  1);
// expected output: true

console.log(0 == false);
// expected output: true


console.log("Strict equality (===)");

console.log(1 === 1);
// expected output: true

console.log('hello' === 'hello');
// expected output: true

console.log('1' ===  1);
// expected output: false

console.log(0 === false);
// expected output: false
console.log("Examples: ");

const readline = require('readline');
const rl = readline.createInterface({
  input : process.stdin, 
  output : process.stdout
});


let num1 = Math.floor((Math.random() *10) + 1);
let num2 = Math.floor((Math.random() *10) + 1);
let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}?\n`,
(userInput)=>{
  if(userInput.trim() == answer){
      console.log("Correct answer", answer)
    rl.close();
  }
  else{
    rl.setPrompt("Incorrect response please try again\n");
    rl.prompt();
    rl.on("line",(userInput)=>{
      if(userInput.trim() == answer)
      rl.close();
      else{
        rl.setPrompt(`Your answer of ${userInput} is incorrct\n`)
        rl.prompt();
      }
    })
  }
//   console.log(userInput);
});

rl.on("close",()=>{
});


