//reguler function
function name() {
    return "halo"
}

console.log(name());

//reguler function with parameter
let counter = 5
function reg(n) {
    counter+=1
    return n+" "+counter
}

console.log(reg("codeid"));

function one() {
    console.log("start");
}
function play(go) {
    go()
}

play(one);

function play1() {
    setTimeout(function () {
        console.log();
    },1000)
}

play1()

const two = () => {
    console.log("start 3");
}
function play3(go1) {
    go1()
}
play3(two);