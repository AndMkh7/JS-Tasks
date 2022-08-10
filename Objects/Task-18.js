/*
given - [{name: "Leo", age: 18}, {name: "John", age: 12},{name: "Leo", age: 22},] ;

return - {Leo: [{age: 18}, {age: 22}], John: [{age: 12}]}*/

let people = [{name: "Leo", age: 18}, {name: "John", age: 12},{name: "Leo", age: 22},];

function groupByField(arr ,key  ){

    let obj = {};
    for (let i = 0 ; i < arr.length; i ++){

        if(obj.hasOwnProperty(arr[i][key])){
            obj[arr[i][key]].push(arr[i])
        } else{
            obj[arr[i][key]] = [arr[i]];
        }
    }
    return obj;
}

console.log(groupByField(people, "name"));