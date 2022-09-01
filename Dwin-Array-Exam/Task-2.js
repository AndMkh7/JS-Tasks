/*Given the following objects array , get an array of all first names*/

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',

    },
];

function getFirstName(arr){
    let result = [];
   let arrNames =arr.map(function(obj){
       return obj.name
   }) ;

   let splittedArr = [];
   for(let i = 0 ; i < arrNames.length ; i++ ){
       splitedArr.push(arrNames[i].split(" "));
   }

   for (let j = 0 ; j < splittedArr.length ; j++){
       result.push(splittedArr[j][0]);
   }

return result ;
}
getFirstName(characters);