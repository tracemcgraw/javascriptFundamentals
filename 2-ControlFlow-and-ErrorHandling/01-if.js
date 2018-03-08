myArray =[];
var name = 'Trace'
if(name === 'Trace'){
    myArray.push('zero','one','two')
}
!(function(){
    for (let i=2; i< myArray.length; i--){
        const element = myArray[i];
        console.log(element)
    }
})(); 

var who = (function(){
    var name = 'Trace';
    return name;
})();
console.log(who);
console.log(name);