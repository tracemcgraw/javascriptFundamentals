

// function caps(name){
//     var name = 'trace';
//     var cap = name.toUpperCase([0]);
//     console.log(cap);
// }

// caps(); // capitalized all of it

function capitalize(name){
    var name = 'trace';
    var firstLetter = name.charAt(0);
    var uppercaseFirstLetter = name.charAt(0).toUpperCase();
    var stringWithoutFirstLetter = name.slice(1)
    return name.charAt(0).toUpperCase() + name.slice(1);
    console.log(name.charAt(0).toUpperCase());
    
}
capitalize();
    