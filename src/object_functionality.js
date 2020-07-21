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
car1 = new car("BMW", "M5", "2020", "Sedan", "80,000");
car2 = new car("BMW", "M4", "2019", "Coupe", "50,000");

cars = [car1, car2];

//Creating a car object via loop
function createCarObjectLoop(cars) {
  let carObject = {};
  for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    carObject[car.model] = car;
  }
  return carObject;
}

//Creating a car object manually
function createCarObjectManual(cars) {
  let carObject = {};

  carObject[cars[0].model] = cars[0];
  carObject[cars[1].model] = cars[1];

  return carObject;
}

//creating two objects from the two methods (these should be exactly the same)
carObjectLoop = createCarObjectLoop(cars);
carObjectManual = createCarObjectManual(cars);

//searching the objects
console.log(carObjectLoop["M4"].toString());
console.log(carObjectManual["M5"].toString());
