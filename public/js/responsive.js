// Script for image to appear with fade in after loading
function loadBackgroundWithFade(divID) {
	var elem   = $(divID),
	    bgImg  = elem.css('background-image'),
	    imgUrl = bgImg.indexOf('"')!=-1 ?
	             bgImg.replace('url("','').replace('")','') :
	             bgImg.replace('url(','').replace(')',''),
	    nwImg = new Image();

	nwImg.src = imgUrl;
	nwImg.onload = function() { elem.fadeIn(1000); }
	nwImg.onerror = function() { alert('error'); }
}

function navbarSetup(window) {
	// Initial resizing
	var width = $( window ).width();
	if (width < 1150) {
		$(".header-nav-menu").hide();
		$(".navbar-condensed-button").show();
	} else {
		$(".header-nav-menu").show();
		$(".navbar-condensed-button").hide();
	};
	// On button click
	$(".navbar-condensed-button").click(function() {
		$(".navbar-condensed-menu").fadeToggle( "slow", "linear" );
	});
}

function navbarResize(window) {
	var width = $( window ).width();
	if (width < 1150) {
		$(".header-nav-menu").hide();
		$(".navbar-condensed-button").show();
	} else {
		$(".header-nav-menu").show();
		$(".navbar-condensed-button").hide();
	}
}

function aboutSetup(window) {
	$("#slider").hover(function() {
		$("#about-popup-answer").slideDown( "slow", function() {});
	});
	var width = $( window ).width();
	if (width < 1150) {
		$(".about-left-pane-image").hide();
		$(".about-right-pane-text").css({"width":"100%", "margin-left":"0%"});
	} else {
		$(".about-left-pane-image").show();
		$(".about-right-pane-text").css({"width":"70%", "margin-left":"30%"});
	}
	var topDiv    = $('.about-pane-title').offset().top;
	var bottomDiv = $('#last-line').offset().top + $('#last-line').height();
	var headerTop = $('.home-menu-container').offset().top;
	var smartPadding = (topDiv + (headerTop - bottomDiv)) / 2;
	$('.about-pane-container').css({"padding-top":String(smartPadding)+"px", "padding-bottom":String(smartPadding)+"px"});
}

function aboutResize(window) {
	var width = $( window ).width();
	if (width < 1150) {
		$(".about-left-pane-image").hide();
		$(".about-right-pane-text").css({"width":"100%", "margin-left":"0%"});
	} else {
		$(".about-left-pane-image").show();
		$(".about-right-pane-text").css({"width":"70%", "margin-left":"30%"});
	}
}

function resumeResize(window) {
	var windowHeight = $(window).height();
	var navbarHeight = $("#specialresize").height();
	var iframeHeight = windowHeight - navbarHeight;
	$(".resume-iframe").css("height", iframeHeight);
}

function drawingSetup() {
	// Image loading
	$('.doodle-drawing-image').each(function() {
			var currentID = this.id;
			var elementID = currentID.replace('image-', '');
			var boxID = "#white-box-" + elementID;
			$('#'+currentID).load(function() { $(boxID).toggleClass("fade-in-background"); });
	});

	// Hover code
	$(".doodle-drawing-box").hover(function() {
		// Handle description popping up
		var elementid = $(this).attr('id');
		var elementnumber = elementid.replace('doodle-', '');
		var descriptionid = '#description-'+elementnumber;
		$(descriptionid).slideToggle( "fast", function() {});
		// Handle image zoom
		var imageid = '#image-'+elementnumber;
		$(imageid).addClass('transition');
	}, function() {
		// Handle description popping up
		var elementid = $(this).attr('id');
		var elementnumber = elementid.replace('doodle-', '');
		var descriptionid = '#description-'+elementnumber;
		$(descriptionid).slideToggle( "fast", function() {});
		// Handle image zoom
		var imageid = '#image-'+elementnumber;
		$(imageid).removeClass('transition');
	});

	$(".doodle-drawing-double").hover(function() {
		// Handle description popping up
		var elementid = $(this).attr('id');
		var elementnumber = elementid.replace('doodle-', '');
		var descriptionid = '#description-'+elementnumber;
		$(descriptionid).slideToggle( "fast", function() {});
		// Handle image zoom
		var imageid = '#image-'+elementnumber;
		$(imageid).addClass('transition');
	}, function() {
		// Handle description popping up
		var elementid = $(this).attr('id');
		var elementnumber = elementid.replace('doodle-', '');
		var descriptionid = '#description-'+elementnumber;
		$(descriptionid).slideToggle( "fast", function() {});
		// Handle image zoom
		var imageid = '#image-'+elementnumber;
		$(imageid).removeClass('transition');
	});
}
