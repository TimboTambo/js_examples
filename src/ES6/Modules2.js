// const user = require('./Modules.js');

// console.log(`User: ${user.getName()}`);

//↑ This example will work because it use common JS


// ↓ This example will  not work if you use common JS so you need to  install typescript

import User from './Modules.js'; // not {User}, just User

new User('John');//<------This ex