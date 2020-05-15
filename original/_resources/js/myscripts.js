$(function() {

      // ANALYTICS SCRIPT
     $('section a, nav a, footer a').each(function(){
          var parentSection = $(this).parents('section, nav, footer')[0];
          var h1Text = '', h2Text = '', h3Text = '', sectionData = '';

          $(parentSection).find('h1').each(function(){
              h1Text += $(this).text().toLowerCase().replace(/\W+/g, " ").replace(/\s+$/, "");
          });
          $(parentSection).find('h2').each(function(){
              h2Text += $(this).text().toLowerCase().replace(/\W+/g, " ").replace(/\s+$/, "");
          });
          $(parentSection).find('h3').each(function(){
              h3Text += $(this).text().toLowerCase().replace(/\W+/g, " ").replace(/\s+$/, "");
          });
          sectionData = $(parentSection).data('module');

          if (h1Text != '') {
              $(this).data('h1', h1Text).attr('data-h1', h1Text);
          }

          if (h2Text != '') {
              $(this).data('h2', h2Text).attr('data-h2', h2Text);
          }

          if (h3Text != '') {
              $(this).data('h3', h3Text).attr('data-h3', h3Text);
          }
          $(this).data('module', sectionData);
          $(this).attr('data-module', sectionData);
      });


        // $("section.jumbotron-hero").addClass("wow animated fadeIn");
        // $("section .container div").not("section.jumbotron-hero .container, .quote-slider, .schools-grid .caption, #book-tour .item, .quote-item, .carousel-inner, .carousel, #accordion .panel-collapse, #accordion .panel-body, .accordion-list-row, accordion-list-wrap, .accordion-list-row > div, .popover-content > div").addClass("wow animated fadeInUp");


      $('.social-slider').slick({
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });

      // social slider - reint twitter embed on breakpoint change
      $('.social-slider').on('breakpoint', function(event, slick, direction){
          $('#twitter-feed iframe').remove();
          twttr.widgets.createTimeline({
                  sourceType: "profile",
                  screenName: "UCSanDiego"
              },
              document.getElementById('twitter-feed'),
              {
                  width: '265',
                  height: '365',
                  related: 'UCSanDiego,twitterapi'
              });
      });



      // custom vertical slider

        $('.quote-slider').slick({
           vertical: true,
           accessibility:false,
           slidesToShow:2,
           infinite: true,
          slidesToScroll: 1,
          centerMode: true,
           centerPadding: '50px',
           autoplay: false,
          autoplaySpeed: 3000,
           responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  vertical: false,
                  centerMode: false
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
        });

        // custom vertical slider highlight center slide

        $(".slick-slide.slick-center").prev().addClass("slide-highlight");
        $('.quote-slider').on('afterChange', function(){
            $(".slick-slide").removeClass("slide-highlight");
            $(".slick-center").prev().addClass("slide-highlight");

        });

        // $(".quote-slider").slick("slickPrev").addClass("highlight");
          $(".jumbotron-schools .thumbnail").hover(function(){
              $(this).toggleClass("hover");
              $(".jumbotron-schools .thumbnail .caption p, .jumbotron-schools .thumbnail.hover  .caption .btn").animate({
                    opacity: 1,
                  }, 1000, function() {
                    // Animation complete.
                  });
              });


        // homepage multistep form carousel

        $('#book-tour .form-advance').on("click", function(event){
            event.preventDefault();
            // $("#book-tour form").validator('validate');
            // if (!$("#book-tour .form-group.has-error")) {
              $(".carousel").carousel("next");
            // }

            if ($(".carousel-inner .item:eq(1)").hasClass("active")){
              $('#book-tour .form-advance').text("submit");
            } else {
              $('#book-tour .form-advance').text("next");
            }
        });



        // navbar expanding search field


           $(".navbar-form .search-icon.search-expand").on("click", function(){
             $("#inputSearch").removeClass("hidden").animate({
                 opacity: 1,
                 width: 300,
             }, 300);
             $(".input-search").removeClass("hidden").animate({
                 opacity: 1,
                 width: 300,
             }, 300);
             $(".navbar-search .radio-inline").removeClass("hidden").animate({
                 opacity: 1,
             }, 300);
           });
           // code something to click out of search



        $('.navbar-search .radio-inline input').click(function() {

            $('.radio-inline input:not(:checked)').parent('label').removeClass("radio-active");

            $('.radio-inline input:checked').parent('label').addClass("radio-active");

           // if($('.navbar-search .radio-inline input').is(':checked'))
           //   {
           //    $(".navbar-search .radio-inline").toggleClass("radio-active");
           //  }
        });

        // update input placeholder text on radio click
        $('.radio-inline input#searchFaculty, .radio-inline input#searchFacultyMobile').click(function(){
          $("#q").attr("placeholder", "Search Faculty/Staff");
        });

        $('.radio-inline input#searchUCSD, .radio-inline input#searchUCSDMobile').click(function(){
          $("#q").attr("placeholder", "Search UC San Diego");
        });





      // footer divisions dropup

        $(".footer-divisions .dropdown-toggle").click(function(){
          // $(this).text("Divisions and Schools -");

            ($(this).text() === "Divisions and Schools -") ? $(this).text("Divisions and Schools +") : $(this).text("Divisions and Schools -");

            $(".footer-links .container").toggleClass("is-hidden");


          if ($(".footer-divisions .dropup.open")) {
            $(".footer-links").toggleClass("footer-links-blue");
            // $(".footer-divisions .dropdown-toggle").text("Divisions and Schools +");
          }
        });

        $(document).click(function(){
            $(".footer-links").removeClass("footer-links-blue");
            $(".footer-links .container").removeClass("is-hidden");
            $(".footer-divisions .dropdown-toggle").text("Divisions and Schools +");
        });


      // desktop custom nav dropdown

          $(".large-nav .dropdown-toggle").hover(function(){
            $(this).toggleClass("nav-hover");

          });

          $(".yamm-content li").hover(function(){
            $(this).parents(".list-unstyled").toggleClass("bg-blue");

            // finds current hovered nav and matches parent
            var navIndex = $(this).parents(".list-unstyled").index();
            $(".navbar-nav.btn-group .dropdown-toggle").eq(navIndex).toggleClass("nav-hover");

          });


      // desktop custom nav dropdown
          var navHoverIn = function() {
              setTimeout(function(){
                  var primaryNav = $(".main-nav");
                  if (primaryNav.is(':hover')) {
                      primaryNav.addClass("is-hover");
                  }
              }, 500);
          };

          var navHoverOut = function() {
              $(".main-nav").removeClass("is-hover");
          };

          // expand mega nav
          $(".main-nav").hover(navHoverIn, navHoverOut);
          
          //Tab Navigation

          $(".nav-group>a, .navbar-nav li>a").on("focus",function(){

              $(".main-nav").addClass("is-hover");

          });

          $(".nav-group>a, .navbar-nav li>a").on("blur",function(){

              $(".main-nav").removeClass("is-hover");

          });

          // Show and Hide Emergency Alert
          $(".show-alert-emergency").on("click", function(){
            $(".main").css("padding-top", $(".navbar .alert").outerHeight());
            $( ".alert-danger" ).show();
          });

          $(".hide-alert-emergency").on("click", function(){
            $(".main").css("padding-top", "0px");
            $( ".alert-danger" ).hide();
          });

          // Show and Hide Weather Alert
          $(".show-alert-weather").on("click", function(){
            $(".main").css("padding-top", $(".navbar .alert").outerHeight());
            $( ".alert-warning" ).show();
          });

          $(".hide-alert-weather").on("click", function(){
            $(".main").css("padding-top", "0px");
            $( ".alert-warning" ).hide();
          });









          // expand mega nav
          // $(".main-nav").hover(function(){
          //   $(this).toggleClass("is-hover");
          // });

          // var primaryNav = $('.main-nav');

          // primaryNav.hover(function(){


          // setTimeout(function() {
          //    primaryNav.toggleClass("is-hover");
          // }, 500);

          // });

          // $(".main-nav").hover(
          //     function () {
          //         var $this = $(this);

          //         $this.addClass("hover");
          //         setTimeout(function() {
          //             $this.addClass("is-hover");
          //         }, 00); // 2000 is in mil sec eq to 2 sec.
          //     },
          //     function () {
          //         $(this).removeClass("hover is-hover");
          //     }
          // );


          // highlight column when list item is hovered
          // $(".main-nav .list-unstyled li").hover(function(){
          //   // $(this).parents(".nav-group").toggleClass("bg-blue");

          //   $(this).parents(".nav-group").children("a").toggleClass("bg-blue");
          // });

          // highlight column under main nav item when hovered and highlight column when list item is hovered
          $(".nav-group").hover(function(){
            $(this).toggleClass("bg-blue");
            $(this).children("a").toggleClass("bg-blue");
          });

          // // make hover state active on parent anchor
          //  $('.block-menu-block.block ul.menu li ul').hover (
          //   function () {
          //     $(this).parent('.expanded').children('a').addClass("dd-active");
          //   },
          //   function () {
          //     $(this).parent('.expanded').children('a').removeClass("dd-active");
          //   }
          // );


        $(".small-nav .navbar-btn .dropdown-toggle").click(function(){
          $(".small-nav .navbar-btn .dropdown-toggle").not(this).removeClass("open");
          $(this).attr("aria-expanded", "true").toggleClass("open");
          // if ($(this).parents(".navbar-btn").hasClass("open")) {
          //     $(this).toggleClass("open");
          // }

        });
        

        // small nav - after click outside of nav menu close dropdown
        $(document).mouseup(function (e)
          {
              var container = $(".small-nav");
              // if the target of the click isn't the container...
              if (!container.is(e.target) && container.has(e.target).length === 0) // ... nor a descendant of the container
              {
                  $(".navbar-collapse.collapse.in").collapse('hide');
              }
          });


        $(".search-icon.dropdown-toggle").click(
          function(){
          $(this).children().toggleClass("close-icon");

        }
        // ,
        // function(){
        //   $(this).children().attr("src", "img/icon_search.png");
        // }

        );

      // mobile search dropdown prevent dropdown from closing on radio click

         $(".navbar-header").on("click", ".dropdown-menu.dropdown-search", function (e) {
              $(this).parent().is(".open") && e.stopPropagation();
          });

       // accordian styles and functionality

       // make zebra stripes
      var zebraodd = "#fff";
      var zebraeven = "#dfdfe0";
      $("#accordion .panel-default>.panel-heading:odd").css("background-color", zebraodd);
      $("#accordion .panel-default>.panel-heading:odd").siblings().children().css("background-color", zebraodd);

      $("#accordion .panel-default>.panel-heading:odd").parent().css("border-left", "6px solid #f2cc30");
      $("#accordion .panel-default>.panel-heading:odd").css("padding-top", 0);
      $("#accordion .panel-default>.panel-heading:odd").css("padding-bottom", 0);
      $("#accordion .panel-default>.panel-collapse:odd").addClass("accordion-odd");


      $("#accordion .panel-default>.panel-heading:even").css("background-color", zebraeven);
      $("#accordion .panel-default>.panel-heading:even").siblings().children().css("background-color", zebraeven);

      // toggling + and - on accordion
       $("#accordion .accordion-toggle a span").click(function(){
            ($(this).text() === "-") ? $(this).text("+") : $(this).text("-");

            $("#accordion .accordion-toggle a span").not(this).text("+");
        });

       // fade in accordion body text when opening accordion
       // $("#accordion .accordion-toggle a span").click(function(){
       //    if ($(".panel-collapse").hasClass("in")) {
       //        alert("closed");
       //        $(this).children(".list-unstyled").animate({
       //          opacity: 0,
       //        }, 0, function() {

       //        });

       //    } else {
       //      alert("open");
       //      console.log($(this).children(".list-unstyled"));
       //      $(this).children(".list-unstyled").animate({
       //          opacity: 0,
       //        }, 2000, function() {
       //            $(".list-unstyled").animate({
       //              opacity: 1
       //            });
       //        });
       //    }
       //  });


       // bootstrap popover

       $(function(){

            // generalized popover function

            // trigger bootstrap popover
            $('[data-toggle="popover"]').popover({
                html : true,
                content: function() {
                  // find popover link id, diplay content with matching id
                  var popoverName = $(this).attr('id');
                  return $("#" + popoverName + "-content").html();
                }
            });


            $(".pop-over-testimonial-1").popover({
                html : true,
                container : $(".testimonial-wrap"),
                content: function() {
                  return $("#popover-testimonial-content-1").html();
                }
            });

            $(".pop-over-testimonial-2").popover({
                html : true,
                container : $(".testimonial-wrap"),
                content: function() {
                  return $("#popover-testimonial-content-2").html();
                }
            });

            $(".pop-over-testimonial-3").popover({
                html : true,
                container : $(".testimonial-wrap"),
                content: function() {
                  return $("#popover-testimonial-content-3").html();
                }
            });

            $(".pop-over-testimonial-4").popover({
                html : true,
                container : $(".testimonial-wrap"),
                content: function() {
                  return $("#popover-testimonial-content-4").html();
                }
            });


        });

        $(".popover-close").click(function(event) {
            event.preventDefault();
            // $(this).parents(".pop-over-testimonial-1").popover('hide');
          });

       // add hover image to global text links
       $( ".text-link, .text-link-secondary" ).not(".footer-divisions .text-link-secondary, .text-link.no-hover, .text-link.hidden-lg").after( $( "<span class='glyphicon glyphicon-play text-link-hover-arrow' aria-hidden='true'></span>" ) );

        $( ".text-link, .text-link-secondary" ).not(".footer-divisions .text-link-secondary").hover(
          function() {
            $( this ).next().css( "visibility", "visible" );
            $( this ).next().animate({
                    opacity: 0.5,
                  }, 300);
          }, function() {
            $( this ).next().css( "visibility", "hidden" );
            $( this ).next().animate({
                    opacity: 0,
                  }, 300);
          }
        );

        // smooth scrolling for #anchor tags
        $('.jump-links a[href^="#"]').click(function(event){
          event.preventDefault();
          //calculate destination place
          var dest=0;
          if ($(this.hash).offset().top > $(document).height()-$(window).height()) {
            dest=$(document).height()-$(window).height();
          } else {
            dest=$(this.hash).offset().top;
          }
          //go to destination
          $('html,body').animate({scrollTop:dest}, 500,'swing');
        });


      });





      // tab module show video embed when clicking thumbnail
      $(".tab-video-thumb").click(function(){
        $(this).hide();
        $(".tab-video").show();
      });


      function getParameterByName(name, url) {
        if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

  var entryParam = getParameterByName('q');
	if (entryParam != undefined && entryParam !== '') {
		// show the search element
		setSearchValue(entryParam);
		showSearchElement();
	}

	function showSearchElement() {
	   if ($('.search-icon.visible-sm').css('display') == 'block') {
		   $('.dropdown-menu').css('display', 'block');
	   } else {
		   $("#inputSearch").removeClass("hidden").animate({
	       opacity: 1,
	       width: 300,
		   }, 300);

		   $(".input-search").removeClass("hidden").animate({
		       opacity: 1,
		       width: 300,
		   }, 300);
	   }


	   $(".navbar-search .radio-inline").removeClass("hidden").animate({
	       opacity: 1,
	   }, 300);
	}

	function setSearchValue(searchString) {
		$('input[data-id="inputSearch"]').val(searchString);
		$('input[data-id="inputSearchMobile"]').val(searchString);
	}


      	function setSearch(searchType) {
      		if (searchType == 'web') {
      			$('.search-form').attr('action', '/search/index.html');
      			$('.mobile-search-form').attr('action', '/search/index.html');
      			$('input[data-id="inputSearch"]').attr('id', 'q').attr('name', 'search-term');
      			$('input[data-id="inputSearchMobile"]').attr('id', 'q').attr('name', 'search-term');

      		} else if (searchType == 'directory') {
      			$('.search-form').attr('action', 'https://act.ucsd.edu/directory/search');
      			$('.mobile-search-form').attr('action', 'https://act.ucsd.edu/directory/search');
      			$('input[data-id="inputSearch"]').attr('id', 'entry').attr('name', 'entry');
      			$('input[data-id="inputSearchMobile"]').attr('id', 'entry').attr('name', 'entry');
      		}
      	}
      	
        $(function(){
            $('#searchUCSD').click(function() {
                $("form").attr('action', '/search/index.html');
            });
            
            $('#searchFaculty').click(function() {
                $("form").attr('action', 'https://act.ucsd.edu/directory/search');
                $('input[data-id="inputSearch"]').attr('id', 'entry').attr('name', 'entry');
            });
        });
        
        $("#q").keyup(function(event){
            if(event.keyCode == 13){
                $("#search-icon-button").click();
            }
        });

      	function submitForm(e) {
            if (window.location.pathname === '/search/index.html') {
                  formSubmitFunction(e);
            } else {
      		var term = $('input[data-id="inputSearch"]').val();

      		if (term == "" && $('input[data-id="inputSearch"]')[2] !== undefined) {
      			if (!$('input[data-id="inputSearch"]')[2].classList.contains('hidden') && $.trim($('input[data-id="inputSearch"]')[2].value) !== "") {
          			$('input[data-id="inputSearch"]')[2].value = $('input[data-id="inputSearch"]')[2].value;
          			//$('input[data-id="inputSearch"]')[2].setAttribute('name', 'search-term');
          			$('.search-form').submit();
          		}

      		} else if (term == "" && $('input[data-id="inputSearch"]')[1] !== undefined) {
      			if (!$('input[data-id="inputSearch"]')[1].classList.contains('hidden') && $.trim($('input[data-id="inputSearch"]')[1].value) !== "") {
          			$('input[data-id="inputSearch"]')[1].value = $('input[data-id="inputSearch"]')[1].value;
          			//$('input[data-id="inputSearch"]')[1].setAttribute('name', 'search-term');
          			$('.search-form').submit();
          		}

      		} else {
      			if (!$('input[data-id="inputSearch"]').hasClass('hidden') && $.trim($('input[data-id="inputSearch"]').val()) !== "") {
          			$('input[data-id="inputSearch"]')[0].value = $('input[data-id="inputSearch"]')[0].value;
          			//$('input[data-id="inputSearch"]')[0].setAttribute('name', 'entry');
          			$('.search-form').submit();
          		}
      		}
              }


      	}

      	function submitMobileForm() {
      		var term = $('input[data-id="inputSearchMobile"]').val();

      		if (term == "" && $('input[data-id="inputSearchMobile"]')[1] !== undefined) {
      			if (!$('input[data-id="inputSearchMobile"]')[1].classList.contains('hidden') && $.trim($('input[data-id="inputSearchMobile"]')[1].value) !== "") {
          			$('input[data-id="inputSearchMobile"]')[1].value = $('input[data-id="inputSearchMobile"]')[1].value;
          			$('input[data-id="inputSearchMobile"]')[1].setAttribute('name', 'search-term');
          			$('.mobile-search-form').submit();
          		}
      		} else {
      			if (!$('input[data-id="inputSearchMobile"]').hasClass('hidden') && $.trim($('input[data-id="inputSearchMobile"]').val()) !== "") {
          			$('input[data-id="inputSearchMobile"]')[0].value = $('input[data-id="inputSearchMobile"]')[0].value;
          			$('input[data-id="inputSearchMobile"]')[0].setAttribute('name', 'search-term');
          			$('.mobile-search-form').submit();
          		}
      		}

      	}

      	$('.mobile-search-icon').each(function(a) {
      		$(a).on('click', function() {
          		submitMobileForm();
          	});
      	});

      	$($('.mobile-search-icon')[0]).on('click', function() {
      		submitMobileForm();
      	});



        function checkWidth() {
            var windowSize = $(window).width();

            if (windowSize <= 767) {

                  $('.tab-module .panel-collapse:not(".in")')
                    .collapse('show');

            }
        }

        // Execute on load
        checkWidth();
        // Bind event listener
        $(window).resize(checkWidth);
        
        
// stats slider

$('.new-quote-slider').slick({
	dots: true,
	prevArrow: '<a href="#" class="slick-prev" aria-label="Previous" tabindex="0"><i class="fa fa-angle-left"></i></a>',
	nextArrow: '<a href="#" class="slick-next" aria-label="Next" tabindex="0"><i class="fa fa-angle-right"></i></a>',
	customPaging: function(slider, i) {
		return $('<span type="button" data-role="none" tabindex="0" />').text(i + 1);
	},
	arrow: true,
	responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			centerMode: true,
			infinite: true,
			variableWidth: true,
			slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
});

// campaign

$('.jumbotron-campaign').one('inview', function(event, isInView) {
	if (isInView) {
   	// element is now visible in the viewport
    
		// Counter
		$('.counter-value').each(function() {
      	var $this = $(this),
            countTo = $this.attr('data-count');
         $({
            countNum: $this.text()
         }).animate({
            countNum: countTo
         },

         {
            duration: 2000,
            easing: 'swing',
            step: function() {
               $this.text(Math.floor(this.countNum));
            },
            complete: function() {
               $this.text(this.countNum);
					var x = $('.counter-value').html();
					$('.counter-value').html(x.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                  //alert('finished');
               }

         });
      });
      
		// Doughnut Percentage 
		var parseValue = $('#raised').text().replace(/[^0-9]/gi, ''); // Replace what is not a number with nothing
		var raised = parseInt(parseValue, 10); // Always hand in the correct base since 010 != 10 in js
		var remaining = 200 - raised; // Percentage left to completion
		
		// Doughnout Chart
		var ctx = document.getElementById('doughnut').getContext('2d');
		
		// Doughnut Chart
		var chart = new Chart(ctx, {
			// The type of chart we want to create
			type: 'doughnut',
		
			// The data for our dataset
			data: {
				datasets: [{
					label: "Money Raised (Billions)",
					backgroundColor: ["#006a96", "#d8d8d8"],
					borderColor: "#eee",
					data: [200, remaining]
				}]		
		   },
		
			// Configuration options 
			options: {
			   responsive: true,
			   cutoutPercentage: 70,
			   animation: {
				   duration: 2500
			   }
		   }
		});
				    
  } else {
    // element has gone out of viewport
    
  }
});