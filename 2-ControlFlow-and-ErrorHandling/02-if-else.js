/*var myName = "trace";

if(myName[0] == myName[0].toUpperCase()){
    console.log("Your name is "+ myName + "!!!!!");
}else{
    console.log(myName[0].toUpperCase() + myName.slice(1));
} */

// Else if Statements

/*
var myAge = 21;
if(myAge >=25){
    console.log('You can rent a car.');
}else if(myAge >= 21){
    console.log('You can drink.');   
}else if(myAge >= 18){
    console.log('You can vote');
}else{
    console.log("Sorry, your too young.")


var str = 'Trace';

if(typeof str==='string'){
    console.log('string cheese');
}else if(typeof str === 'number'){
    console.log('Numbers are cool.');
}else if(typeof x ==='boolean'){
    console.log('Truthiness');
}


var x = {};

switch(typeof x){
     case 'string':
     console.log('string cheese');
     break;
     case 'number':
     console.log('Numbers are cool.');
     break;
     case 'boolean':
     console.log('Truthiness');
     break;
     case 'object':
     console.log('object');
     break;
     default:
     console.log('Trace');

}
*/

// var x = 7;
// var str = (typeof x ==='string') ? 'string cheese.': (typeof x ==='number') ? 'numbers are cool': (typeof x === 'boolean') ? 'truthiness': 'trace';
//  console.log(str);

function fizzBuzz(){
 for(num = 60; num <=100; num++){
 if(num % 5 == 0 && num % 3 ==0){
     console.log('FizzBuzz');
 }else if(num % 3 == 0){
     console.log('Fizz');
 }else if(num % 5 ==0){
     console.log('Bizz');
 }else{
     console.log('nope');
    }
 }
}
fizzBuzz();
 //fix broken code
// var bankAccount = 5000;
// var debt = 4200;
// var difference = bankAccount - debt;

// console.log("I have $" + bankAccount +" in my bank account, and I am $" + debt + " in debt.");

// if (bankAccount - debt > 700) {
//         console.log("I have some extra money. I should pay off my debt. I'll have $" + difference + " leftover.");    
//     } else {
//         console.log("It probably isn't a good time to pay off my debt.");
// }