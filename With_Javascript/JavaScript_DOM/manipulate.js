var userSuppliedValue =
  "<img src=x onerror=\"alert('You were hacked!')\" >";
  // If an unauthorize user try to hack the code, then it will alert it the user

var photoCards = document.getElementsByClassName("photo-card");
console.log("== photoCards[0].innerHTML:", photoCards[0].innerHTML);
console.log("== photoCards[0].textContent:", photoCards[0].textContent);
// All the statement above can be found in the access.js file

//photoCards[0].innerHTML = userSuppliedValue;
// This will give an pop up that says that web was hacked when you enter the web page
// This will make it even vulnerable that can modify the code

photoCards[0].textContent = userSuppliedValue;
// This is the same idea from the previous statement, but rather than giving a pop up, it will chnage the image
// This is a better way since the user will not modify the code: just changing the textcontent, not the code
// Always use textcontent to make sure the web is safe, but if you are 110% sure safe, then use innerHTML part

function insertPhotoCard(url, caption) {
  /*
    <section class="photo-card">
      <div class="img-container">
        <img class="person-photo-img" src="https://vignette3.wikia.nocookie.net/starwars/images/6/62/LukeGreenSaber-MOROTJ.png" />
      </div>
      <div class="caption">
        Luke ready to fight.
      </div>
    </section>
   */
// The comments above is the layout how will add an image in the HTML as how the other image was implemented in

   // The following four statements will be the following: 
   // <section class = "photo-card some other class"></secrtion>

    var photoCardSection = document.createElement('section');
   // This will create a new element, we saying as section, into the HTML

   photoCardSection.classList.add("photo-card");
   // This add a class into the section called photo-card

   photoCardSection.classList.add("some-other-class");
   // We can also add another class into the section as we can in HTML
   // We know that we don't use some-other-class in this HTML, but this is an example how can be added a new class into the section

   photoCardSection.setAttribute('id', 'new-photo-card');
   // It will set the attribute that the id says new-photo-card


   // The following three statements will be the following: 
   // <div class="img-container"></div>

   var imgContainerDiv = document.createElement('div');
   // Same idea of creating an element for section
   
   imgContainerDiv.classList.add("img-container");
   // Same idea of creating an class as section

   photoCardSection.appendChild(imgContainerDiv);
   // This will add the div section in the section that the class is Photo-card 


   // The following four statements will be the following: 
   // <img class = "person-photo-img" src = "url(user input)"" />

   var img = document.createElement('img');
   img.classList.add("person-photo-img");
   // These two statements are the same 

   img.src = url;
   // This will add the url as into img.src 
   
   imgContainerDiv.appendChild(img);
   // This will go into the imgContainerDiv


   // The following three statements will be the following: 
   // <div class = "caption">caption (user input)</div>

   var captionDiv = document.createElement('div');
   captionDiv.classList.add("caption");
   // Same idea again

   captionDiv.textContent = caption;
   // This will set the textContent as a user input caption
   // This will be the user input be

   photoCardSection.appendChild(captionDiv);
   // This will go inside the Section, look at line 35


   var photoCardContainer = document.getElementById("photo-card-container");
   // This statement will set the photoCardContainer ID into this function

   photoCardContainer.appendChild(photoCardSection);
   // This will add the photoCardSection into the ID, "photo-card-container"
   // See line 35 to see for the implemtation of Section

   console.log(" ==PhotoCardSection_new_input", photoCardSection);
}

insertPhotoCard('http://placekitten.com/480/480', "Luke as a kitty");
insertPhotoCard('http://placekitten.com/480/480', "Another kitty");