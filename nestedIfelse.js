// Nested If else

// winning number 19
// 19 your guess is right
// 22 your guess is too high
// 18 your guess is to low


let winNum = 19;
let guess = +prompt("Guess a number");
console.log(typeof guess, guess);

if(winNum === guess){
    console.log("correct guess!!");
}else{
    if(winNum < guess){
        console.log("too high");
    }
    else{
        console.log("too low");
    }
}