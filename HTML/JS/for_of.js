// for of - a nice easy way of iterating over arrays
for([variable] of [iterable]){
    statement
}

const seaAnimal = [`clamfish`,`shrimp`,`dolphin`,`whale`,`sealion`,`doctorfish`]

for (let i = 0; i < seaAnimal.length; i++){
    console.log(seaAnimal[i]);
}
// 이렇게 배열 요소를 불러오는 법도 있지만

//for of 예제
//가독성도 높이고 코드도 간단해짐
for (let sub of seaAnimal){
    console.log(sub);
}

//for of nested for문 에 사용
let animal = [
    [`dog`, `cat`, `hamster`],
    [`aligator`, `crocodile` , `lizard`],
    [`gary`, `spongebob`, `patrick`]
]

for (let row of animal){
    for (let sub of row){
        console.log(sub);
    }
}

//for of string에 사용
for (let char of `hello`){
    console.log(char);
}

//object loop
// for in array
let numberss = [3,6,7,9];
for(let i in numberss){
    console.log(i); //0, 1, 2, 3
}
//인덱스를 반환

//for in object
const scoreOfStudents = {
    kim: 57,
    jang: 81,
    do: 67,
    park: 90,
    oh: 30
};

for(let scores in scoreOfStudents){
    console.log(scores);    //키를 반환
    console.log(scoreOfStudents[scores])    //값을 반환
}

//for of 객체에 사용
for(let scores of Object.values(scoreOfStudents)){
    console.log(scores);
}