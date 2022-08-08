/*
4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];*/


let readingStatus=(library)=>{

    for (let key in library){
        if (library.hasOwnProperty(key)) {
            if(library[key].readingStatus ){
                console.log("I've already read the " + "'" +  library[key].title +"'" + " book, wich author is " + library[key].author)
            } else {
                console.log("I`m need to read the " +"'" + library[key].title+"'" + " book, which author is " + library[key].author)
            }
        }


    }

}

readingStatus(library);
