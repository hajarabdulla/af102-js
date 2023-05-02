// const name = "Hajar"
// const password = "12345"

function login(username, thisisMyFunc) {
    setTimeout(() => {
        thisisMyFunc(username)
    }, 3000)
}

function welcome(ad) {
    console.log(`Welcome ${ad}`);
}
let c = 9

const user = login("Subhan", function (parametrName) {
    welcome(parametrName)
})



// c = 7;

// function test(a, b) {
//     console.log(a);
// }

// test(9)














// console.log(user);

// welcome(user)


// function showFrineds() {
//     const myFriends = ["Elnur", "Suleyman", "Rashad", "Nargiz"]

//     setTimeout(() => {
//         return myFriends;
//     }, 2000)
// }

// function oneFrined(frineds) {
//     console.log(frineds[0]);
// }


