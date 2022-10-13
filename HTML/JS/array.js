//array
let colors = [`red`,`green`,`blue`];

//array change
let color = [`red`,`grean`, 'blau'];
color[1] = `green`;
color[2] = `blue`;

//push
//let day = [`CHESTDAY`,`SHOULDERDAY`,`BACKDAY`,`LEGDAY`];
day.push(`CARDIODAY`);

//pop
//let day = [`CHESTDAY`,`SHOULDERDAY`,`BACKDAY`,`LEGDAY`];
day.pop();

//shift
//let day = [`CHESTDAY`,`SHOULDERDAY`,`BACKDAY`,`LEGDAY`];
day.shift();

//unshift
let day = [`CHESTDAY`,`SHOULDERDAY`,`BACKDAY`,`LEGDAY`];
day.unshift(`RESTDAY`);

//concat (concatenate)
let lion = [`black`, `leon`];
let tiger = [`white`, `tigar`];
lion.concat(tiger);

let cats = lion.concat(tiger);

//inludes
cats.includes(`black`);

//indexOf
cats.indexOf(`white`);
// => 2 로 결과가 나올거얌
// 중복되는 경우 먼저 나오는 요소의 인덱스를 불러옴

//reverse
cats.reverse();
// => 배열 결과가 반전됨

//slice
let seaAnimal = [`clamfish`,`shrimp`,`dolphin`,`whale`,`sealion`,`doctorfish`]
seaAnimal.slice(1,5);
//slice(1,5) shrimp 부터 sealion 까지만 불러옴

//splice
seaAnimal.splice(4,1); //sealion 부터 1개요소 제거 즉 `sealion` 제거
seaAnimal.splice(2,2); //dolphin 부터 2개 요소 제거 즉 `dolphin`, `whale` 제거
seaAnimal.splice(2,0, `jellyfish`) // 2번 인덱스부터 0개 요소 제거 그리고 `jellyfish` 추가

//sort
let numbers = [0,-12,2,5,300,100,234];
numbers.sort();