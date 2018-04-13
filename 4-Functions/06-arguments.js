function numbers(x,y){
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
}
numbers(4,7);

//the console.log(argument[]) creates something like an array. 
//our real arguments are 4 and 7 and they pass the through the parameters.
//the result of the first console.log(arguments) creates an object with all of our values in order.
//console.log(arguments[]) pulls items out of object.