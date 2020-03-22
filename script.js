$(document).ready(function() {
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
    })

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 200){
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
    })

    // mission
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 250) {
            $('.missionTitle').addClass('moveBottom');
            
        } else {
            $('.missionTitle').removeClass('moveBottom');
        }
    })

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 300) {
            $('.Columns').addClass('zoomIn');
            
        } else {
            $('.Columns').removeClass('zoomIn');
        }
    })

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 650) {
            $('.logo-image').addClass('moveRight');
            $('.mission-text').addClass('moveLeft');
        } else {
            $('.logo-image').removeClass('moveRight');
            $('.mission-text').removeClass('moveLeft');
        }
    })
})