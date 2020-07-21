//Creating a car class
class car {
  constructor(manufacturer, model, year, type, mileage, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.type = type;
    this.mileage = parseInt(mileage);
    this.price = price;
  }

  toString() {
    return `
      Manufacturer: ${this.manufacturer}
      Model: ${this.model}
      Year: ${this.year}
      Type: ${this.type}
      Mileage: ${this.mileage}
      Price: ${this.price}
      `;
  }

  drive(distance) {
    this.mileage += distance;
  }
}

//Creating new cars
let bmwM5 = new car("BMW", "M5", "2020", "Sedan", "0", "80,000");
let bmwM4 = new car("BMW", "M4", "2019", "Coupe", "0", "50,000");

let cars = [bmwM5, bmwM4];

//Creating a car object via loop
function createCarsObjectLoop(cars) {
  let carsObject = {};
  for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    carsObject[car.model] = car;
  }
  return carsObject;
}

//Creating a car object manually
function createCarsObjectManual(cars) {
  let carsObject = {};

  carsObject[cars[0].model] = cars[0];
  carsObject[cars[1].model] = cars[1];

  return carsObject;
}

//creating two objects from the two methods (these should be exactly the same)
let carsObjectLoop = createCarsObjectLoop(cars);
let carsObjectManual = createCarsObjectManual(cars);

//searching the objects
console.log(carsObjectLoop["M4"].toString());
console.log(carsObjectManual["M5"].toString());

console.log("Mileage: " + carsObjectManual["M5"].mileage);
carsObjectManual["M5"].drive(50);
console.log("Mileage: " + carsObjectManual["M5"].mileage);
