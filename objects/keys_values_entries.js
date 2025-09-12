const obj = {
    name : "Siddu",
    age : 20,
    city : "Vizag"
}
console.log(obj);
const entries =Object.entries(obj);
console.log(entries);
const keys = Object.keys(obj);
console.log(keys);
const values = Object.values(obj);
console.log(values);
// checking
const mom = "name" in obj
console.log(mom);
//for loop

for(let nani in Object.entries(obj)){
    console.log(nani);
}