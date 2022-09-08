/*
Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]

 */

const inputArr = [7, 9, 0, -2];

function returnLastElements(arr , element   ){
    if(!element){
        return arr[arr.length-1];
    }
    return arr.slice(arr.length - element);
}

returnLastElements(inputArr , 10 );