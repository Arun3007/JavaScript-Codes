// and - or operator

let fName = 'Arun';
let age = '21';

if(fName[0] === 'A' && age > 18){
    console.log("true");
}else{
    console.log("false");
}

let valid = fName[1] === 'r' && age > 20 ? "true" : "false";
console.log(valid);     


if(fName.length <=2 || age < 14){
    console.log("true");
}else{
    console.log("false");
}