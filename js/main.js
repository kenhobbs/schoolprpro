jQuery(function ($) {

    //'use strict';

    // # Style Chooser
    /*(function() {

		var presets = $('.style-chooser ul li');

		$('.style-chooser .toggler').on('click', function(event){
			event.preventDefault();
			$(this).closest('.style-chooser').toggleClass('opened');
		});

		$('.style-chooser ul li a').on('click', function(event){
			event.preventDefault();
			presets.removeClass('active');
			$(this).parent().addClass('active');
			$('#css-preset').removeAttr('href').attr('href', 'css/presets/preset' + $(this).parent().data('preset') + '.css');
		})
	}());*/
    // # Dropdown Menu Animation
	(function () {
		$('.dropdown').on('show.bs.dropdown', function(e){
			$(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
		});

		$('.dropdown').on('hide.bs.dropdown', function(e){
			$(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
		});

	}());

    // # Main Slider
	/*
	(function () {

		var time = 7; // time in seconds

	 	var $progressBar,
	      $bar, 
	      $elem, 
	      isPause, 
	      tick,
	      percentTime;
	 
	    //Init the carousel
	    $("#main-slider").find('.owl-carousel').owlCarousel({
	      slideSpeed : 500,
	      paginationSpeed : 500,
	      singleItem : true,
	      navigation : true,
			navigationText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
			],
	      afterInit : progressBar,
	      afterMove : moved,
	      startDragging : pauseOnDragging,
	      //autoHeight : true,
	      transitionStyle : "fadeUp"
	    });
	 
	    //Init progressBar where elem is $("#owl-demo")
	    function progressBar(elem){
	      $elem = elem;
	      //build progress bar elements
	      buildProgressBar();
	      //start counting
	      start();
	    }
	 
	    //create div#progressBar and div#bar then append to $(".owl-carousel")
	    function buildProgressBar(){
	      $progressBar = $("<div>",{
	        id:"progressBar"
	      });
	      $bar = $("<div>",{
	        id:"bar"
	      });
	      $progressBar.append($bar).appendTo($elem);
	    }
	 
	    function start() {
	      //reset timer
	      percentTime = 0;
	      isPause = false;
	      //run interval every 0.01 second
	      tick = setInterval(interval, 10);
	    };
	 
	    function interval() {
	      if(isPause === false){
	        percentTime += 1 / time;
	        $bar.css({
	           width: percentTime+"%"
	         });
	        //if percentTime is equal or greater than 100
	        if(percentTime >= 100){
	          //slide to next item 
	          $elem.trigger('owl.next')
	        }
	      }
	    }
	 
	    //pause while dragging 
	    function pauseOnDragging(){
	      isPause = true;
	    }
	 
	    //moved callback
	    function moved(){
	      //clear interval
	      clearTimeout(tick);
	      //start again
	      start();
	    }

	}());
	*/

    // # Navigation fixed

	(function () {
		$(window).on('scroll', function(){
			if( $(window).scrollTop()>65 ){
				$('#onepage #navigation .main-nav').addClass('navbar-fixed-top');
			} else {
				$('#onepage #navigation .main-nav').removeClass('navbar-fixed-top');
			};
		});
	}());

    // # Search
    /*
	(function () {

        $('.fa-search').on('click', function() {
            $('.search').fadeIn(500, function() {
              $(this).toggleClass('search-toggle');
            });     
        });

        $('.search-close').on('click', function() {
            $('.search').fadeOut(500, function() {
                $(this).removeClass('search-toggle');
            }); 
        });

    }());
    */

    // # Portfolio Filter
	/*
	(function () {
		
      var $portfolio_selectors = $('.project-filter >ul>li>a');
		var $portfolio = $('.all-project');
		$portfolio.isotope({
			itemSelector : '.filterable-product',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});

    }());
    */

    // # Chart init
	/*
	(function () {
	    $('.skill-circle').easyPieChart( {
			barColor: '#c1c1c1',
			trackColor: '#ffffff',
			rotate: '0',
			lineCap: 'butt',
			scaleLength: '0',
			lineWidth: 10,
			size: 110
		});
	}());
	*/

    // # Parallax Scrolling
    /*
	(function () {

        function parallaxInit() {       
            $("#parallax-one").parallax("50%", 0.3);
            $("#parallax-two").parallax("50%", 0.3);
        }   
        parallaxInit();

    }());
	*/

    // # smoothScroll
	/*
    (function () {
        smoothScroll.init();
    }());
	*/

    // # Pretty Photo
    /*
	(function () {

        $("a[data-gallery^='prettyPhoto']").prettyPhoto({
        	social_tools: false
        });

    }());
	*/

    // # Google Map Customization
    /*
    (function(){
        var usMap;
		// Impact Hub
		//14.557976, -90.729911
		// The UPS Store
		//38.656914, -121.522258
		usMap = new GMaps({
            el: '#usGmap',
            lat: 14.557976,
            lng: -90.729911,
            scrollwheel:false,
            zoom: 15,
            zoomControl : true,
            panControl : false,
            streetViewControl : false,
            mapTypeControl: true,
            overviewMapControl: false,
            clickable: false
        });
        var image = '';
		usMap.addMarker({
			lat: 14.557976,
			lng: -90.729911,
            icon: image,
            animation: google.maps.Animation.DROP,
            verticalAlign: 'bottom',
            horizontalAlign: 'center',
            backgroundColor: '#d3cfcf',
             infoWindow: {
                content: '<div class="map-info"><address>1era Avenida Norte #12<br />Antigua, Sacatapequez<br />Guatemala</address></div>',
                borderColor: 'red',
            }
        });
        var styles = [
            {
              "featureType": "road",
              "stylers": [
                { "color": "#c1c1c1" }
              ]
              },{
              "featureType": "landscape",
              "stylers": [
                { "color": "#e3e3e3" }
              ]
              },{
              "elementType": "labels.text.fill",
              "stylers": [
                { "color": "#808080" }
              ]
              },{
              "featureType": "poi",
              "stylers": [
                { "color": "#ffffff" }
              ]
              },{
              "elementType": "labels.text",
              "stylers": [
                { "saturation": 1 },
                { "weight": 0.1 },
                { "color": "#7f8080" }
              ]
            }
        ];
		usMap.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
            mapTypeId: "map_style"  
        });
		usMap.setStyle("map_style");
    }());
    */

	// # Sequence
	/*
	sc = document.getElementById("services-carousel");
	sco = {
		// Place your Sequence options here to override defaults
		// See: http://sequencejs.com/documentation/#options
		keyNavigation: true,
		fadeStepWhenSkipped: false
	};
	// Launch Sequence on the element, and with the options we specified above
	servicesCarousel = sequence(sc, sco);
	scGoTo = function (slide) {
		servicesCarousel.goTo(slide, 1, true);
	}
	*/

	// Owl Carousel
	(function() {
		$(".owl-carousel").owlCarousel(
			{
				items: 1,
				margin: 10,
				autoHeight: true,
				loop: true,
				dots: true
			}
		);
	}())
	scGoTo = function(pos) {
		var owl = $(".owl-carousel");
		owl.trigger("to.owl.carousel", pos);
	}
});