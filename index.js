const myFunction = () => console.log("I am");

function receivesAFunction(callback) {
    console.log("Good Morning")
    callback();
}

//const returnsANamedFunction = () => console.log("hi");
function returnsANamedFunction() {
    console.log("Hello");
}
