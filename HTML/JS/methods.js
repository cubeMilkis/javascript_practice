// Methods - functions as properties of object
const math = {
    square: function(num){
        return num * num;
    },
    addtion: function(x,y){
        return x + y;
    },
    subtraction: function(x,y){
        return x - y;
    },
    multiplication: function(x,y){
        return x * y;
    }
};

//shorthand
const shortMath = {
    square(num){
        return num * num;
    },
    addtion(x,y){
        return x + y;
    },
    subtraction(x,y){
        return x - y;
    },
    multiplication(x,y){
        return x * y;
    }
};

//this - use this to access other properties on the same object.
const lion = {
    name: `Simba`,
    color: `gold`,
    breed: `Southern African lion`,
    roar(){
        console.log(`${this.name} says ROARRR`) //this는 lion 객체를 가르킴
    }
}

const tiger = lion.roar();  //tiger 변수에 lion.roar()메서드를 정의
tiger();    //결과는 다름
// lion.roar() 에 있는 this 가 최상위 객체인 window를 가르키고 있기 때문.
// 즉 호출 컨텍스트에 따라 디스가 가르키는게 다름
