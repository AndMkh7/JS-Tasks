/*Given the following objects array , get the total number of characters in all the character names*/

function getCharCount(arr){

    return arr.map(function(obj){
        return obj.name.length
    }).reduce((acc, val) => acc + val , 0);

}
getCharCount(arr);