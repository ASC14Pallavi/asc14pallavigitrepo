class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} make a sound`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
        console.log('Dog constructor called');
    }
    makeSound() {
        console.log(`${this.name} barks.`);
    }
}
const animal = new Animal('cat');
animal.makeSound();
const dog = new Dog('shimba');
dog.makeSound();
class Phone {
    constructor(feature) {
        console.log("phone constructor initialised");
        this.phoneFeature = feature;
    }
    displayDetails() {
        console.log("Phone feature are  " + this.phoneFeature);
    }
}
class SmartPhone extends Phone {
    constructor(feature, cameraSpecs) {
        super(feature);
        this.feature = feature;
        this.cameraSpecs = cameraSpecs;
        console.log("SmartPhone constructor completed");
    }
    displayDetails() {
        console.log("SmartPhone feature are  " + this.phoneFeature + " and camera specs are " + this.cameraSpecs);
    }
}
const phone1 = new SmartPhone("Phone with touch screen, calling, messaging, camera, music player, and internet browsing features", "108 mega pixel camera!");
phone1.displayDetails();
