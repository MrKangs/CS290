window.addEventListener('click', function(){
    this.console.log(" ==The Window was clicked");
});
// This statemet will execute the function when the user click (left click) anywhere in the webpage

var buttons = document.getElementsByClassName("in-box-button");
for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function() /* or buttonClickListener*/  {
        console.log(" == A button was clicked");
    });
}
// This will add an event into the button that will print the string values into the console
// Note that it will print "The window was clicked" and "A button was clicked" will be printed out
// because the button is under the click listener

function buttonClickListener(){
    console.log(" == A button was clicked");
}
// This function was in the function from the for loop that can be use for references

