const arr = [
  "Subhan",
  "Farid", //1
  "Tofiq", //2
  "Alovsat", //3
  "Rafail",
  "Farhad",
  "Tural",
  "Elnar",
  "Maharram",
  "Ulvi",
  "Murad",
  "Asmar",
  "Gunel",
  "Adil",
  "Vugar",
  "Hajar",
  "Nihad",
];

// console.log(typeof arr);
const numArr = [4, 2, 7];

//! toString()
// const newArray = arr.toString();
// console.log(newArray);
// console.log(arr);

//! sort
// numArr.sort()
// const newVar = numArr.toString()
// console.log(newVar);
// console.log(numArr);

//! push
// numArr.push(9)
// console.log(numArr);

//! pop
// numArr.pop()
// console.log(numArr);

//! shift, unshift
// numArr.shift()
// numArr.unshift(9)
// console.log(numArr);

//! join
// const newArr = arr.join(" ");
// console.log(newArr);

//! concat
// console.log(arr.concat("Abulfaz"));
// console.log(arr.concat(numArr));
// console.log(arr);

//! slice
// start, end
// const newArr = arr.slice(3, 5);
// const newArr = arr.slice(-3, -1);
// const newArr = arr.slice(3);
// console.log(newArr);

//! splice
// start, length
// arr.splice(1, 3)
// console.log(arr);

//? 1ci slice array-i deyishmir, splice deyishir
//? 2ci slice array-den silir, splice array-a elave de ede bilir
//? 3cu slice. (start, end); splice (start, length)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// At position 2, add 2 elements:
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

// console.log(arr);

// const newArr = arr.entries()
// console.log(newArr);

// for(let elem of newArr){
//     console.log(elem);
// }

// for(let elem of arr){
//     console.log(elem);
// }

// const str = "369"
// console.log(Array.from(str));

//! array like object
// function test(a,b){
// console.log(arguments.length);
// console.log(arguments);

// arguments.push(5)
// const newArr = Array.from(arguments)
// newArr.push(9)
//     // console.log(newArr);
// }

// test(3, 5)

//! Array iterations
const doubler = (val, cb) => {
  val = val * 2;
  cb(val);

  //   if (typeof cb === "function") {
  //   }
};

// const logger = (num) => {
//   console.log(num);
// };

// logger(4)

// doubler(2, (val) => {
//   console.log(val);
// });
