/* Given the following objects array , get the total number of characters
by eye color (hint. a map of eye color to count) */

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

function getCountByColor(arr, eye_color) {
    let newArr = arr.filter(function (obj) {
        return eye_color === obj.eye_color
    })
    return newArr.reduce((acc, obj) => acc + obj.name.length , 0);
}


getCountByColor(characters, `blue`)