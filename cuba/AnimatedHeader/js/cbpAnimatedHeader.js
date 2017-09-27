/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.cbp-af-header' ),
		container = document.querySelector( '.container' ),
		didScroll = false,
		didClick = false,
		changeHeaderOn = 50;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 0 );
			}
		}, false );
		document.getElementById("myscrollBtn").addEventListener("click", scrollPageclick);
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'cbp-af-header-shrink' );
		}
		else {
			classie.remove( header, 'cbp-af-header-shrink' );
			classie.remove( container, 'shrink-margin' );
		}
		didScroll = false;
	}

	function scrollPageclick() {
		classie.add( header, 'cbp-af-header-shrink' );
		classie.add( container, 'shrink-margin' );
		didClick = true;
		didScroll = true;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();