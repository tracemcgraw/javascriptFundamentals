//scope

//gobal scope
// local scope
/*const weather = 'good'; //const is was going to be variable.
function football() {
    // local scope
    let x = 7; // let will only work locally and not work gobally. var could work, but not as secure.
    console.log(x);
}

//gobal scope
football();*/
/*
var count = 4;

if(true){
    var more = 1;
}
 console.log( count + more);

 let count = 4;

 if(ture){
     let more = 1;
 }

 console.log(count + more);// doesn't work 
 */

 //101 gitbook study
 var num = 7;
 let name = 'Trace';
 console.log(num +' '+name);
 {
     let animal = 'pug';
 }

 console.log(animal); //error will happen, because the local code can't be seen outside the block.