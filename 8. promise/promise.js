let promise = new Promise((resolved, rejected) => {
  setTimeout(() => {
    // resolved("ok");
    rejected("not ok");
  }, 3000);
});

promise.then((val) => console.log(val)).catch((err) => console.log(err));

// const server = false;

// const promise = new Promise((res, rej) => {
//   if (server) {
//     res("server is up");
//   } else {
//     rej("server is down");
//   }
// });

// promise
//     .then((val) => console.log(val))
//     .catch((err) => console.log(err));

// fetch() //res
// fetch() //error

// function login(username) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(username);
//     }, 3000);
//   });
// }

// function welcome(name) {
//   return new Promise((res) => {
//     res(`Welcome ${name}`);
//   });
// }

// login("Hajar")
//   .then((val) => {
//     console.log(val)
//     return welcome(val)
//   })
//   .then(returnedVal => console.log(returnedVal));
