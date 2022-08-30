const array = [-40, 50, 16, 16 , 16 , 150 ];

function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    const centralNum = arr[Math.floor(arr.length/2)];


    let less = [];
    let more =[];
    for (let i = 0 ; i < arr.length ; i++){

        if (i === Math.floor(arr.length/2)){
            continue;
        }
        if (arr[i] <= centralNum) {

            less.push(arr[i]);
        } else {
            more.push(arr[i]);
        }

    }
    return  [...quickSort(less), centralNum , ...quickSort(more)];

}

console.log(quickSort(array));