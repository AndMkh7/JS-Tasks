/*
given - [{name: "Leo", age: 18}, {name: "John", age: 12},{name: "Leo", age: 22},] ;

return - {Leo: [{age: 18}, {age: 22}], John: [{age: 12}]}*/


let people = [{name: "Leo", age: 18}, {name: "John", age: 12},{name: "Leo", age: 22},];

function groupByName(arr){
    let obj = {};
    for (let i = 0 ; i < arr.length; i ++){

        if(obj.hasOwnProperty(arr[i].name)){
            obj[arr[i].name].push({age:arr[i].age})
        } else{
            obj[arr[i].name] = [{age:arr[i].age}]
        }
    }
    return obj;
}

console.log(groupByName(people));




function groupByFieldWithReduce(arr ,key  ){

    return arr.reduce(function(obj, val){
        (obj[val[key]] = obj[val[key]]??[]).push(val);
        return obj;
    },{}) ;

}

console.log(groupByFieldWithReduce(people, "name"));