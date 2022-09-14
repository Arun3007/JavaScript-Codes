"use strict";

let num1 = 22;
let str1 = 'Arunkumar';

num1 = '' + 22;
str1 = +'Arunkumar';

console.log(typeof(str1));
console.log(typeof(num1));

let result = num1 >= 18 && num1 <= 20 || str1[0] === 'A' ? 'welcome' : 'closed';

console.log(result);

let value = Symbol('Arun');
console.log(typeof value);


