const names = [
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

const numArr = [3, 5, 12, 52, 78];

//! every, some, foreach, map, filter, find, findIndex, reduce
// const logger = (val, index) => {
//   console.log(index);
// };

// names.forEach(logger);

// numArr.every((age) => console.log(age > 18));

function checkAge(age) {
  return age > 18;
}

// const newArr = numArr.some(checkAge);
// console.log(newArr);

// const newArr = numArr.findIndex(checkAge);
// console.log(newArr);

const newArr = numArr.map((elem) => {
  return elem * 2;
});

console.log(newArr);

const Users = [
  {
    name: "Hajar",
    age: undefined,
  },
  {
    name: "Nigar",
    age: 19,
  },
  {
    name: null,
    age: 35,
  },
  {
    name: "Farid",
    age: 19,
  },
];

const newUsers = Users.filter((elem) => {
  if (
    elem.name != undefined &&
    elem.name != null &&
    elem.age != undefined &&
    elem.age != null
  ) {
    return elem;
  }
});

console.log(newUsers);

let surname = "Hajar, Nigar, Leyla";
console.log(surname.split(","));
