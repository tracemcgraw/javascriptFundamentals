let newArray = ["green", "blue", "yellow"];
newArray.push("purple"); //['green', 'blue', 'yellow', 'purple']
newArray.pop("purple"); //['green', 'blue', 'yellow']

newArray.unshift("red"); //['red', 'green', 'blue', yellow']
newArray.shift("red"); //['green', 'blue', 'yellow']


// Create 4 arrays of 4 elements each. 
// Print to the console the first element of the first array, 
// the second element of the second array, 
// the third element of the third array, 
// and the fourth element of the fourth array.
// Create a blank array. Use the methods above to add and remove items from the array. 
// Print the contents of the array after each action.

var Trace = ['nice','tall',26,true];
var Haley = ['kind','reliable',27,true];
var Mike = ['sweet','gentle',28,true];
var Amanda = ['fun','energetic',31,true];

// console.log(Trace[0]);
// console.log(Haley[1]);
// console.log(Mike[2]);
// console.log(Amanda[3]);

Amanda.push('red head');
console.log(Amanda);
Amanda.pop(31);
Amanda.shift('fun');
Amanda.unshift('fun');
console.log(Amanda);

