
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}


$(function () {
    $('.demo').refineSlide({
        autoPlay: true,
        delay:3300,
        transition :'fade',
        useArrows :'true',
        arrowTemplate : '<div class="rs-arrows"><a href="#" class="rs-prev"><i class="fas fa-chevron-left"></i></a><a href="#" class="rs-next"><i class="fas fa-chevron-right"></i></a></div>',
    });
});



$('.popular-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    rtl: true,
    autoplay: true,
    pagination: true,
    autoplayTimeout: 6500,
    smartSpeed: 2000,
    dragEndSpeed: 2000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    animate: true,
    navText: [
        "<i class='fa fa-chevron-circle-right'></i> ",
        "<i class='fa fa-chevron-circle-left'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});


$('.payment-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    rtl: true,
    autoplay: true,
    pagination: true,
    autoplayTimeout: 5100,
    smartSpeed: 2000,
    dragEndSpeed: 2000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    animate: true,
    navText: [
        "<i class='fa fa-chevron-circle-right'></i> ",
        "<i class='fa fa-chevron-circle-left'></i>"
    ],
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
});


$('.gifts-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    rtl: true,
    autoplay: true,
    pagination: true,
    autoplayTimeout: 4200,
    smartSpeed: 2000,
    dragEndSpeed: 2000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    animate: true,
    navText: [
        "<i class='fa fa-chevron-circle-right'></i> ",
        "<i class='fa fa-chevron-circle-left'></i>"
    ],
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
});


$('.game-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    rtl: true,
    autoplay: true,
    pagination: true,
    autoplayTimeout:5600,
    smartSpeed: 2000,
    dragEndSpeed: 2000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    animate: true,
    navText: [
        "<i class='fa fa-chevron-circle-right'></i> ",
        "<i class='fa fa-chevron-circle-left'></i>"
    ],
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
});


$('.related-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    rtl: true,
    autoplay: true,
    pagination: true,
    autoplayTimeout: 6500,
    smartSpeed: 2000,
    dragEndSpeed: 2000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    animate: true,
    navText: [
        "<i class='fa fa-chevron-circle-right'></i> ",
        "<i class='fa fa-chevron-circle-left'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 6
        }
    }
});



$(document).ready(function() {

    $(".p-qty-btn-p").click(function(){

        var p_qty = parseInt($("#input-quantity").val());
        p_qty += 1 ;
        $("#input-quantity").val(p_qty);
    });

    $(".p-qty-btn-m").click(function(){
        var p_qty = parseInt($("#input-quantity").val());
        p_qty -= 1 ;
        if( p_qty < 1){
            p_qty = 1 ;
        }
        $("#input-quantity").val(p_qty);

    });

});