$(document).ready(function() {
    // navbar icon change
    $('.nav-button').click(() => {
        $('.nav-button').toggleClass('change');
    });

    // change navbar while scrolling
    $(window).scroll(function() {
        let position = $(this).scrollTop();

        if(position >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
    });

    // Animate Camera and text
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 650) {
            $('.camera-img').addClass('fromLeft');
            $('.mission-text').addClass('fromRight');
        } else {
            $('.camera-img').removeClass('fromLeft');
            $('.mission-text').removeClass('fromRight');
        }
    });

    // Animate Gallery photos
    $('.gallery-list-item').click(function() {
        let value = $(this).attr('data-filter');
        $(this).addClass('active-item').siblings().removeClass('active-item');
        if(value === 'all') {
            $('.filter').show(300);
        } else {
            $('.filter').not(`.${value}`).hide(300);
            $('.filter').filter(`.${value}`).show(300);
        }
    });

    // Animating Pricing Section Cards
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        console.log(position)
        if(position >= 4300) {
            $('.card-1').addClass('moveFromLeft');
            $('.card-2').addClass('moveFromBottom');
            $('.card-3').addClass('moveFromRight');
        } else {
            $('.card-1').removeClass('moveFromLeft');
            $('.card-2').removeClass('moveFromBottom');
            $('.card-3').removeClass('moveFromRight');
        }

        if(position >= 4600) {
            $('.pricing-end').addClass('moveFromRight');
        } else {
            $('.pricing-end').removeClass('moveFromRight');
        }
    });
});
































