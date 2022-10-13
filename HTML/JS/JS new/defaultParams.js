// function rollDie(numSides){
//     if (numSides === undefined){
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// }
// or

function rollDie(numSides = 6){
    return Math.floor(Math.random() * numSides) + 1;
}

//function의 두번째, 세번재 매개변수에 default 값을 넣어줘야한다.
function greet(name = `someone`, his = `Hey there!`){
    return `${name} ${his}`;
}