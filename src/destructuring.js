function destructureArrays() {
  let animalNoises = ["oink", "moo", "quack", "squeek"]
  let [pig, cow, duck, hamster] = animalNoises
  console.log(pig)
  console.log(cow)

  let turtles = ["donatello", "michelangelo", "raphael", "leonardo"]
  let [firstTurtle, secondTurtle] = turtles
  console.log(firstTurtle)
  console.log(secondTurtle)
}

destructureArrays()

function destructureObjects() {
  let coins = {
    one: "one pence",
    five: "five pence",
    twenty: "twenty pence",
    fifty: "fifty pence",
    hundred: "one pound",
  }
  let { one, fifty, hundred } = coins
  console.log(one)
  console.log(fifty)
  console.log(hundred)

  let { five: fivePence, twenty: twentyPence } = coins
  console.log(fivePence)
  console.log(twentyPence)
}

destructureObjects()
