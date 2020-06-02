function createPhotoCard(photoURL, caption) {

  var photoCardContext = {
    url : photoURL,
    caption : caption
    // These names must match the placeholders from the photoCard.handlebars 
  };

  var photoCardHtml = Handlebars.templates.photoCard(photoCardContext);
  // We are passing the url and caption to the photoCard URL and caption
  // To the handlebars in the photoCard.handlebars
  // It will return as a html value

  console.log("== photoCardHTML:", photoCardHtml);

  return photoCardHtml

  // The code above is the exact same yet less complicated code

/*
  var photoCardSection = document.createElement('section');
  photoCardSection.classList.add('photo-card');

  var imgContainerDiv = document.createElement('div');
  imgContainerDiv.classList.add('img-container');
  photoCardSection.appendChild(imgContainerDiv);

  var img = document.createElement('img');
  img.classList.add('person-photo-img');
  img.src = photoURL;
  imgContainerDiv.appendChild(img);

  var captionDiv = document.createElement('div');
  captionDiv.classList.add('caption');
  captionDiv.textContent = caption;
  photoCardSection.appendChild(captionDiv);

  return photoCardSection;
  */

  

}


function handleModalAcceptClick() {

  var photoURL = document.getElementById('photo-url-input').value.trim();
  var caption = document.getElementById('photo-caption-input').value.trim();

  if (!photoURL || !caption) {
    alert("You must fill in all of the fields!");
  } else {

    var newPhotoCard = createPhotoCard(photoURL, caption);
    var photoCardContainer = document.querySelector('.photo-card-container');
    photoCardContainer.appendChild(newPhotoCard);
    hideModal();

  }

}


function showModal() {

  var modal = document.getElementById('add-photo-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');

  modal.classList.remove('hidden');
  modalBackdrop.classList.remove('hidden');

}


function clearModalInputs() {

  var modalInputElements = document.querySelectorAll('#add-photo-modal input')
  for (var i = 0; i < modalInputElements.length; i++) {
    modalInputElements[i].value = '';
  }

}


function hideModal() {

  var modal = document.getElementById('add-photo-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');

  modal.classList.add('hidden');
  modalBackdrop.classList.add('hidden');

  clearModalInputs();

}


/*
 * Wait until the DOM content is loaded, and then hook up UI interactions, etc.
 */
window.addEventListener('DOMContentLoaded', function () {

  var addPhotoButton = document.getElementById('add-photo-button');
  addPhotoButton.addEventListener('click', showModal);

  var modalAcceptButton = document.getElementById('modal-accept');
  modalAcceptButton.addEventListener('click', handleModalAcceptClick);

  var modalHideButtons = document.getElementsByClassName('modal-hide-button');
  for (var i = 0; i < modalHideButtons.length; i++) {
    modalHideButtons[i].addEventListener('click', hideModal);
  }

});
