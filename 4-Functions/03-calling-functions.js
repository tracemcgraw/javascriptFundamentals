//1 declaring the function
function getSquare(number){
    return number * number;
   }
   
   getSquare(5); //we are calling the function
//recurisve Function
var timer = function(seconds){
    if (seconds > 0){
        console.log(seconds);
        return timer(seconds-1);
    }else{
        return seconds;
    }
};

timer(10);