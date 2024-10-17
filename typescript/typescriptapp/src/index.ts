console.log("hello world");

function add(a:number,b:number):number{
    return a+b;
}
//function functionname(var:variabletype,):return type{
 //   return
//}

const result=add(7,10);
console.log(result);

interface Registration{
    name:string;
    phone_number:Number;
    email:string;
}

const user:Registration={
    name:"Ajay",
    phone_number:896,
    email:"new123@gmail.com"
};
console.log(user)

/*class Animal {
    constructor(public name:string){}

    makeSound():void {
        console.log(`${this.name} make a sound`);

    }   
}
class Dog extends Animal{
    makeSound():void{
        console.log(`${this.name} barks.`);
    }
}

const animal = new Animal('cat');
animal.makeSound();
const dog =new Dog('shimba');
dog.makeSound();*/

//generics
function identity<T>(arg: T) : T{
    return arg;
}
const num=identity<number>(42);
const str=identity<string>("pal");

console.log(num);
console.log(str);

enum Directions{
    up,
    down,
    right,
    left
};
const move=Directions.up;
console.log(move);
console.log(Directions[2]);
console.log(Directions[1]);

enum Direction1{
    up =2,
    down,
    right=100,
    left
};
const move2=Direction1.up;
console.log(move2);
console.log(Direction1.down);
console.log(Direction1.right);
console.log(Direction1[100]);