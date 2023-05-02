// const a = 5;
// a = 9;
// console.log(a);
// console.log("Hello");

function test() {
    // return "Salam"
    throw new SyntaxError();
    // throw new Error()
    // insan

}

try {
    console.log(test());
} catch (err) {
    if (err instanceof Error) {
        console.log("This is syntax err", err);
    } else {
        console.log("This is just an error");
    }
    // console.log(errorrrrr);
} finally {
    console.log("I always work");
}

console.log("Hello");