let siddu = ["mom" , "dad" , "mouni" , "nani" , "granny" , 1 , 2 ,3 , 4 ,5 ,{what : "Life"}];
// console.log(siddu);
console.log(siddu.length);
// for (let i = 0; i < siddu.length; i++){
//     console.log(siddu[i]);
// }
// for(let mouni of siddu){
// console.log(mouni)
// }

for( let mouni in siddu){
    console.log(siddu[mouni]);
}