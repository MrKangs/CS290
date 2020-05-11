
var twit = document.getElementsByClassName("twit");
var twitContainer = document.getElementsByClassName("twit-container");
var textInput = document.getElementById("twit-text-input").value;
var authorInput = document.getElementById("twit-author-input").value;
var afterInit = 8;
var twitData = [];

function getTwitInformation(){
  if(twitData["length"] == 0){
    for (var i = 0; i < twit.length; i++){
      var twitAuthor = twit[i].querySelector(".twit-author").textContent;
      var twitMessage = twit[i].querySelector(".twit-text").textContent;
      twitData.push({Author: twitAuthor, Message: twitMessage});
    }
  }
  else if(twit.length < 8){
    var twitAuthor = twit[twit.length -1].querySelector(".twit-author").textContent;
    var twitMessage = twit[twit.length -1].querySelector(".twit-text").textContent;
    twitData.push({Author: twitAuthor, Message: twitMessage});
    afterInit++;
  }
  else{
    var twitAuthor = twit[afterInit].querySelector(".twit-author").textContent;
    var twitMessage = twit[afterInit].querySelector(".twit-text").textContent;
    twitData.push({Author: twitAuthor, Message: twitMessage});
    afterInit++;
  }
}

function displayCreateNewTwit(){
  var element = document.getElementById("create-twit-modal");
  element.classList.remove("hidden");
}

function displayDarkerBackground(){
  var element = document.getElementById("modal-backdrop");
  element.classList.remove("hidden");
}

function removeCreateNewTwit(){
  var modalPage = document.getElementById("create-twit-modal");
  modalPage.classList.add("hidden");
}

function removeDarkerBackground(){
  var backGround = document.getElementById("modal-backdrop");
  backGround.classList.add("hidden");
}

function clearInput(){  
  document.getElementById("twit-text-input").value = '';
  document.getElementById("twit-author-input").value = '';
}

function insertTwit(Author, Message){
 
  var twitArticle = document.createElement('article');
  twitArticle.classList.add("twit");
  
  var twitIcon = document.createElement('div');
  twitIcon.classList.add("twit-icon");
  twitIcon.innerHTML = '<i class = "fas fa-bullhorn"></i>';
  twitArticle.appendChild(twitIcon);
  
  var twitContent = document.createElement('div');
  twitContent.classList.add("twit-content");
  twitArticle.appendChild(twitContent);
  
  var twitText = document.createElement('p');
  twitText.classList.add("twit-text");
  twitText.textContent = Message;
  twitContent.appendChild(twitText);
  
  var twitAuthor = document.createElement('p');
  twitAuthor.classList.add("twit-author");
  twitContent.appendChild(twitAuthor);
  
  var userName = document.createElement('a');
  userName.href = "#";
  userName.textContent = Author;
  twitAuthor.appendChild(userName);
  
  var twitContainer = document.getElementsByClassName("twit-container");
  twitContainer[0].appendChild(twitArticle);
  removeDarkerBackground();
  removeCreateNewTwit();
  clearInput();
  getTwitInformation(); 
}

function reAdd(Author, Message){
  var twitArticle = document.createElement('article');
  twitArticle.classList.add("twit");
  
  var twitIcon = document.createElement('div');
  twitIcon.classList.add("twit-icon");
  twitIcon.innerHTML = '<i class = "fas fa-bullhorn"></i>';
  twitArticle.appendChild(twitIcon);
  
  var twitContent = document.createElement('div');
  twitContent.classList.add("twit-content");
  twitArticle.appendChild(twitContent);
  
  var twitText = document.createElement('p');
  twitText.classList.add("twit-text");
  twitText.textContent = Message;
  twitContent.appendChild(twitText);
  
  var twitAuthor = document.createElement('p');
  twitAuthor.classList.add("twit-author");
  twitContent.appendChild(twitAuthor);
  
  var userName = document.createElement('a');
  userName.href = "#";
  userName.textContent = Author;
  twitAuthor.appendChild(userName);
  
  var twitContainer = document.getElementsByClassName("twit-container");
  twitContainer[0].appendChild(twitArticle);
}

function removeDOM(){
  var searchInput = document.getElementById("navbar-search-input").value.toLowerCase();
  var i = 0;
  while(twit[0]){
    twit[0].remove();
  }
  for (var j = 0; j < twitData.length; j++){
    reAdd(twitData[j].Author, twitData[j].Message);
  }
  for(var k = 0; k< twitData.length; k++){
    var twitText = twitData[k].Message.toLowerCase();
    var twitAuthor = twitData[k].Author.toLowerCase();
    if(!twitText.includes(searchInput) && !twitAuthor.includes(searchInput)){
      twit[i].remove();
    }
    else{
      i++;
    }
  }
}

function searchQuery(){
  if (twitData["length"] == 0){
    getTwitInformation();
  }
  var searchInput = document.getElementById("navbar-search-input").value.toLowerCase();
  for(var i = 0; i< twitData.length; i++){
    var twitText = twitData[i].Message.toLowerCase();
    var twitAuthor = twitData[i].Author.toLowerCase();
    if(!twitText.includes(searchInput) && !twitAuthor.includes(searchInput)){
      twit[i].classList.add("hidden");
    }
    else{
      twit[i].classList.remove("hidden");
    }
  }
}

document.getElementById("create-twit-button").addEventListener("click", displayCreateNewTwit);
document.getElementById("create-twit-button").addEventListener("click", displayDarkerBackground);

document.getElementsByClassName("modal-accept-button")[0].addEventListener("click", function(){
  var textInput = document.getElementById("twit-text-input").value;
  var authorInput = document.getElementById("twit-author-input").value;
  if (textInput == '' && authorInput == ''){
    alert("Both Twit Message and Author Name fields are missing!");
    return false;
  }
  if(textInput == ''){
    alert("Twit Message is missing!");
    return false;
  }
  if(authorInput == ''){
    alert("Author Name is missing!");
    return false;
  }
  else{
    insertTwit(authorInput, textInput);
  }
  
});

document.getElementsByClassName("modal-close-button")[0].addEventListener("click", removeDarkerBackground);
document.getElementsByClassName("modal-close-button")[0].addEventListener("click", removeCreateNewTwit);
document.getElementsByClassName("modal-close-button")[0].addEventListener("click", clearInput);

document.getElementsByClassName("modal-cancel-button")[0].addEventListener("click", removeDarkerBackground);
document.getElementsByClassName("modal-cancel-button")[0].addEventListener("click", removeCreateNewTwit);
document.getElementsByClassName("modal-cancel-button")[0].addEventListener("click", clearInput);

document.getElementById("navbar-search-input").addEventListener("input", searchQuery);
document.getElementById("navbar-search-button").addEventListener("click", removeDOM);