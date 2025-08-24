// // function calling
// function siddu(name,mouni){
//     console.log("Siddu baby"+name+mouni);
// }
//   siddu("mom","dad");

// anonymous function

// let siddu = function mom(dad){
//     console.log("Mouni" + dad);
// }
//  siddu("heart");
// console.log(typeof siddu);

// with return
// function sumOf(a,b){
//     return a +b;
// }
//  let result = sumOf(5,5);
// console.log(result)

total = 0;
function siddu(min,max){
    for(i=min; i<=max; i++){
  total = total + i;
    }
    return total;
}
siddu(1,3);
console.log(total);