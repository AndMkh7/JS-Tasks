let jj = {
    name: 'John',
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}
function deepClone (value ){
    let result = value || {} ;
    if(typeof value !== 'object' ||(typeof value === 'object' && Number(value) === 0) ||(typeof value === 'object' && Array.isArray(value) === true)){
        result = value;
    } else {
        for (let entries in value){
            if(value.hasOwnProperty(entries)){
                result[entries] = JSON.stringify(value[entries]);
                deepClone(result[entries] , value[entries]);
            }
            else{
                result[entries] = value[entries]
            }
        }
    }
    return result ;
}
let resArr = deepClone(jj);
console.log(jj.name);
console.log(resArr.name);
resArr.name = "Kennedy" ;
console.log(jj.name);
console.log(resArr.name);