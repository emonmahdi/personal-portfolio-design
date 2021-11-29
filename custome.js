$(document).ready(function(){

	 $(window).scroll(function(){
	    if (window.scrollY > 20) {
	      $('#navbar').addClass('stickynav');
	    }else{
	      $('#navbar').removeClass('stickynav');
	    }
		});

	 $('.menus ul li a').click(function(){
	 	$('.menus ul li a').removeClass('activeee');
	 	$(this).addClass('activeee');
	 });

	 // Venibox 
	$('.venobox').venobox({
		titleattr: 'data-title',
		spinner: 'spinner-pulse'
	}); 
	 
});

function OpenNav(){
		document.getElementById('myNav').style.width = '100%';
	}

function CloseNav(){
		document.getElementById('myNav').style.width = '0%';
	}

	 	
