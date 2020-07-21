//Creating a car class
class car {
  constructor(manufacturer, model, year, type, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.type = type;
    this.price = price;
  }

  toString() {
    return `
      Manufacturer: ${this.manufacturer}
      Model: ${this.model}
      Year: ${this.year}
      Type: ${this.type}
      Price: ${this.price}
      `;
  }
}

//Creating new cars
let bmwM5 = new car("BMW", "M5", "2020", "Sedan", "80,000");
let bmwM4 = new car("BMW", "M4", "2019", "Coupe", "50,000");

let cars = [bmwM5, bmwM4];

//Creating a car object via loop
function createCarObjectLoop(cars) {
  let carsObject = {};
  for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    carsObject[car.model] = car;
  }
  return carObject;
}

//Creating a car object manually
function createCarObjectManual(cars) {
  let carsObject = {};

  carsObject[cars[0].model] = cars[0];
  carsObject[cars[1].model] = cars[1];

  return carObject;
}

//creating two objects from the two methods (these should be exactly the same)
let carsObjectLoop = createCarObjectLoop(cars);
let carsObjectManual = createCarObjectManual(cars);

//searching the objects
console.log(carObjectLoop["M4"].toString());
console.log(carObjectManual["M5"].toString());
