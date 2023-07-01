$(document).ready(function($) {
    $('.card-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
});
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 10,
                stagePadding: 20,
            },
            600: {
                items: 3,
                margin: 20,
                stagePadding: 50,
            },
            1000: {
                items: 6
            }
        }
    });
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
});

$('.owl-dot').click(function() {
    $('.owl-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);
});
