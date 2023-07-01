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
    $('.owl-carousel1').owlCarousel({
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
$(document).ready(function() {
    $('.owl-carousel2').owlCarousel({
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
                items: 5
            }
        }
    });
});
let btn= document.querySelector('.bt_btn');
btn.addEventListener('click',function(){

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})


