//배열 분해
const scores = [1,2,3,4,5,6,7,8,9].reverse();

const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver, ...everyone] = scores;

//객체 분해
const user = {
    email: `mintruffle@gmail.com`,
    password: `mint1234`,
    firstName: `Mint`,
    lastName: `Truffle`,
    born: `2022`,
    country: `South Korea`
}

//쉽게 email 값을 가지고 올수 있음
const { email } = user;
const yourEmail = user.email; // 이거랑 같음

// 객체 키가 없는 경우 디폴트 값을 줄 수 있음
const { firstName, born: birthYear, died = 'still alive'  } = user;


// PARAM Destructuring
// user을 각각 붙여야하는 번거로움이 있음
function name(user){
    return `${user.firstName} ${user.lastName}`
}

function name(user){
    const {firstName, lastName} = user
    return `${firstName} ${lastName}`;
}

//array-object 인 경우에만
user.map(({email, password, country}) => {
    return `${email} ${password}, you live in ${country}`
});