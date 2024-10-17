console.log("hello world");
function add(a, b) {
    return a + b;
}
//function functionname(var:variabletype,):return type{
//   return
//}
const result = add(7, 10);
console.log(result);
const user = {
    name: "Ajay",
    phone_number: 896,
    email: "new123@gmail.com"
};
console.log(user);
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
function identity(arg) {
    return arg;
}
const num = identity(42);
const str = identity("pal");
console.log(num);
console.log(str);
var Directions;
(function (Directions) {
    Directions[Directions["up"] = 0] = "up";
    Directions[Directions["down"] = 1] = "down";
    Directions[Directions["right"] = 2] = "right";
    Directions[Directions["left"] = 3] = "left";
})(Directions || (Directions = {}));
;
const move = Directions.up;
console.log(move);
console.log(Directions[2]);
console.log(Directions[1]);
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 2] = "up";
    Direction1[Direction1["down"] = 3] = "down";
    Direction1[Direction1["right"] = 100] = "right";
    Direction1[Direction1["left"] = 101] = "left";
})(Direction1 || (Direction1 = {}));
;
const move2 = Direction1.up;
console.log(move2);
console.log(Direction1.down);
console.log(Direction1.right);
console.log(Direction1[100]);
