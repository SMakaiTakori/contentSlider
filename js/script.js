$(document).ready(function() {   // Allows everything to load before jQuery
    //Set Options
    var speed = 500;            // Fade speed
    var autoswitch = true;      // Auto slider options
    var autoswitch_speed = 4000 // Auto slider speed

    // Add initial active class
    $('.slide').first().addClass('active');

    // Hide all slides
    $('.slide').hide();

    //Show first slide
    $('.active').show();

      // Next Handler
    $('#next').on('click', nextSlide);

  
     // Previous Handler
    $('#prev').on('click', prevSlide);

    // Auto slider Handler
    if(autoswitch == true) {
        setInterval (nextSlide, autoswitch_speed);
    }

    // Switch to next slide
    function nextSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

    // Switch to previous slide
    function prevSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

});