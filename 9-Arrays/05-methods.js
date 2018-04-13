// var numbers = [0,1,2,3,4,5,6,7,8,9];
// let numbersTwo = numbers.map(x => x * 3) //takes each of the elements of the array and multuplies them by 3
// console.log(numbersTwo); //[0, 3, 6, 9, 12, 15, 18, 21, 24, 27]

// var numbers = [0,1,2,3,4,5,6,7,8,9];
// console.log(numbers);

// //First number is start.
// //Second number is end. It will not print the end.
// var numbersTwo = numbers.slice(0,3);
// console.log(numbersTwo);

// //We made a shallow copy, so the 
// //original array is still in tact.
// console.log(numbers);

// var numbersThree = numbers.slice(4,9);
// console.log(numbersThree);

// let newArray = ['a', 'b', 'c', 'd', 'e']
// console.log(newArray); //[a, b, c, d, e]

// newArray.splice(0, 2, 'abc'); //first number is the start index, second number is the number of elements to remove (optional), 3rd parameter is the value to place at the start index
// console.log(newArray); //['abc', 'c', 'd', 'e']

// newArray.splice(3, 1)//removes 1 element at index 3; in this case 'e'
// console.log(newArray); ////['abc', 'c', 'd']

// newArray.splice(1, 'xyz'); //adds the string 'xyz' at index 1
// console.log(newArray); //['abc', 'xyz', 'c', 'd']

var word = ['Hey','Trace', 'you'];

// word = word.map(word => word.length == 3)
word = word.splice(word.lenth == 3)
console.log(word)
