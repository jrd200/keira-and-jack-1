const myHouse = {
    stories: 2,
    parking: false, 
    bedrooms: 2,
    garden: true, 
    energy: "D",
}
const myCar = { 
    color: "red", 
    wheels: 4, 
    steering: "power",
    seats: 2, 
    mpg: 20,

}

const myFavFilm = {
    title: "Dark Knight", 
    releaseYear: 2008,
    lead: "C. Bale",
}

let person = {
    name: "Ben",
    likesChocolate: true,
};

//If Ben likes chocolate, console.log("Ben loves chocolate")
if (person.name === "Ben") {
    if (person.likesChocolate) {
        console.log("Ben loves chocolate")
    }
    else {
        console.log("Ben hates chocolate")
    }
}
else {
    console.log("Wrong person!")
}


//The condition for the if, and the name Ben should both be read from the object using dot notation.