// This is the statment that will print something in the console
// And "//" is comments

console.log("Hello World!");
// To see this message, you need to open the console that is located when you inspect the code
// For Windows, insepct will be right click on the page and click consoles,
// Or press F12 in the website and click the tab says console 

// Unlike other programming language, javascript just runs the code without a complier
// Therefore, it uses an intrepreter to run the code 
// It is similar to an actual programming code, but there is some differences 
// Java and JavaScript are totally different languages even though they have similar names

var x = 16;
// This is how to declare a variable
// There is no type for each variable as you see which shows that variable in JavaScript is a loose leaf type
// x can change into any type that we usually use in other programming language 

console.log("== typeof(x): ",typeof(x))

x = "Hello World!"
console.log("== typeof(x): ",typeof(x))
// Even they are the same variable that was used before, we can simply change it type by entering a value into it

console.log("\n================================================================");
console.log("== Numbers");
console.log("================================================================\n");

var y = 16.128;
console.log("== typeof(y)", typeof(y));
// Even though we set up as a float point, Javascript only takes as a number
// Note that Javascript only takes one type as number for all types of numbers


console.log("== 9 / 5", 9 / 5);
// Most language will take this as integer since the input will be int value, which will return as 1
// But in Javascript, since there is only one type for numbers, it will print as what it is


console.log("\n================================================================");
console.log("== Comparisons");
console.log("================================================================\n");

console.log("== 2 == 2", 2 == 2);
console.log("== 2 == 3", 2 == 3);
console.log("== 2 == 2.0", 2 == 2.0);

// This will return as true, which it also uses as booleans in normal programming languages

// However, there is some difference in the parameter, or conditions

console.log("== 2 == '2'", 2 == '2');
console.log("== 2 == '2.0'", 2 == '2.0');

// In this case, the result return as true
// How it works that the number converts into a string, then compares as a string values
// So we need a different operator to do the comparison
// Note that '' and "" means the same thing as string values in Javascript

// In order to compare with types includes, we use === rather than == of them

console.log("== 2 === '2'", 2 === '2');
console.log("== 2 === '2.0'", 2 === '2.0');
console.log("== 2 === 2.0", 2 === 2.0);

// By doing === rather than ==, it will return as false
// '===' is called as strict equality operator while '==' is called as simple equality operator

// "!==" is strict not equal operator while there is no strict in greater than, less than, or greater/less or equal to operator

console.log("\n================================================================");
console.log("== Strings");
console.log("================================================================\n");

var str1 = "This is a string. ";
var str2 = 'This is another string';
// Both methods are used to as string
// Typically we either use "" or '' because we can add quotes inside the string values
var str3 = "This is 'quote' string";

var longerstring = str1 + str2;
console.log("== longerstring", longerstring);
// This longerstring will add two strings as one long string: this called cadinate

console.log("== longerstring + 1234", longerstring + 1234);
longeststring = longerstring + 5678;
console.log("== longeststring", longeststring);

// We can also add a number into the string also

console.log("== str1.length:", str1.length);
// This function, .length, will tell how long the string length is

console.log("== str1[5]:", str1[5]);
// This will tell what is the character in the # position
// However, we can't modify as like this because this is not the function how to modify it: str1[5] = 'x'








