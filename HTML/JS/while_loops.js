// while loop
let count =  0;
while (count <= 5) {
    console.log(count)
    count++;
}
//while loop 예제
const password = `1234`;
let answer = prompt(`비밀번호를 입력하시오..`)
while (answer !== password){
    answer = prompt(`비밀번호를 입력하시오..`)
}
console.log(`환영합니다!`);

// guessing game
let initialNum = parseInt(prompt(`Enter your number`));
while(!initialNum){
    initialNum = parseInt(prompt(`Enter a valid number!`));
}
const targetNum = Math.floor(Math.random() * initialNum) + 1;
let attempts = 1;   //for how many attempts passed 

let guess = parseInt(prompt(`Enter your first guess`))
while (guess !== targetNum){
    attempts++
    if (guess < targetNum){
        guess = parseInt(prompt(`Your number is too low! Enter a new guess:`));
    }   else {
        guess = parseInt(prompt(`Your number is too high! Enter a new guess:`))
    }
}
console.log(`You got it! It took you: ${attempts}`);