//arrow function

// let sum = (a,b) =>  a + b;
//       console.log(sum(10,20));

// let siddu = (mom,dad) => {
//     if(mom >dad){
//         return mom + dad;
//         }
//         else{
//             return mom - dad;
//         }
// } 
// console.log(siddu(100,999));
// using ternary operator in arrow function
const siddu =(mom,dad) =>mom > dad ? mom + dad : mom - dad;
console.log(siddu(100, 999));