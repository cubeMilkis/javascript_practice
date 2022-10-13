//REDUCE
// - Executes a reducer function on each element of the array
//   resulting in a single value

[3,5,7,9,11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
// 배열 요소를 다 사용하여 하나의 값만 반환되도록함

// REDUCE 예제
const prices = [10,24,36,27,14];

const totalPrice = prices.reduce((total, price) => {
    total + price;
})

const minimumP = prices.reduce((c1, c2) => {
    if(c1 < c2){
        return c1;
    } else {
        return c2;
    }
})

// REDUCE 는 두번째 인수도 가지고 있다

// REDUCE on object
const people = [
    {
    name: `kim`,
    score: 57
    },
    {
    name: `jang`,
    score: 81    
    },
    {
    name: `jung`,
    score: 98},
    {
    name: `yang`,
    score: 78    
    }
];

const hscore = people.reduce((st1, st2) => {
    if(st1.score > st2.score){
        return st1
    }
        return st2
})