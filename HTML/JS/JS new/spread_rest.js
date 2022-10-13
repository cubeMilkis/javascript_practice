// Spread - syntax allows an iterable such as an
//  array to be expanded in places where zero ||
// more arguments || elements are expected

Math.max(13,145,25,45,47,234,657,567,236,342);

const numberss = [13,145,25,45,47,234,657,567,236,342];

Math.max(numberss); //NaN 
Math.max(...numberss) //657 점 세개로 spread syntax 사용

console.log(numberss); // [13,145,25,45,47,234,657,567,236,342]
console.log(...numberss); // 13 145 25 45 47 ...

// spread in Array literals
const red = [`orange`, `red`, `pink`];
const blue = [`blue`, `skyblue`];

const allColor = [...red, ...blue]; 

// spread in Object literals
const blueMix = {
    withWhite: `skyblue`,
    withRed: `purple`
}
const redMix = {
    withYellow: `orange`,
    withBlue: `purple`
}

{...blueMix} // withYellow: `green`, withRed: `purple`
{...redMix} // withYellow: `orange`, withBlue: `purple`

//add object using spread syntax
{...blueMix, withYellow: `green`}

//combine two objects using spread syntax
const mixThem = {...blueMix, ...redMix}

{...[2,4,6,8]} //object - array
//spread result: {0: 2, 1: 4, 2: 6, 3: 8}
//인덱스가 키로 사용됨

{...`hello`} //string도 동일
//{0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}


//Rest
function sum(...nums){  //매개변수에 무한으로 받을 수 있음
    return nums.reduce((total, next) => {total + next})
}


