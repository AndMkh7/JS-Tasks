let number = 11122334444655587 ;
let obj = {} ;

function happyNumber(num){
    let numStr = num.toString();
    let i;
    let happyNum;
    for ( i = 0 ; i < numStr.length ; i++){
        if (obj[numStr[i]]){
            obj[numStr[i]]++
        } else {
            obj[numStr[i]] = 1
        }
    }

    for (let key in obj){
        if(key === obj[key].toString()){
            happyNum = obj[key]
            console.log(`happy number is ${happyNum}`);
        } else{
            console.log(`Happy number is not defined`);
        }
    }
    debugger;

}

happyNumber(number);
