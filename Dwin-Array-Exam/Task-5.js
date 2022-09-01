/* Given the following objects array , sort by gender */

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

function sortByGender(arr){
    return arr.sort(function(a, b){
        if (a.gender >  b.gender ){
            return 1
        }
        if (a.gender < b.gender ){
            return  - 1
        }

    })
}

sortByGender(arr);