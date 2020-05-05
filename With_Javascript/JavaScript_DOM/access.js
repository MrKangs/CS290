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


var images = document.getElementsByTagName("img");
console.log("== images:", images);
// Another way to grap elements in the HTML is using tags
// Whenever it has a tag called by img, then it will be called into an HTML collection array

var navlistItems = document.querySelectorAll(".navlist li");
console.log("== navlistItems:", navlistItems);
// If we want to collect all the list element, we use querySelectorAll that contains the list
// This class will be called as NodeList, which behaves same as HTML collection array

/* .navlist li {} */
// This statement is how we call all the list elements in CSS

var rightNavItem = document.querySelector(".navitem.right");
console.log("== rightNavItem:", rightNavItem);
// However, if we just want one element in the list, then we use querySelector for that certain class

console.log("\n===========================");
console.log("== DOM Node Properties");
console.log("===========================");

console.log("== firstPhotoCard.textContent:", firstPhotoCard.textContent);
// This will print the caption of the image, or the text in that section
// In this case, it will print "Luke ready to fight" with whitespace
// since we are printing the content inside the firstPhotoCard text messages

console.log("== firstPhotoCard.innerHTML:", firstPhotoCard.innerHTML);
// This will print the entire HTML inner section such as the following:
/*
        <div class="img-container">
          <img class="person-photo-img" src="https://vignette3.wikia.nocookie.net/starwars/images/6/62/LukeGreenSaber-MOROTJ.png" />
        </div>
        <div class="caption">
          Luke ready to fight.
        </div>
*/

console.log("== images[0].src:", images[0].src);
// This will print the source if there any source that is inside the HTML
// In this case, it will print the URL of the image for the firstPhotoCard

