// undefined

let fName;
console.log(typeof fName);  //varriable declared but not intialized then it will show undefined datatype

//null

let num = null;
console.log(num);

num = "arun";
console.log(num, typeof num);

console.log(typeof null) // It will show object , In js this is an error or bug then why developer of js not fixed this problem?
// because to fix this lots of packages and frameworks need to change.



//BigInt

let number = 12n;
console.log(typeof number);
let number2 = 12;
console.log(number + number2); // we cannot add bigint and normal number -> Error


