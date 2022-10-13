//forEach - accepts a callback function.
//Calls the function once per element in the array.
const numbers = [1,2,3,4,5,6,7,8,9]

function print(element){
    console.log(element)
}

numbers.forEach(function(num){
    console.log(num); //1부터 9까지 출력
})

//for of is newer than forEach
const score = {
    kim: 57,
    jang: 81
};

score.forEach(function(scoreOf){
    console.log(scoreOf);   //{kim, 57},{jang, 81}
})