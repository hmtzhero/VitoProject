$(document).ready(function(){   
	$(".button-collapse").sideNav();
	// $('.carousel').carousel({full_width: true});
	$('.carousel').carousel();
	// window.setInterval(function(){$('.carousel').carousel('next')},3000);
	$('.slider').slider({full_width: true, height:600});
	$('.scrollspy').scrollSpy();

	$("ul.side-nav > li").on('click',function(){
		var li = $(this).attr('class');
		links(li);
	});
});

function links(adonde){
	switch(adonde)
	{
		case 'home': 
			window.location = 'index.html';
			break;
		case 'about': 
			window.location = 'about.html';
			break;
		case 'services':
			window.location = 'services.html';
			break;
		case 'faq':
			window.location = 'faq.html';
			break;
		case 'contact':
			window.location = 'contact.html';
		default:
	}	
}

function iniciar() {
	place = new google.maps.LatLng(25.645452, -100.323105)
	var mapOptions = {
		center: place,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map"),mapOptions);
	var marker = new google.maps.Marker({
        position: place, 
        title: 'VITO CONTRACTORS & TRANSPORTATION,S.A. DE C.V.', 
        map: map, 
    });
} 
