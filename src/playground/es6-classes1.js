
class Person {
  constructor(name = 'Anonymous', age = 99) {
    this.name = name;
    this.age = age
  }

  description() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  description() {
    let description = super.description();
    
    if(this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  description() {
    let description = super.description();

    if (!!this.homeLocation) {
      description += ` I'm visiting from ${this.homeLocation}.`;
    }

    return description;
  }
}

const me = new Student('Mark Wilkinson', 38, 'Computer Engineering');
console.log(me.description());

const otherMe = new Traveler('Mark W', 28, 'Houston');
console.log(otherMe.description());

const other = new Student();
console.log(other.description());