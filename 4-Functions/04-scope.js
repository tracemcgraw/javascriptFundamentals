// var name = "Trace"; global scope can be used through out the function.

// function fullName(Peter){
//        var nameN = "Meg";
//         console.log(nameN);
// }
// fullName();

function fullName(Peter){
    let nameN = "Meg"; //local scope can only be seen and used in function
     console.log(nameN);
}
console.log(nameN)