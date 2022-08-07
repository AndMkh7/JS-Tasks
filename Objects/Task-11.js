/*15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.*/

let person = {
    name: "pradeep",
    age: 24,
    sex: "male",
    telNumber :"+37496123456",
    city : "Vanadzor",
};


let arr=[];

function toArr(){

    for (const [key, value] of Object.entries(person)) {
        arr.push([key , value])
    } return arr;

}

console.log(toArr(person));
