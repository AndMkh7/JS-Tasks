/*
8. Write a JavaScript program to create a Clock. Go to the editor
Note: The output will come every second.
    Expected Console Output :
    "14:37:42"
"14:37:43"
"14:37:44"
"14:37:45"
"14:37:46"
"14:37:47"*/

function clock(){

    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    console.log(`${hour}:${minute}:${second}`);
}

setInterval(clock,1000);