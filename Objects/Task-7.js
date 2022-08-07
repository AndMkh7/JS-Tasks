/*
7. Write a JavaScript program which returns a subset of a string. Go to the editor
Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"]*/


function subset(str){
    let result=[];
    for (let s = 0 ; s<str.length ; s++){
        for(let e = s+1 ; e < str.length+1 ; e++){
            result.push(str.slice(s,e))
        }
    }
    return result ;
}

alert(subset("dog"));