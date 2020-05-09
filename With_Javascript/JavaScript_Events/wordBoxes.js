var allWords = [];
var currentWord = 0;

function handleNewWordsEntered(event) {
  var text = event.currentTarget.value;
  // This will get the current text input value
  allWords = text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
    .toLowerCase().split(' ');
  currentWord = 0;
  console.log(" == Event was triggered, text:", text);
  console.log(" -- allWords", allWords);
}
// This function will replace all the symbol as space since we are only dealing with words

var wordsInputElement = document.getElementById("words-input");

//wordsInputElement.addEventListener('input', handleNewWordsEntered);
// Setting up like this will always will trigger the event as you see in the console and line 9

wordsInputElement.addEventListener('change', handleNewWordsEntered);
// This will only trigger when it out of focus 


function generateWordElem(word, highlightColor) {
	var wordElem = document.createElement('span');
  wordElem.classList.add('word');
  wordElem.textContent = word;
  if (highlightColor) {
  	wordElem.classList.add('highlight');
  	wordElem.classList.add(highlightColor);
  }
  return wordElem;
}




/* The complete Code for Javascript is here */
/*
var allWords = [];
var currentWord = 0;

function handleWordsChange(event) {
	var wordsText = event.currentTarget.value;
  allWords = wordsText.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '').toLowerCase().split(' ');
  currentWord = 0;
}

function generateWordElem(word, highlightColor) {
	var wordElem = document.createElement('span');
  wordElem.classList.add('word');
  wordElem.textContent = word;
  if (highlightColor) {
  	wordElem.classList.add('highlight');
  	wordElem.classList.add(highlightColor);
  }
  
  return wordElem;
}

function getHighlightColor() {
	var selectedHighlightColorInput = document.querySelector('input[name="highlight-color"]:checked');
  return selectedHighlightColorInput.value;
}

function handleAddWordButtonClick(event) {
	
  var word = allWords[currentWord];
  
  if (word) {
  	var everyNthSelect = document.getElementById('every-nth-select');
  	var everyNth = parseInt(everyNthSelect.value);
  	var highlightColor = null;
  
    if (!((currentWord + 1) % everyNth)) {
      highlightColor = getHighlightColor();
    }

    var wordElem = generateWordElem(word, highlightColor);

    var container = event.currentTarget.parentNode.parentNode;
    var wordsContainer = container.querySelector('.words-container');

    wordsContainer.appendChild(wordElem);
    currentWord = (currentWord + 1) % allWords.length;
  }
  
}

function handleWordsContainerClick(event) {
	
  var wordsContainer = event.currentTarget;
  var clickedElem = event.target;
 
	if (clickedElem.classList.contains('word')) {
  	wordsContainer.removeChild(clickedElem);
  } else if (clickedElem.parentNode.classList.contains('word')) {
  	wordsContainer.removeChild(clickedElem.parentNode);
  }
  
}

var wordsInput = document.getElementById('words-input');
wordsInput.addEventListener('change', handleWordsChange);

var addWordButtons = document.getElementsByClassName('add-word-button');
for (var i = 0; i < addWordButtons.length; i++) {
	addWordButtons[i].addEventListener('click', handleAddWordButtonClick);
}

var wordsContainers = document.getElementsByClassName('words-container');
for (var i = 0; i < wordsContainers.length; i++) {
	wordsContainers[i].addEventListener('click', handleWordsContainerClick)
} 

*/