class Person {
  constructor(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
  }
  sayHello() {
    console.log(`My name is ${this.first_name} ${this.last_name}`);
  }
}
