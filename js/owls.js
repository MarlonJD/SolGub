// ****************************************************************
// jQuery for page scrolling feature - requires jQuery Easing plugin
// ****************************************************************

$(function() {
	$('.page-scroll a').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});



// ****************************************************************
// owl-caurosel
// ****************************************************************			
			
$(document).ready(function() {
 
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
	nav:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
	responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('autoplay.play.owl',[2000])
})
$('.stop').on('click',function(){
    owl.trigger('autoplay.stop.owl')
})
   
});


// ****************************************************************
// Magnific Popup
// 

$(document).ready(function() {
    $('.gallery-item').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: {
        verticalFit: true
      }
  });
});

// ****************************************************************
// UI TO TOP
// 

		$(document).ready(function() {
			/*
			var defaults = {
	  			containerID: 'toTop', // fading element id
				containerHoverID: 'toTopHover', // fading element hover id
				scrollSpeed: 1200,
				easingType: 'linear' 
	 		};
			*/
			
			$().UItoTop({ easingType: 'easeOutQuart' });
			
		});