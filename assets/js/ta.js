$(document).ready(function(){
	// alert('doc is ready');
	
	$bannerTop = $('nav').outerHeight();
	$('.banner-container').css('margin-top',$bannerTop);


	function resize(){
		if($(window).width() <= 992){
			$('nav ul').css('top',$bannerTop);
		}else{
			$('nav ul').css('top','50%');
			$('nav ul').css('transform','translateY(-50%)');
		}
	}

	resize();
	
	$(window).resize(function(){resize()});


	// $('.hamburger').click(function(){
	// 	$('nav').toggleClass('active');
	// })			
})