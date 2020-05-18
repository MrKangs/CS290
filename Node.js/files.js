// Node itself have its own build-in modules that we can use it 
// without downloading a new 3rd party module
// You can find it by looking documentation from https://www.nodejs.org

// Since we are not downloading the fs(as you see below), 
// the terminal will look at 3rd party module first, 
// then look at build-in module
// If none of them exsits, then it fails

var fs = require('fs');
// File System module is fs: This is build-in module from Node

fs.readFile('square.js', 'utf8', function(err,data){
    if (err){
        console.log("== Error reading files", err);
    }
    else{
        console.log("== Async file contents:" , data);
    }
});
// This function able to read files
// In this case, it will read the square.js file
// utf8 means it will return a string value
// The last argument is a call back function

// The idea of fs works that when you do a call back function,
// It will get the data while the program is running
// As you see in the terminal, the 8 console log statements will print out
// first before the data from square.js is printed out from the terminal

console.log("== This is after fs.readFile() 1");
console.log("== This is after fs.readFile() 2");
console.log("== This is after fs.readFile() 3");
console.log("== This is after fs.readFile() 4");
console.log("== This is after fs.readFile() 5");
console.log("== This is after fs.readFile() 6");
console.log("== This is after fs.readFile() 7");
console.log("== This is after fs.readFile() 8");

// Note that it takes a while to print out the data from square.js than the console.log statments
// If we use syncFileContents as fs.readFileSync, then it will while running the program
// Which makes it faster yet heavier(?) We prefer the the method below rather than the top
// But there are pros and cons for each methods

var syncFileContents = fs.readFileSync('square.js', 'utf8');
console.log("== syncronous file contents:", syncFileContents);

console.log("== This is after fs.readFileSync() 1");
console.log("== This is after fs.readFileSync() 2");
console.log("== This is after fs.readFileSync() 3");
console.log("== This is after fs.readFileSync() 4");
console.log("== This is after fs.readFileSync() 5");
console.log("== This is after fs.readFileSync() 6");
console.log("== This is after fs.readFileSync() 7");
console.log("== This is after fs.readFileSync() 8");
// As you see the result, the order follows: 
// console.log 1 to 8, 
// then syncronous
// then console.log 1 to 8
// then async

