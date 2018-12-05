function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}


//$(document).ready(function () {

	
	
//		//Check to see if the window is top if not then display button
//		$(window).scroll(function () {
//			if ($(this).scrollTop() > 100) {
//				$('.scroll-to-top').fadeIn();
//			} else {
//				$('.scroll-to-top').fadeOut();
//			}
//		});

//		//Click event to scroll to top
//		$('.scroll-to-top').click(function () {
//			$('html, body').animate({ scrollTop: 0 }, 800);
//			return false;
//		});
	

//});
