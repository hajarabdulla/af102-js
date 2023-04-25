// const num = 50;
// new keyword

const num = new Number(50);
console.log(num);

// class Number {
//     constructor(params) {
//         this.params=params
//     }
// }

// cosnt n1 = n

// 4 way
// const User = {
//   name: "Hajar",
//   age: 21,
//   address: {
//     city: "Baku",
//     street: "faig Yusifov",
//   },
//   friend: [],

//   getFullName: () => {},
// };

// arr = [
//   {
//     name: "Hajar",
//     age: 21,
//   },
//   {
//     name: "Subhan",
//   },
// ];

// new Object

// const User = new Object();
// User.firstName = "Hajar";
// User.age = 21;
// console.log(User);

//! function contructor
// function getName (firstname, age){
//     this.firstname = firstname,
//     this.age = age
// }

// const user = getName("Hajar", 21)
// console.log(user);

// keys

// const User = {
//   name: "Hajar",
//   age: 21,
//   address: {
//     city: "Baku",
//     street: "Faig Yusifov",
//   },
//   //   address: null,
//   friend: [],

//   getFullName: () => {},
// };

// console.log(User["address"]["city"]);
// console.log(User.address.city);
// console.log(Object.keys(User));
// const a = Object.values(User)
// console.log(User.address);
// console.log(Object.keys(a[2]));
// console.log(Object.entries(User));

// const arr = [
//   {
//     name: "Hajar",
//     address: {
//       city: "Baku",
//     },
//   },
//   {
//     name: "Nigar",
//   },
// ];

// console.log(User.address?.city);

// const obj = { 0: "a", 1: "b", 2: "c" };
// console.log(Object.getOwnPropertyNames(obj));

// class Person {
//   #name;
//   constructor(name, age) {
//     this.#name = name;
//     this.age = age;
//   }
//   //   name = "Hajar";
//   //   age = 21;

//   get getName() {
//     console.log(this.#name);
//   }

//   set setName(value) {
//     this.#name = value;
//   }
// }

// const p = new Person("Hajar", 21);
// const p2 = new Person("Farid", 19);

// p.setName = "Nigar";
// p.getName();

// p.name = "Nigar";
// console.log(p.name);
// p2.getName()
// console.log(p);
// console.log(p2);

// const User = {
//   name: "Hajar",

//   getName: function () {
//     console.log(this.name);
//   },
// };

//! Inheritance
// class Person {
//   //   firstName = "Hajar";
//   //   age = 21;
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Woman extends Person {
//   constructor(name, age, isMarried) {
//     super();
//     this.name = name;
//     this.age = age;
//     this.isMarried = isMarried;

//   }
// }

// function Person(first, last,  eyecolor) {
//   this.firstName = first;
//   this.lastName = last;
//   this.eyeColor = eyecolor;
// }

// Person.prototype.age = 21;

// console.log(Number.myRandom);
// class Girl extends Womam{
//     name age isMarried
// }

// const p = new Person()

// const w1 = new Woman("Esmer", 20, false)
// const w2 = new Woman("Gunel", 20, true)
// console.log(w1);
// console.log(w2);

const aaaa = [1, 4, 78];
aaaa.map((i) => console.log(i));

// Array.prototype.myMap = function (cb) {
//     for(let i = 0; i < this.length; i++){
//         cb(this[i], i, this)
//     }
// };

// const myMap =()=> {

// }

// myMap()
