// $(document).ready(function() {
// 	$('#fullpage').fullpage({
// 		//Navigation
// 		menu: '#menu',
// 		lockAnchors: false,
// 		anchors:['firstPage', 'secondPage'],
// 		navigation: true,
// 		navigationPosition: 'right',
// 		navigationTooltips: ['firstSlide', 'secondSlide'],
// 		showActiveTooltip: false,
// 		slidesNavigation: true,
// 		slidesNavPosition: 'bottom',

// 		//Scrolling
// 		css3: true,
// 		scrollingSpeed: 700,
// 		autoScrolling: true,
// 		fitToSection: true,
// 		fitToSectionDelay: 1000,
// 		scrollBar: false,
// 		easing: 'easeInOutCubic',
// 		easingcss3: 'ease',
// 		loopBottom: false,
// 		loopTop: false,
// 		loopHorizontal: true,
// 		continuousVertical: false,
// 		continuousHorizontal: false,
// 		scrollHorizontally: false,
// 		interlockedSlides: false,
// 		dragAndMove: false,
// 		offsetSections: false,
// 		resetSliders: false,
// 		fadingEffect: false,
// 		normalScrollElements: '#element1, .element2',
// 		scrollOverflow: false,
// 		scrollOverflowReset: false,
// 		scrollOverflowOptions: null,
// 		touchSensitivity: 15,
// 		normalScrollElementTouchThreshold: 5,
// 		bigSectionsDestination: null,

// 		//Accessibility
// 		keyboardScrolling: true,
// 		animateAnchor: true,
// 		recordHistory: true,

// 		//Design
// 		controlArrows: true,
// 		verticalCentered: true,
// 		sectionsColor : ['#ccc', '#fff'],
// 		paddingTop: '3em',
// 		paddingBottom: '10px',
// 		fixedElements: '#header, .footer',
// 		responsiveWidth: 0,
// 		responsiveHeight: 0,
// 		responsiveSlides: false,
// 		parallax: true,
// 		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

// 		//Custom selectors
// 		sectionSelector: '.section',
// 		slideSelector: '.slide',

// 		lazyLoading: true,

// 		//events
// 		onLeave: function(index, nextIndex, direction){},
// 		afterLoad: function(anchorLink, index){},
// 		afterRender: function(){},
// 		afterResize: function(){},
// 		afterResponsive: function(isResponsive){},
// 		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
// 		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
// 	});
// });
// new fullpage('#fullpage', {
//   licenseKey: 'gplv3-license'
// });


// PAGE ANIMATIONS

$(document).ready(function() {
	$(".animsition").animsition({
	  inClass: 'fade-in',
	  outClass: 'fade-out',
	  inDuration: 1500,
	  outDuration: 800,
	  linkElement: '.animsition-link',
	  // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
	  loading: true,
	  loadingParentElement: 'body', //animsition wrapper element
	  loadingClass: 'animsition-loading',
	  loadingInner: '', // e.g '<img src="loading.svg" />'
	  timeout: false,
	  timeoutCountdown: 5000,
	  onLoadEvent: true,
	  browser: [ 'animation-duration', '-webkit-animation-duration'],
	  // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	  // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	  overlay : false,
	  overlayClass : 'animsition-overlay-slide',
	  overlayParentElement : 'body',
	  transition: function(url){ window.location.href = url; }
	});
  });


// IMAGE SLIDER

$('.main-carousel').flickity({
	// options
	cellAlign: 'left',
	contain: true
  });