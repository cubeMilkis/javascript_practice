/* 
function funcName(){
    do something
} 
*/

//no input function
function readBook(){
    console.log(`그렇다..`);
    console.log(`나는..`);
    console.log(`버섯이었다..`);
}
readBook();

//with input function (single parameter)
function who(yourName){    //parameter - 매개변수(yourName)
    console.log(`Hi, ${yourName}`);
}

//with input function (multiple parameter)
function yourname(firstName, lastName){
    console.log(`Hi, ${firstName} ${lastName}`)
}
yourname(`Mint`, `Truffle`);

//function expression
const add = function(x,y){
    return x + y;
}
const minus = (x,y) => {
    return x - y;
}


//scope - visibility of variables
//function scope
let lion = "Simba"; //전역변수 //global variable
function lionking(){
    let lion = "Mufasa";
    console.log(lion);
}
lionking();
//함수내에 있는 변수는 함수내에서만 적용

//block scope


//lexical scope