// function findCharacter(text , char){
// const result = text.indexOf(char);
// if(result === -1){
//     return "Char is Not Present.";
//  }
//  else{
//     return "Char is Present.";

//  }
//  return result;
// }
// console.log(findCharacter("Siddu Baby","S"));

const findCharacter = (text,char) => text.indexOf(char) === -1?"Char Not Found":"Char is Found";
const result = findCharacter("Siddu baby Love U","S");
console.log(result);