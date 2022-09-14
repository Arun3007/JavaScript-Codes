// typeof operator

// primitive data types
/* 
String
number
boolean
undefined
null
undefined
BigInt
Symbol
*/

var n = 10;
var str = 'Arun';
console.log(typeof(n));
console.log(typeof(str));



// convert number to string

n = n + ""; // add empty sting with number it will get convert into string
console.log(typeof n);  // 10 -> "10"



//convert string to number

let myStr = "sharma";
console.log(typeof(myStr));

myStr = +"sharma"; // just add "+" before string it will convert it into number
console.log(typeof(myStr));



// Method 2

let num = 22; // number to string
num = String(num);
console.log(typeof num);

let str1 = "Arunkumar";
str1 = Number(str1);
console.log(typeof str1);


