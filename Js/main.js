$(document).ready(function() {
    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true
    });
});
new fullpage('#fullpage', {
  licenseKey: 'gplv3-license'
});


// PAGE ANIMATIONS

$(".animsition").animsition({
	inClass: 'fade-in',
	outClass: 'fade-out',
	inDuration: 1500,
	outDuration: 800,
	linkElement: '.animsition-link',
	loading: true,
	loadingParentElement: 'body',
	loadingClass: 'animsition-loading',
	loadingInner: '',
	timeout: false,
	timeoutCountdown: 5000,
	onLoadEvent: true,
	browser: ['animation-duration', '-webkit-animation-duration'],
	overlay: false,
	overlayClass: 'animsition-overlay-slide',
	overlayParentElement: 'body',
	transition: function(url) {
		window.location.href = url;
	}
});

