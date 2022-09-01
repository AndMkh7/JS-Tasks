const p1 = function promise1(){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            resolve(console.log(8));
        },1000);
    });
} ;

const p2 = function promise1(){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            resolve(console.log(8));
        },2000);
    });
};
const p3 = function promise1(){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            resolve(console.log(8));
        },3000);
    });
};
const p4 = function promise1(){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            reject(console.log(8));
        },4000);
    });
}


let arr = [p1, p2, p3, p4];

function doPromise(array){
    for (let i = 0 ; i < array.length ; i++){
        if (array[i].resolve){
            return array[i].then(array[i+1]);
        }
        return "The function was rejected !"
    }
}

doPromise(arr);