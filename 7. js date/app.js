// const arr = ["Vugar", "Murad", "Rafail", "Ulvi", "Elnar"];
// const anotherArr = [...arr, "Tural"];
// const anotherArr = _.cloneDeep(arr);
// anotherArr.push("Tural");
// arr[0] = "Tofig";

// console.log("arr", arr);
// console.log("anotherArr", anotherArr);

// const p1 = {
//   name: "Hajar",
//   age: 25,
// };

// const p2 = p1;
// const p2 = { ...p1 };

// p1.age = 21;
// p1.name = "Ulvi";
// console.log(p1);
// console.log(p2);

//! spread, lodash js library

// let a = 5;
// let b = a;
// a = 9;
// console.log(a);

// const arr = ["Vugar", "Murad", "Rafail", "Ulvi", "Elnar"];
// const [a, b, ...rest] = arr;
// console.log(a, b);
// console.log(b);
// console.log(a);
// console.log(rest);

// const word = new String("Hajar")
// const str = "Hajar"
// const date = new Date(); //today
// const hajarBirthday = new Date("12 08 2001");
// console.log(hajarBirthday);
// console.log(date.getFullYear() - hajarBirthday.getFullYear());
// const arr = ["Jan", "Feb", "March", "Apr", "May"];
// 1970 ci il jan 1
// console.log(date.getTime() / 1000 / 60 / 60 / 24 / 365);
// console.log(arr[date.getMonth()]);

//! year month day // hour min secs millisecs
// 0-11
// const date = new Date(-202489374901);
// const date = new Date(2001, 01, 01);
// console.log(date);

// setTimeout(() => {
//   console.log("Hello");
// }, 3000);

// const h1 = document.createElement("h1");
// const button = document.createElement("button");
// button.innerText = "delete";
// document.querySelector("body").append(h1);
// document.querySelector("body").append(button);

// const myInterval = setInterval(() => {
//   h1.innerHTML += "Hello";
//   console.log("Hello");
// }, 1000);

// setTimeout(() => {
//   clearInterval(myInterval);
// }, 2000);

// myInterval();

// button.addEventListener("click", () => {
//   clearInterval(myInterval);
// });

// const myInterval = setInterval(myTimer, 1000);

// function myTimer() {
//   const date = new Date();
//   h1.innerHTML = date.toLocaleTimeString();
// }

// function myStop() {
//   clearInterval(myInterval);
// }

// button.addEventListener("click", myStop);

const clock = document.querySelector("#clock");

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  clock.textContent = `${hour}h : ${minute}m : ${second}s`;
}

setInterval(getTime, 1000);
