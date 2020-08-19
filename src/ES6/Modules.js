// const getName = () => {
//   return 'Simone';
// };

// exports.getName = getName;

//↑ This example will work because it use common JS


// ↓ This example will  not work if you use common JS so you need to  install typescript

export default class User { // just add "default"
  constructor(name) {
    this.name = name;
  }
}