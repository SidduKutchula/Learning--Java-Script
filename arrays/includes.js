const avalabile = [1,2,3,4,5];
const ReadlineSync = require('readline-sync');
const user = ReadlineSync.question('Enti Siddu Babu:');
const Siddu = avalabile.includes(user);
if(Siddu === true){
    console.log('IS available');
}
else{
    console.log('Not available');
}
