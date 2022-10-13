const exams = [76,57,87,68,97,68,65,89,99]
// SOME
exams.some((score) => { score >= 75;})
// true;

// EVERY - 조건중 하나라도 false 이면 false 반환.

exams.every((score) => {
    score >=75;
})


//Object 에 사용
const people = [{
    name: `kim`,
    score: 57},
    {
    name: `jang`,
    score: 81    
    }
];

people.some((student) => {
    return student.score > 60;
})
people.every((student) => {
    return student.score > 60;
})