window.addEventListener('click', function(){
    this.console.log(" ==The Window was clicked");
});
// This statemet will execute the function when the user click (left click) anywhere in the webpage

var buttons = document.getElementsByClassName("in-box-button");
for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', /*function() or */ buttonClickListener /*  {
        console.log(" == A button was clicked");
    }*/);
}
// The /* */ is part of the function() section
// This will add an event into the button that will print the string values into the console
// Note that it will print "The window was clicked" and "A button was clicked" will be printed out
// because the button is under the click listener

function buttonClickListener(event){
    console.log(" == A button was clicked, event:", event);
    var button = event.currentTarget;
    var box = button.parentNode;
    box.classList.toggle("highlighted");
}
// This function was in the function from the for loop that can be use for references
// The event will tell you what kind of event, what keyboard key was pressed, what location on the web was click, and more
// the toggle function will do that if the class has the "", then it will remove it. 
// If not, then add the class to the element


var boxes = document.getElementsByClassName("box");
for(var i = 0; i < boxes.length; i++){
    boxes[i].addEventListener('click', function(event) {
        console.log(" == A box was clicked");
        console.log(" == event.target:", event.target);
        console.log(" == event.currentTarget:", event.currentTarget);
        event.stopPropagation();
    });
}
// If we click the button in the box, note that there is a different between target verse currentTarget
// While the currentTarget is the box, the target will be the button when we click the button
// The button is the sub under the box while the box is the sub of window
// Because there is click listener for both box, button, and window, we can see that all the event will occur when we select the button
// currentTarget will the one that will only listen to the element that contains that event while the target will listen the original event
// The event.stopPropagation() will stop event of the behavior of clicking
// If there was not the event.stopPropagation(), then it will do the event of clicking the window


var link = document.getElementById("website-link");
link.addEventListener("click", function(event){
    console.log(" == The link was clicked");
    event.preventDefault();
});
// When we add the event.preventDefault(), it will stop the usual behavior of doing that event
// In this case, when we click the link, usually we get a new tab of the link
// while the event.preventDefault will only print the == The link was clicked on the console
