var sayHello = function(){
    console.log("Hello");
}
console.log(sayHello());

//add a name to a function expression

var sayHowdy = function i(){
    console.log("Howdy");
}

//Printing the value
console.log(sayHowdy());

//The variable name changes the functions name from i() to sayHowdy()
//Thus explaining our console.log(sayHowdy()) and NOT console.log(i()) 

//3 different function expression

var name = function fName(){
    console.log("Trace McGraw");
}

console.log(name());

var dinner = function food(){
    console.log("Seitan!");
}
console.log(dinner());

var bedtime = function sleep(){
    console.log(12 +"am");
}
console.log(bedtime());
