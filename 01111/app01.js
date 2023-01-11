console.log("안녕하세요.");
var Person = /** @class */ (function () {
    function Person(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    Person.prototype.greeting = function () {
        console.log("Hello ".concat(this.name, ", You're ").concat(this.age, " years old."));
    };
    Person.prototype.from = function () {
        console.log(this.country);
    };
    return Person;
}());
var sunghyuk = new Person("Sung-Hyuk", 24, "South Korea");
sunghyuk.greeting();
sunghyuk.from();
var Human = {
    name: "Sung-Hyuk",
    age: 24,
    pet: {
        name: "카카오",
        age: 19
    },
    sayHello: function () {
        console.log("환영합니다.");
    }
};
Human.sayHello();
if (typeof Human === "object") {
    console.log("객체 타입입니다.");
}
else if (typeof Human === "string") {
    console.log("원시 타입입니다.");
}
var fruits = ["apple", "pineapple", "strawberry"];
// forEach 두가지 방법
fruits.forEach(function (a) {
    console.log(a);
});
fruits.forEach(function (i) {
    console.log(i);
});
