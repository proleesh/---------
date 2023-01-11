console.log("안녕하세요.");
class Person {
  name: string;
  age: number;
  country: string;
  constructor(name: string, age: number, country: string) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  greeting() {
    console.log(`Hello ${this.name}, You're ${this.age} years old.`);
  }
  from() {
    console.log(this.country);
  }
}
let sunghyuk = new Person("Sung-Hyuk", 24, "South Korea");
sunghyuk.greeting();
sunghyuk.from();
const Human = {
  name: "Sung-Hyuk",
  age: 24,
  pet: {
    name: "카카오",
    age: 19,
  },
  sayHello: function () {
    console.log("환영합니다.");
  },
};
Human.sayHello();
if (typeof Human === "object") {
  console.log("객체 타입입니다.");
} else if (typeof Human === "string") {
  console.log("원시 타입입니다.");
}
const fruits = ["apple", "pineapple", "strawberry"];
// forEach 두가지 방법
fruits.forEach((a: string) => {
  console.log(a);
});
fruits.forEach(function (i) {
  console.log(i);
});
