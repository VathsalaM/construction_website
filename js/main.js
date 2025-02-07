(function ($) {
    "use strict";


    $(document).ready(function () {
        // $('#spinner-container').append('spinner.html');
        // $('#top-bar-container').load('topbar.html');
        // $('#html_container').load('header.html');
        $('#navbar-container').load('navbar.html');
        $('#project-container').load('project_details.html');
        $('#contact-us-container').load('contact_details.html');
        $('#footer-container').load('footer.html');
    });

    if (window.sessionStorage) {
        var localLanguage = sessionStorage.getItem('localLanguage', document.documentElement.lang) || "en";
        var elements = document.querySelectorAll('[data-i18n]')
        elements.forEach((element) => {
            var keys = element.dataset.i18n.split('.');
            var text = keys.reduce((obj, i) => obj[i], translations[localLanguage]);
            if (text) {
                element.innerHTML = text;
            }
        });
    }

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


})(jQuery);

