let arr1 =[1,2,3,4,5];
let arr2 = arr1;
console.log(arr2);
// shallow copy
//spreadb operator
let arr3 = [...arr1,...arr2];
console.log(arr3);
//for loop
let arr4 = [6,7,8,9,10];
let arr5 = [];
for(let number in arr4){
    arr5.push(number);
}
arr5.push(12);
console.log("Updated: ",arr5)
