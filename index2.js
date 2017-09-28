jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('main-ul-nav');
        jQuery('.main-nav ul').toggleClass('main-ul-nav');
 
        e.preventDefault();
    });
});


var mediaLinks = document.getElementsByClassName('media-links')[0]




setTimeout(function(){
mediaLinks.style.opacity = 0.6	
}, 2000)


// this is where the modal starts

var modalContent = document.getElementsByClassName("modal-content")[0];
var currentOpacity = 0;

function opacityIncrease(){
	if (currentOpacity <= 0.7) {
		currentOpacity += .01;
		modalContent.style.opacity = currentOpacity;
	} else {
		clearInterval(stopOpacity);
	}
};

var modal = document.getElementById('myModal');
var currentPadding = 0;
var numToString;

function modalGoingDown(){
	if(currentPadding < 200) {
		currentPadding += 10;
		numToString = currentPadding.toString() + "px";
	
		modal.style.paddingTop = numToString;
	} else {
		clearInterval(stopGoingDown);
	}
};

var stopOpacity;
var stopGoingDown;

window.addEventListener("load", setTimeout(function(){
    modal.style.display = "block";
    stopOpacity = setInterval("opacityIncrease()",50);
    stopGoingDown = setInterval("modalGoingDown()", 50);
    }, 3000)
);


var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

document.addEventListener("keyup", function(event){
	if(event.keyCode === 27){
		modal.style.display = "none";
	}
});




