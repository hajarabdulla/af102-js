// let, var, const

// var a = 5;

// a = 6;
// console.log(a);

// console.log(a);
// var a = 5; //hoisting

// let a = 5;
// var b = 6;

// console.log(a);
// console.log(window.a);
// console.log(window.b);

// let var --> let hoisting-i support etmir
// let - global window-a assign ede bilmir

// function declaration, funciton expression , anaonym function, arrow function
// callable

// console.log("Hello");

//! Function Declaration
// hello();

// function hello() {
//   console.log("Hello");

//   // code block
//   // function scope
// }

// let a = 11;
// let b = 4;

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(6, 11);
// sum(40, 8);

// function sum(a, b) {
//   return a + b;
// }

// let c = sum(3, 7);
// console.log(c);

// console.log(sum(4, 9));

//! Function Expression
// hello();

// var hello = function () {
//   console.log("Salam");
// };

// let calc = function (c, d) {
//   console.log(c * d);
// };

// calc(9, 3);

// let User = {
//   name: {

//   },
//   surname: "Abdullayeva",
//   age: 21,
// };

// console.log(User.name, User.surname);

// let arr = [
//   {
//     name: "Hajar",
//     age: 21,
//   },
//   {
//     name: "Subhan",
//     age: 20,
//   },
// ];

// hello();

// const hello = () => {
//   //
//   console.log("Hello");
// };

// let arr = [5, 6, 7];

// function sum(numArr) {
//   let sum = 0;
//   for (let i = 0; i < numArr.length; i++) {
//     sum += arr[i];
//   }

//   return sum;
// }

// console.log(sum(arr));

//! Function Expression
// function findMax(numArr) {
//     let max = numArr[0];

//     for (let i = 0; i < numArr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//     return max;
// }

//! Function Declaration
// const findMax = function(numArr){
//     let max = numArr[0];

//     for (let i = 0; i < numArr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//     return max;
// }

// console.log(findMax(arr));

// const findMax = (numArr) => {
//   let max = numArr[0];

//   for (let i = 0; i < numArr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// console.log(this);

// const findThis = () => {
//   console.log(this);
// };

// findThis();

// function findThisss() {
//   console.log(this);
// }

// findThisss();

// let User = {
//   name: "Hajar",
//   surname: "Abdullayeva",

//   getName: function () {
//     console.log(this);
//   },

//   getFullName: () => {
//     console.log(this);
//   },
// };

// User.getName();
// User.getFullName();

// function test(a) {
//   return a;
// }

// const test = (a=3, b = 9) => a * b;
// console.log(test(6, 10));

// "use strict"
// x = 5;
// console.log(x);

// let a = "\010";
// console.log(a);

// "use strict";
// a = 8;

// function test() {
//   console.log(a);
//   ("use strict");
//   x = 5;
//   console.log(x);
// }

// test();

// console.log(a);
// console.log(b);


// console.log(a);

// let referenceType = {
//   name: "Hajar",
// };

// let valueType = 41;

// function test(param) {
//   if (param.name) {
//     param.name = "Nigar";
//   } else {
//     param = 42;
//   }

//   console.log(param, "Function scope");
// }

// test(referenceType); //"Nigar"
// test(valueType); //42

// console.log(referenceType.name, "Outside the func refer"); //Nigar
// console.log(valueType, "Outside the func value"); //41

// for (var i = 0; i <= 4; i++) {
//     console.log(i)
// }

// console.log(i);


function difference(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
      let found = true;
      for (let j = 0; j < arr2.length; j++) {
          if (arr1[i] === arr2[j]) {
              found = false;
              break;
          }
      }
      if (found) {
          result.push(arr1[i]);
      }
  }

  return result;
}

let arr = 123322


