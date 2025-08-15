const ReadlineSync = require("readline-sync");
const num = ReadlineSync.question("Enter Ur Number Baby...?");
const siddu =num % 2;
const mouni =num % 5;
if(siddu === 0){
    console.log(` ${siddu} This is Even`)
}
else{
    if(mouni === 0){
        console.log(`${mouni} it is div by 5`)
    }
    else{  
        console.log("Siddu Babyyy")
    }
    console.log("This is Odd.")
}