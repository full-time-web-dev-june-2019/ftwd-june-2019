
const bcrypt = require('bcryptjs');
const saltRounds = 13;


const password1 = "HelloWorld";
const password2 = "helloWorld";
const salt = bcrypt.genSaltSync(saltRounds);


const hash1 = bcrypt.hashSync(password1, salt);
const hash2 = bcrypt.hashSync(password2, salt);

console.log('salt is - ', salt);


console.log("hash 1", hash1);
console.log('hash 2', hash2);

