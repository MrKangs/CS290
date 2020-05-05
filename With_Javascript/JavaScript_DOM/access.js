console.log(" == document.body:", document.body);
// This statement is how we enter to the document in the body class

console.log(" == document.body.childNodes:", document.body.childNodes);
// We get a list of child class from the HTML

var fourthChild = document.body.childNodes[3];
console.log(" == fourthChild.childNodes:", fourthChild.childNodes);
// This is how to grap information about the fourth child

console.log(" == fourthChild.parentNode:", fourthChild.parentNode);
// We can also to grap the parent node from the chold node

var photoCardContainer = document.getElementById("photo-card-container");
console.log(" == photoCardContainer:", photoCardContainer);
// This will grap the container that has the ID called photo-card-container
// It is good to target something that we want to do

// Not only we access as a ID, we can also access as a class
var photoCards = document.getElementsByClassName("photo-card");
console.log(" == photoCards:", photoCards);
// We get an array that has a size of 4 because there are four photo-card classes in the body
for (var i = photoCards.length - 1; i >= 0 ; i--){
    console.log(" - photoCards[" + i + "]:", photoCards[i]);
}
// When we log it into the console, we can see that it will be as HTML Collection
// Which, it behaves differently than a normal array that when we remove or add, it automattically update itself 
// and move elements to fill the space with a new argument 
// Note that the for loop arguments is better set up rather than i++ if there is an option to remove a class value from the body

var firstPhotoCard = photoCards[0];
firstPhotoCard.remove();
console.log(" ==firstPhotoCard", firstPhotoCard);
// These statements will remove the first photo card class from the HTML 
// However, the data still exsits that we can reappend into the Web
photoCardContainer.appendChild(firstPhotoCard);
console.log(" ==firstPhotoCard", firstPhotoCard);




