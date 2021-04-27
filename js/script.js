$(document).ready(function() {


    $('details').bind('click', function() {
        $('details').removeAttr('open')
        $(this).attr('open')
        $("summary").removeClass('accordion__active')
        $('.card-arrow').removeClass('arrow-active')
        $(this).find("summary").toggleClass('accordion__active')
        $(this).find('.card-arrow').toggleClass('arrow-active')
    
	})

    var items = $('#v-nav>ul>li').each(function() {
        $(this).click(function() {
            //remove previous class and add it to clicked tab
            items.removeClass('current');
            $(this).addClass('current');

            //hide all content divs and show current one
            $('#v-nav>div.tab-content').hide().eq(items.index($(this))).show();

            window.location.hash = $(this).attr('tab');
        });
    });


    $('.close-this_1').bind('click', function() {
        $('#map').removeClass('POPOPEN')
    })

    $('.close-this_2').bind('click', function() {
        $('#map').removeClass('POPOPEN')
    })





    

    $('#mapPopup').bind('click', function() {
        $('#map').addClass('POPOPEN')
    })

    $('#mapPopup2').bind('click', function() {
        $('#map').addClass('POPOPEN')
    })




    let remind = true

	let wW = $(window).width()

	if (wW <= 991) {
    	$('.search').appendTo('.navbar > .container')
	}


	$('#find').bind('click', function() {
	    let navbarWidth = $('.navbar-nav').width(),
	    searchWidth = $('#find').width()
	    // $('.navbar').toggleClass('navbar-search-open')
	    if (remind == true) {
	        // $('.search__field').addClass('search-open

	        if (wW <= 991) {
	            $('.search__btn').addClass('search__btn_open')
	            $(".search__field").animate({
	                width: 260,
	                opacity: '1',
	                zIndex: '1'
	            });
	        } else {
	            $('.search__btn').addClass('search__btn_open')
	             $(".search__field").animate({
	                width: navbarWidth + searchWidth,
	                opacity: '1',
	                zIndex: '1'
	            });


	            $('.navbar-nav').animate({
	                opacity: '0',
	                
	            });
	        }
	        
	        // $(".search__field").animate({
	        //         width: navbarWidth
	        //     });
	        remind = false
	    } else if (remind == false) {
	        // $('.search__field').removeClass('search-open')
	        $('.search__btn').removeClass('search__btn_open')
	        $(".search__field").animate({
	                width: '0',
	                opacity: '0',
	                zIndex: '-1'
	                // opacity: '0'
	            });

	        $('.navbar-nav').animate({
	                opacity: '1',
	                
	            });

	        remind = true


	    }
	    
	})

	
	$(document).click( function(e){
	    if ( $(e.target).closest('.info__phone').length ) {
	        $('.phone-more').addClass('d-block')

	        // $('.hover-arrow').animate({
	        //         marginTop 'rotate(180deg)',
	                
	        //     });
	        // $('.hover-arrow').css('transform', 'rotate(180deg)');
	        return;
	    }
	    // клик снаружи элемента 
	    $('.phone-more').removeClass('d-block')
	    $('.hover-arrow').css('transform', 'rotate(0deg)');
	});

	$('.nav-item_exit').bind('click', function() {

	    // $(".navbar-collapse").animate({
	    //             opacity: '0',
	    //             marginTop: '-100%'
	    //         });
	    $('.navbar-collapse').removeClass('show')
	    
	})

	$('.phone-more__btn').bind('click', function() {
	    $('.call-me').addClass('call-me_open')

	    // $(".call-me").animate({
	    //             transform: 'scale(1)',
	    //             opacity: '1'
	    //         });
	})

	$('.close-callForm').bind('click', function() {
	    $('#callMe').removeClass('call-me_open')
	})

	$('.call-me__close').bind('click', function() {
	    $('#callMe').removeClass('call-me_open')
	})

})


    // $('.card-header').bind('click', function() {
    //     $(this).toggleClass('accordion__active')
    //     $(this).find('.card-arrow').toggleClass('arrow-active')
    // })


       // if (location.hash) {
    //     showTab(location.hash);
    // }
    // else {
    //     showTab("tab1");
    // }

    // function showTab(tab) {
    //     $("#v-nav li:[tab*=" + tab + "]").click();
    // }

    // Bind the event hashchange, using jquery-hashchange-plugin
    // $(window).hashchange(function() {
    //     showTab(location.hash.replace("#", ""));
    // })

    // Trigger the event hashchange on page load, using jquery-hashchange-plugin
    // $(window).hashchange();

// $('.sb-search').bind('click', function() {
//     $(this).addClass('sb-search-open')
// })

// $('.sb-search-submit').bind('click', function() {
//     let textInput = $('.sb-search-input').val()

//     if (textInput > 0 ) {    
//     } else {
//         $('.sb-search').removeClass('sb-search-open')
//     }
// })



// $('.sb-search-input').bind('click', function() {
//     ev.stopPropagation();
// })





// $(window).scroll(function() {
//     if ($(window).scrollTop() > $('.header').height()) {
//         $('.header').addClass('.header-scroll')
//     }
// })

// $('#phoneMore').bind('hover', function() {
//     $('.phoneMore').show()
// })



// $('.info__phone').bind('click', function() {
//     $('.phone-more').toggleClass('d-block')
// })



