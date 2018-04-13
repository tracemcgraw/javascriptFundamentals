//Use conditional statements and comparison operators to create a program with the following results:
//If a person's age is over 25, they can rent a car. If a person's age is over 21, but less than 25, they can have a beer. 
//If a person's age is over 18, but less than 21, they can vote. 
//If a person's age is less than 18, make fun of them for being a child.

var age = 26;

if(age < 18){
    console.log('Your too young!');
} else if( age > 18 && age < 21){
    console.log('You can vote!');
} else if (age >= 21 && age < 25){
    console.log('You can drink!');
} else{
    console.log('You can rent a car!');
}

//I did it!!!! :D