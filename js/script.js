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

    $('#next').on('click', function(){
        alert('Next was clicked');

    });


});