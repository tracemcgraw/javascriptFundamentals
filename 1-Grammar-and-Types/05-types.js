//boolean
var isGood = true;

//null
var isBad = null;

//undefined
//var x;
//console.log(x);

//number
var num = 7;

//string
var name = 'Trace';

//symbol
const numOrder = Symbol();
const numObject = {
     [numOrder] : 246
};


//Object
let trace = {
    age: 26,
    lastName: 'McGraw'
}

console.log(trace.age);
console.log(trace.lastName);

console.log(typeof trace);