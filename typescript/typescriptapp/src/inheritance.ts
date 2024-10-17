class Animal {
    constructor(public name:string){}

    makeSound():void {
        console.log(`${this.name} make a sound`);

    }   
}
class Dog extends Animal{
    constructor (name:string){
        super(name);
        console.log('Dog constructor called');
    }
    makeSound():void{
        console.log(`${this.name} barks.`);
    }
}

const animal = new Animal('cat');
animal.makeSound();
const dog =new Dog('shimba');
dog.makeSound();

class Phone{
    phoneFeature :string;
    constructor(feature :string){
        console.log("phone constructor initialised");
        this.phoneFeature=feature;
    }
    displayDetails() : void {
        console.log("Phone feature are  " + this.phoneFeature);
    }
}

class SmartPhone extends Phone {
    constructor(public feature : string, public  cameraSpecs : string){
        super(feature);
        console.log("SmartPhone constructor completed");
    }
    displayDetails(): void {
        console.log("SmartPhone feature are  " + this.phoneFeature + " and camera specs are " + this.cameraSpecs);
    }
}
const phone1 = new SmartPhone("Phone with touch screen, calling, messaging, camera, music player, and internet browsing features","108 mega pixel camera!" );
phone1.displayDetails();