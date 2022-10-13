console.log(`HELLO FROM OUR FIRST JS FILE!`);

let total = 1 + 3;
console.log(parseInt(total));

//IF STATEMENT
let rating = 3;
if(rating === 3){
    console.log("YOU ARE SUPERSMART!");
}

//ELSE IF
//let rating = 3;
if(rating === 3){
    console.log("YOU ARE SUPERSMART!");
}
else if (rating === 2){
    console.log(`YOU ARE AWESOME`);
}

const dayOfWeek = `Monday`;
if(dayOfWeek === `Monday`){
    console.log(`UGHHH I HATE MONDAYS`);
} else if (dayOfWeek === `Saturday`){
    console.log(`YAY I LOVE SATURDAYS`);
} else if (dayOfWeek === `Frdiay`){
    console.log(`TGIF`);
}

//ELSE 
//0-5 - FREE
//5 - 10 - CHILD $10
//10 - 65 ADULT $20
//65+ SENIOR $10

const age = 8;

if (age < 5){
    console.log(`YOU ARE A BABY. YOU GET IN FOR FREE`);
} else if (age < 10){
    console.log(`YOU ARE A CHILD. YOU PAY $10`);
} else if (age < 65){
    console.log(`YOU ARE AN ADULT, YOU PAY $20`);
} else {
    console.log(`YOU ARE A SENIOR, YOU PAY $10`);
}

//Switch, case
const //day = 4;
//switch(day){
    case 1:
        console.log(`CHESTDAY`);
        break;
    case 2:
        console.log(`SHOULDERDAY`)
        break;
    case 3:
        console.log(`BACKDAY`)
        break;
    case 4:
        console.log(`LEGDAY`)
        break;
    case 5:
        console.log(`CARDIODAY`)
        break;
    default:
        console.log(`RESTDAY`)
}

