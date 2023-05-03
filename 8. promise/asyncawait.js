// function g() {
//   setTimeout(() => {
//     return 42;
//   }, 3000);
// }

// function f() {
//   const res = g();
//   console.log(res);
// }

// f();

// function g() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(42);
//     }, 3000);
//   });
// }

// function f (){
//     g().then(val => console.log(val))
// }

// f();

// function g() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(42);
//     }, 3000);
//   });
// }

// async function f() {
//   const res = await g();
//   console.log(res);
// }

// f();

// const f = async () => {};
