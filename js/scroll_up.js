'use strict';

var scroll_up_btn = document.createElement('div');
scroll_up_btn.classList.add('scroll_up');
document.body.appendChild(scroll_up_btn);

window.addEventListener('scroll', function() {

	if (window.pageYOffset > 300) {
		scroll_up_btn.style.display = 'block';
	}
	else {
		scroll_up_btn.style.display = 'none';
	}

});


scroll_up_btn.addEventListener('click', function() {
	
	// jQuery('html, body').animate({
		// 	scrollTop: 0
		// }, {
			// 	easing: 'swing',
			// 	complete: function() {
				// 		jQuery('.scrollUp').hide();

				// 	}
				// });

window.scrollTo(0, 0);


},false);