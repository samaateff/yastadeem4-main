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
});

$(document).ready(function(){


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
    });


    $(document).ready(function(){


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
        });




        $(document).ready(function(){


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
                        items:1
                    },
                    1000:{
                        items:2
                    },
                    1200:{
                        items:3
                    },
                }
            });
            });
    

            
        $(document).ready(function(){


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

    

$(document).ready(function(){

$('.owl-carousel.ThemeCoderClass3').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: true,
    autoplay: true,
    autoplayTimeout:2000,
    autoplaySpeed:2000,
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
            items:3
        },
    }
});

var owl = $('.ThemeCoderClass2');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn2').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn2').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

});

$(document).ready(function(){


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
    });