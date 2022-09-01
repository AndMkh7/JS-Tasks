/* Given the following objects array , Is there at least one character taller than 200? */

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

function isTeller(arr){
    let heightObj = arr.map(function(obj){
        return obj.height
    });
    return heightObj.some((item)=>{
        if(item > 200){
            return true;
        }

    })
}

isTeller(arr);