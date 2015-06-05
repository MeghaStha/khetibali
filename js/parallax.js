jQuery(document).ready(function ($) {
    $(window).stellar();
      
    var links = $('#nav').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');
	//Setup the waypoints plugin
    slide.waypoint(function (event, direction) {
        //get the variable of the data-slide attribute associated with each slide
        dataslide = $(this).attr('data-slide');
        //If the user scrolls up change the nav link that has the same data-slide attribute as the slide to active and
        //remove the current class from the previous nav link
        if (direction === 'down') {
            $('#nav li[data-slide="' + dataslide + '"]').addClass('current').prev().removeClass('current');
        }
        // else If the user scrolls down change the nav link that has the same data-slide attribute as the slide to active and
        //remove the current class from the next nav link
        else {
            $('#nav li[data-slide="' + dataslide + '"]').addClass('current').next().removeClass('current');
        }
    });
    //waypoints won't detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class
    //from nav link 2 and adds it to nav link 1.
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('#nav li[data-slide="1"]').addClass('current');
            $('#nav li[data-slide="2"]').removeClass('current');
        }
    });
    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutExpo' for a better scrolling animation.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutExpo');
    }
    //When the user clicks on the nav links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
});