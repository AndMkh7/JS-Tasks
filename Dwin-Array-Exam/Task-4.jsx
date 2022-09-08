/* Given the following objects array , get the total number of characters
by eye color (hint. a map of eye color to count) */

const arr = [
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
function groupByEyeColor(arr ){
    let obj = {};
    for (let i = 0 ; i < arr.length; i ++){
        if(obj.hasOwnProperty(arr[i].eye_color)){
            obj[arr[i].eye_color] +=  arr[i].name.length
        } else{
            obj[arr[i].eye_color] = arr[i].name.length
        }
    }
    return obj;
}
console.log(groupByEyeColor(arr));