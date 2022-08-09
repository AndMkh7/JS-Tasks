/*
given - [{name: "aa", age: 12}, {name: "aaa", age: 12},{name: "aaaa", age: 22},] ;

return - {12: [{name: "aa"}, {name: "aaa"}], 22: [{name: "aaaa"}]}*/


let people = [{name: "aa", age: 12}, {name: "aaa", age: 12},{name: "aaaa", age: 22},]

function sortByAge(arr){
    let obj = {};
    for (let i = 0 ; i < arr.length; i ++){

        if(obj.hasOwnProperty(arr[i].age)){
            obj[arr[i].age].push({name:arr[i].name})
        } else{
            obj[arr[i].age] = [{name:arr[i].name}]
        }
    }
    return obj;
}

console.log(sortByAge(people));


