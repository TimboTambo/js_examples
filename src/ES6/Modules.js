// //Common JS
const getName = () => {
  return 'Simone';
};

exports.getName = getName;

//ES6 
export default class User { // just add "default"
  constructor(name) {
    this.name = name;
  }
}