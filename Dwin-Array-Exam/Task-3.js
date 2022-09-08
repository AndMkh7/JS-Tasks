/*Given the following objects array , get the total number of characters in all the character names*/

function getCharCount(arr){

    return arr.reduce((acc, obj) => acc + obj.name.length , 0);

}
getCharCount(arr);