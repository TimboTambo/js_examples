// //Common JS
const user = require('./Modules.js');

console.log(`User: ${user.getName()}`);

//ES6 
import User from './Modules.js'; // not {User}, just User

new User('Simone');