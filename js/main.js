$(document).ready(function(){


$('.owl-carousel.ThemeCoderClass').owlCarousel({
    // loop:true,
    margin:10,
    // nav:true,
    dots: true,
    // autoplay: true,
    autoplayTimeout:2000,
    autoplaySpeed:2000,
    rtl: true,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        1200:{
            items:1
        },
    }
});


// 
$('.owl-carousel.myowl44').owlCarousel({
    // loop:true,
    margin:10,
    nav:true,
    dots: true,
    // autoplay: true,
    autoplayTimeout:2000,
    autoplaySpeed:2000,
    rtl: true,
    responsive:{
        0:{
            nav:false,
            dots:false,
            items:1
        },
        400:{
            nav:false,
            dots:false,
            items:1
        },
        600:{
            nav:false,
            dots:false,
            items:1
        },
        1000:{
            nav: true,
            navText: ["<img src='images/Path 8338.svg'>","<img src='images/Path 8338.svg'>"],
            items:1
        },
        1200:{
            nav: true,
            navText: ["<img src='images/Path 8317.svg'>","<img src='images/Path 8317.svg'>"],
            items:1
        },
    }
    
});


// 
$('.owl-carousel.ThemeCoderClass2.myowl2').owlCarousel({
    loop:true,
    margin:10,
    // nav:true,
    dots: true,
    // autoplay: true,
    autoplayTimeout:2000,
    autoplaySpeed:2000,
    rtl: true,
    center: true,
    // stagePadding:true,
    // startposition:true,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        1200:{
            items:5
        },
    }
});


$('.owl-carousel.ThemeCoderClass4.myowl4').owlCarousel({
    loop:true,
    margin:10,
   
    dots: false,
    // autoplay: true,
    autoplayTimeout:2000,
    autoplaySpeed:2000,
    rtl: true,
    center: true,
    // stagePadding:true,
    // startposition:true,
    responsive:{
        0:{
            nav:false,
            dots:false,
            items:1
        },
        400:{
            nav:false,
            dots:false,
            items:1
        },
        600:{
            nav:false,
            dots:false,
            items:1
        },
        1000:{
            nav: true,
            navText: ["<img src='images/Path 8317.svg'>","<img src='images/Path 8317.svg'>"],
            items:1
        },
        1200:{
            nav: true,
            navText: ["<img src='images/Path 8317.svg'>","<img src='images/Path 8338.svg'>"],
            items:3
        },
    }
});


$('.owl-carousel.ThemeCoderClass5.myowl5').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    // autoplay: true,
    autoplayTimeout:2000,
    autoplaySpeed:2000,
    rtl: true,
    center: true,
    // stagePadding:true,
    // startposition:true,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:3
        },
    }
});


$('.owl-carousel.ThemeCoderClass6.myowl6').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    // autoplay: true,
    autoplayTimeout:2000,
    autoplaySpeed:2000,
    rtl: true,
    center: false,
    // stagePadding:true,
    // startposition:true,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        1200:{
            items:1
        },
    }
});
});






    
    // 

// java
    AOS.init();

    // 

    $(document).ready(function () {
        $("#exampleModal").on('hidden.bs.modal', function (e) {
            $("#exampleModal iframe").attr("src", $("#exampleModal iframe").attr("src"));
            var $v = $(e.delegateTarget).find('video');
            $v[0].pause();
        });
// variables 
        var toTop = $('.to-top');
// logic
        toTop.on('click', function () {
            $('html, body').animate({
                scrollTop: $('html, body').offset().top,
            });
        });

    });

    // Get this script ready when the page loads
    $(document).ready(function () {
//   Create a function
        $(".scrollDown").click(function (event) {
//       Select the body of the page and scroll down by 650 pixels worth
            $("html, body").animate({scrollTop: $('.backimg').offset().top}, 1000);
        });
    });


    $('.overlay-content form').hide();

    function openSearch() {
        $('#myOverlay').fadeIn(2000);
        $('.overlay-content form').fadeIn(1000).addClass('active');
        $('.overlay-content form').removeClass('unactive');
        //   $('.overlay-content form').delay(2000).slideDown(2000);
    }

    function closeSearch() {
        $('#myOverlay').fadeOut(2000);
        $('.overlay-content form').removeClass('active');
        $('.overlay-content form').fadeIn(1000).addClass('unactive');
    }








    // Hide header on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If scrolled down and past the navbar, add class .nav-up.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
            if ($(document).scrollTop() > 20) {
                $('.nav-up').css({
                    'top' : '-140px',
                });
                $('header').addClass('border');
            }else{
                $('.nav-down').css({
                    'top' : '3em',
                });
                $('header').removeClass('border');
            }
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
                if ($(document).scrollTop() > 20) {
                    $('.nav-down').css({
                        'top' : '5px',
                    });
                    $('header').addClass('border');
                }else{
                    $('.nav-down').css({
                        'top' : '3em',
                    });
                    $('header').removeClass('border');
                }
            }
        }

        lastScrollTop = st;
    }


var $owl = $('.myowl2');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});


$(document).on('click', '.owl-item>div', function() {
  // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
  var $speed = 300;  // in ms
  $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
});