var elements = document.getElementsByClassName('modal')
var secondLayer = document.getElementsByClassName('second-layer')[0]
var map = document.getElementById('map')


setTimeout(function(){
	for(let i=0;i<elements.length;i++){

	modals = elements[i]
	
	modals.style.opacity = 1;
	map.style.opacity = 1;

	}


}, 1000)


secondLayer.addEventListener('scroll', function(){
	

})







