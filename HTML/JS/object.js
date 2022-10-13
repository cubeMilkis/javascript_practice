// object
// property = key + value
username: hihihi
password: 1234

// object
const dog = {
    name: `pon`,
    age: 2,
    colors: [`black`,`white`],
    isBig: true
};
//객체 내에 정의된 키는 문자열 string 으로 변환된다.

// object 내에 키값을 불러오기
dog["name"] // "pon"
dog["age"] // 2
//대괄호[] 와 큰따옴표 "" 를 사용하여 불러오기
dog.name // "pon"
dog.age // 2
// 점(.) 을 사용하여 불러오기

//Accessing Data
const score = {
    kim: 57,
    jang: 81
};
// update
score.kim = `C`
score["jang"] = `B+`

// array + object nesting
const dogs = [
    {name: 'ponpon', legs: 4, isBig: false},
    {name: 'tito', legs: 4, isBig: true}
]
dogs[0].name;
dogs[1].isBig;
