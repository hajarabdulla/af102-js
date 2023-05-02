// a=5;

// a==5

// let a =5

console.log("First");

for (let i = 0; i <= 10000; i++) {
    if (i == 10000) {
        console.log("For loop");
    }
}

setTimeout(() => {
    console.log("Middle");
}, 3000)


setTimeout(() => {
    console.log("Zero");
}, 0)

console.log("End");

const promise = new Promise(res => res("from promise"))

promise.then(val => console.log(val))


// first for end from zero promise middle 
// first for end from promise zero  middle 