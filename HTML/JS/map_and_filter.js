//MAP - creates a new array with the results of calling a callback on every element in the array.
// 리턴값을 배열에 넣어서 정의
const numbers = [1,2,3,4,5,6,7,8,9]

const sqNumbers = numbers.map(function(newnum){
    return newnum * newnum; // 2제곱으로 리턴되서 배열로 정리됨
})

//object에 적용
const student = [{
    name: `kim`,
    score: 57},
    {
    name: `jang`,
    score: 81    
    }
];

const person = student.map(function(personName){
    return personName.name; //  [`kim`, `jang`]
})

//filter
const morenumbers = [1,2,3,4,5,6,7,8,9]

const ftNum = morenumbers.filter((n) => {
    return n < 8;
})

//filter on object
const people = [{
    name: `kim`,
    score: 57},
    {
    name: `jang`,
    score: 81    
    }
];

const goodscore = people.filter((m) => {
    return m.score > 80;
})

//filter + map
const whoscore = people.filter((who) => {
    who.score < 60;
}).map((who) => {who.name});