class OldSyntax {
  constructor() {
    this.name = "Mark";
    this.getGreeting = this.getGreeting.bind(this);
  }

  getGreeting() {
    return `Hi. my name is ${this.name}.`;
  }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);

class NewSyntax {
  name = 'Mark';
  getGreeting = () => {
    return `Hi. my name is ${this.name}.`;
  };
}

const newGetGreeting = new NewSyntax().getGreeting;
console.log(newGetGreeting());