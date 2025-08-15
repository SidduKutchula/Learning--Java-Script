const f = "MUMMY";
const s = "DADDY";
const t = "Nani";

first = f.length;
second = s.length;
third = t.length;

if(first < second && first < third){
console.log(`${f} is small`);
}
else if(second < first && second < third){
    console.log(`${s}This is Small`);
}
else if(third < first && third < second){
    console.log(`${t} this is Small`);
}
else{
    console.log("No one can be small");
}
