
// for (var i /*variable section*/ in obj /*object section*/) {
//     console.log(i) /*statement*/
//   }
  
//   //Write a for in loop that capitalizes the first letter of studentName
  
//   var student = {
//       name: 'trace',
//       level: 'new',
//       degree: 'JavaScript',
//       week: 1,
//   };

//   for(var item in student){
//       console.log(student[item]);
//   }
var studentName = 'trAce'
var caps = ''

 for(var n in studentName){
     if(n == 0){
     caps = studentName[n].toUpperCase();
     }else{
     caps += studentName[n].toLowerCase();
     }
 }
 console.log(caps); 

