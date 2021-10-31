class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return `${this.name} says meow!`
    }
}

// orangeCat = new Cat("Christina", "male")
// console.log(orangeCat.speak());

class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return `${this.name} says woof!`
    }
}

// corgiDog = new Dog("Max", "female")
// console.log(corgiDog.speak());

class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        if (this.sex === "male") {
            return `It's me! ${this.name}, the parrot!`
        } else {
            return `${this.name} says squawk!`
        }
    }
}

// talkingBird = new Bird("Mable", "male")
// console.log(talkingBird.speak());