/*
Write a JavaScript function to check whether an object contains given property.
*/

    let riva ={
    "name":"Rivaldo",
    "lastName" : "Phereira"
}

function search(obj,key){
    return console.log(Object.hasOwn(obj,key))
}

search(riva,"name");