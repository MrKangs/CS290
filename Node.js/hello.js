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

var perimeter = require('./square');
// This will take the perimeter function from the square.js file
// ./sqaure means it in the same folder and sqaure file
// Make sure the directory location is clear

console.log("== perimeter():", perimeter);
// This will print out the function properties/name

console.log("== perimeter(5):", perimeter(5));
// This will return the value that the lenght of the square is equal to 5


var circle = require('./lib/circle');
// Most of the files are located in the lib(library folder)
// To move a file, the statement is mv [filename] [foldername]/
// To see the what inside in a different folder, it will be ls [foldername]/

console.log("== circle:", circle);
console.log("== circle.circumference(5):", circle.circumference(5));
console.log("== circle.area(5):", circle.area(5));
console.log("== circle.message:", circle.message);
// Note that you can also send message statements: function is not the only options


// That is how to create a new module to import into the server
// But the problem is that it takes too much time make a new one and 
// That module might already be on the internet

// Therefore, checkout https://www.npmjs.com 
// This is the site that can find all kind of module package to find the module that you are looking for
// There is also an extension of npm for VScode, recommend it!

// In order to use the 3rd party module, you need to go to the terminal to install a particular module
// it will be this: npm install [name of 3rd party module]
// For example, we will run npm install figlet

var figlet = require('figlet');
// This will import figlet into the hello.js

figlet("Cool Font", function(err, data){
    if(!err){
        console.log(data);
    }
});
// This function came from the npm, figlet page as the basic example




