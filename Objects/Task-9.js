/*9. Write a JavaScript program to calculate the area and perimeter of a circle.
 Note : Create two methods to calculate the area and perimeter.
    The radius of the circle will be supplied by the user.*/


function circle(radius){

    let area =  (Math.PI*(radius**2)).toFixed(3) ;
    let perimeter = (2 * Math.PI* radius).toFixed(3);

    return alert(`Area of this circle is equal ${area}, \n
     Perimeter of this circle is equal ${perimeter}`)

}

circle(10);