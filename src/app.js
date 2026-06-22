class Plane {
  speed;
  material;

  constructor(s, m) {
    this.speed = s;
    this.material = m;
  }
  fly() {
    // console.log(`this plane is made of ${this.material}`); //1
    if (this.material === "iron") {
      this.speed = this.speed + 500;
    } else {
      this.speed = this.speed + 1000;
    }
    console.log(this.speed);
  }
}

// const date = new Date();

const plane1 = new Plane(322, "iron");
console.log(plane1.material);

const plane2 = new Plane(0, "copper");
console.log(plane2.fly());

const plane3 = new Plane(7800, "lava");
console.log(plane3.fly());

plane1.fly(); //1

class Person {
  name;
  age;
  constructor(n, a) {
    this.name = n;
    this.age = a;
  }

  user() {
    console.log(`hello my name is ${this.name} and i am ${this.age} years old`);
  }
}

const person1 = new Person("leila", 40);
const person2 = new Person("natia", 23);
const person3 = new Person("magda", 20);
const person4 = new Person("anano", 37);

console.log(person1.user());
console.log(person2.user());
console.log(person3.user());
console.log(person4.user());
