/*
6. Write a Bubble Sort algorithm in JavaScript.
Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
    Sample Data: [6,4,0, 3,-2,1]
Expected Output : [-2, 0, 1, 3, 4, 6]*/


let bubbleSort=(arr)=>{
    for (let i=0; i<arr.length ; i++){
        for ( i=0; i<arr.length-1 ; i++){
            if(arr[i]>arr[i+1]){
                let x ;
                x = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = x ;
            }
        }
    }

    return arr;
}

console.log(bubbleSort([-5 , 6 , 7 ,1 , -10]))