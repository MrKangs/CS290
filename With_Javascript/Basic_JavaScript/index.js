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

console.log("== 'decathlon'.indexOf('cat'):", 'decathlon'.indexOf('cat'));
// This function will find a word cat in the word decathlon
// In this case, we get the value of 2 that is the starting position

console.log("== 'team'.indexOf('i'):", 'team'.indexOf('i'));
// If there is no value that matches the word inside, it will return a value of -1
// To look more in-depth of string classes, check out MDN with JavaScript with Strings
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

var foxString = "The quick brown fox jumped over the lazy cat and a active cat";
console.log("== foxString.replace('cat', 'dog')", foxString.replace('cat', 'dog'));
// This will only replace the first term of cat into dog
// Check out to learn how to replace all in MDN

console.log(" == foxString", foxString);
// However, it doesn't modify the orginial string
// The replace methods creates a new string with the modifications

console.log("\n================================================================");
console.log("== Arryas");
console.log("================================================================\n");

var array = [];
console.log(' == array', array);
// This is how we create an array
// This is an empty array

var array = [1,2,3];
console.log(' == array', array);
// When there is an element, it will print out the length and the elements in the array 

var arrays = [1, '2', [5,6,'7'], function() {}];
console.log(' == arrays', arrays);
// Unlike Java or C++, arrays can all be mix and matches

console.log(' == arrays.length', arrays.length);
// This will print the length of the array 

for(var i = 0; i < array.length; i++){
    console.log( "--", array[i]);
}
// This will do a loop that will add elements as normal programming language does

array.forEach(function(elem){
    console.log( " ==This is printed once for each thing in array");
    console.log( " --elem:", elem);

});
// This will print this statement as loop, but it does for each element: that is wht we call this forEach
// We can treat a function as a datatype or valuable to use an argument for another function
// Because of that, we can return an arguement in the inside function that can we also recorded
// The function that we made is anaoymous(unknown name)

function arrayElementPrintingFunction(k){
    console.log(" ==The array element is: ", k);
}

array.forEach(arrayElementPrintingFunction);
// Same idea as the last statements

console.log("\n================================================================");
console.log("== Functions");
console.log("================================================================\n");

function addMyArguments(a, b, c){
    return a + b + c;
}
// Same old idea with making a function as normal programming language

console.log(" ==addMyArgument(2,4,6): ", addMyArguments(2,4,6));
console.log(" ==addMyArgument('2','4','6'): ", addMyArguments('2','4','6'));
// It will return the default datatype that we had

// However, when we pass in different arguments with datatype, it will go the default(powerful datatype) first
console.log(" ==addMyArgument(2, 4,'6'): ", addMyArguments(2, 4,'6'));
// The process works like this: 2 + 4 first, then add string valued which is 66

console.log(" ==addMyArgument(2,'6'): ", addMyArguments(2, '6'));
// It will return as 26undefied because we didn't add an element into the function

console.log(" ==addMyArgument(2, 4, '6' ,8): ", addMyArguments(2, 4, '6', 8));
// Same idea with more arguments variable: it will not return an error
// It will print out 66 ignoring the 8

// If you want to add the element into the function, we need to modify the function as following

function addMyArguments2(a, b, c){
    var result  = a + b + c;
    if(arguments[3]){
        result += arguments[3];
    }
    return result;
}
console.log(" ==addMyArgument2(2, 4, '6' ,8): ", addMyArguments2(2, 4, '6', 8));
// This will print out 668 since 2 + 4 as a number first than convert 6 and 8 as string value

var z = 16;
function foo(){
    z = 32;
}
foo();
console.log(" == z: ", z);
// We see that z value will change because we are modifying the global variable z
// If we didn't declare z in global, then z value will not be modified






console.log("\n================================================================");
console.log("== Strings");
console.log("================================================================\n");




