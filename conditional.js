const ReadlineSync = require("readline-sync");
const siddu = ReadlineSync.question("ENter Your Age Babe...");
const nani = siddu % 3;
const mouni = siddu % 5;
if(nani === 0){
    console.log("Siddu Baby...");
}
else if(mouni === 0){
    console.log("Mommmmmm");
}