// for Loops
for(
    [initialExpression];
    [condition];    
    [incrementExpression];
)

// for문 예제
for (let i = 1; i <= 10; i++){   //1에서 시작, 10까지 1씩 증가
    console.log(i);             //콘솔에 1부터 10까지 리턴
}

for(let i=0; i<=20; i+=2){
    console.log(i)
}

//Looping over arrays
let day = [`CHESTDAY`,`SHOULDERDAY`,`BACKDAY`,`LEGDAY`];
// day 요소를 순서대로 불러옴
for (let i=0; i<day.length; i++){
    console.log(day[i]);
}
// day 요소를 반대로 불러옴
for (let j=day.length - 1; j >=0; j--){
    console.log(day[j]);
}

//nested for loops
for(let i = 1; i <= 10; i++){
    console.log(`i is: ${i}`);
    for(let j = 1; j < 4; j++){
        console.log(`j is: ${j}`);
    }
}

// nested loop 예제
let animal = [
    [`dog`, `cat`, `hamster`],
    [`aligator`, `crocodile` , `lizard`],
    [`gary`, `spongebob`, `patrick`]
]

for (let i = 0; i < animal.length; i++){
    const animalType = animal[i];
    console.log(`type #${i + 1}`);
    for(let j = 0; j < animalType.length; j++){
        console.log(animalType[j]);
    }
}
