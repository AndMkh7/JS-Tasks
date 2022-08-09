/*
Write a function that will copy and return the given object.
*/

function copyObject(obj){
    return console.log(JSON.parse(JSON.stringify(obj)));
}

copyObject();