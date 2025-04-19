$(document).ready(function () {
    function fadeInOnScroll() {
      $('.fade-in').each(function () {
        const elemTop = $(this).offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();

        if (elemTop < windowBottom - 50) {
          $(this).addClass('visible');
        }
      });
    }

    $(window).on('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Run on load
  });