const S = "Love U";
let M = "aeiouAEIOU";
let flag =false;
for(let char of S){
    if(M.includes(char)){
        console.log(`${char} is a vowel`);
        flag = true;
        break;
    }
    else{
        console.log(`${char} not a vowel`);
        flag = false;
    }
    if(flag){
        flag = true;
        break;
    }
    else{
     flag =false;
    }
}

