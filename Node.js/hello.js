// Over the course, we used javascript that is associated with web
// However, Node allows to write code outside from web that can use anything
// Such as programming simple programs
// In this case, we will run a server using javascript
// In order to use install Node.js, google node.js to find and download the current version
// Or use a terminal to do it

console.log("Hello, world!");
// In order to see the message, we use the terminal
// First, locate which file will be running on the node
// Then, type node filename
// In this case, it will be node hello.js 
// You will get Hello, world! message 


/* process */
// Process is a global varialbe that gives us access to a bunch of information and values related to
// the current running process on every execuable

console.log("== process.env.SOME_ENV_VARIABLE:", process.env.SOME_ENV_VARIABLE);
// This will access enviroment vairable
// Enviroment variable is a veriable that is associated with the execution environment
// To add a new environment variable, then write "export [Variable Name(typically all caps) = value]"

// 22:24 Lecture

// var circumference = require('./circle');
// console.log("== circumference:", circumference);
// console.log("== circumference(5):", circumference(5));

var circle = require('./lib/circle');
console.log("== circle:", circle);
console.log("== circle.circumference(5):", circle.circumference(5));
console.log("== circle.area(5):", circle.area(5));


var figlet = require('figlet');

