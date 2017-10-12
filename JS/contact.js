var elements = document.getElementsByClassName('modal')
var secondLayer = document.getElementsByClassName('second-layer')[0]


setTimeout(function(){
	for(let i=0;i<elements.length;i++){

	modals = elements[i]
	console.log(modals)
	modals.style.opacity = 1;

	}


}, 1000)




