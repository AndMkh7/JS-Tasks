/*
Write a JavaScript function to clone an array.
    Test Data :
    console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
Expected Output :
    [1, 2, 4, 0]
    [1, 2, [4, 0]]
*/


function cloneArray(arr){

    return arr.map(item => Array.isArray(item) ? cloneArray(item) : item)
}

cloneArray(arr);