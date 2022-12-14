/*
1. Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
    var student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 };
Sample Output: name,sclass,rollno*/

let  student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

let  getKeys =(student)=>{
    for (let key in student){
        console.log(key)
    }
}

getKeys(student);

let showKeys =(object)=>Object.keys(object);

console.log(showKeys(student));