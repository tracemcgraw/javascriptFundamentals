function convertStringToNumber(x) {
    var parsedNumber = parseInt(x);
    if (isNaN(parsedNumber)) { 
    return "Sorry, that is not a number" 
    }
    return parsedNumber;
}

var numberOne = convertStringToNumber("1");
var numberTwo = convertStringToNumber("2");
var numberThree = convertStringToNumber("XYZ"); 

console.log(numberOne);
console.log(numberTwo);
console.log(numberThree); //What will happen here?

//three will get "Sorry, not a number."