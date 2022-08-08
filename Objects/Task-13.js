/*
Write a JavaScript function to get a copy of the object where the
keys have become the values and the values the keys*/


let object ={
    "name":"Rivaldo",
    "lastName" : "Phereira"
}

function reverse (obj){
    let newObj ={};

        for (let key in obj){
            newObj[obj[key]] = key;
        }
        return newObj;
   
    }

console.log(reverse(object));
